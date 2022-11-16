import {MdBookmarkAdded, MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {BsHeart} from "react-icons/bs";
import {RiDeleteBin6Line, RiHeart2Fill, RiHeart2Line, RiShareForwardLine} from "react-icons/ri";
import {AiFillEdit} from "react-icons/ai";
import moment from "moment";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel, Popover, PopoverHandler, PopoverContent,
} from "@material-tailwind/react";
import {IoMdPerson} from "react-icons/io";
import {deleteMyPostAction} from "../../redux/Actions/mineAction";
import {useDispatch} from "react-redux";
import {useState} from "react";
import EditPostModal from "../modals/EditPostModal";
import Loader from "../modals/Loader";
import {followProfileAction} from "../../redux/Actions/activitiesAction";
import {postLikeAction, postSavesAction} from "../../redux/Actions/feedActions";

const MeTab = ({my_profile, my_posts, following, liked_posts, saved_posts, followedby})=>
{
    const dispatch = useDispatch()
    const [openEdit, setOpenEdit] = useState(false);
    const [loadmore, setLoadmore] = useState(4);
    const [loadingFeeds, setLoadingFeeds] = useState(false);

    const handleOpen = () => setOpenEdit(!openEdit);
    const handleInfiniteScroll = ()=>
    {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >
            document.documentElement.scrollHeight)
        {
            setLoadingFeeds(true)
            setLoadmore((loadmore)=>loadmore + 5)
        }
    }
    // console.log(my_posts)
    return(
        <div>
            <Tabs id="custom-animation" value="posts">
                <TabsHeader>
                    <Tab  value="posts" className="font-bold text-xl" >
                        Posts (<span className="text-blue-500">
                                {my_profile?.my_posts_count>99&&
                                my_profile?.my_posts_count<1000 ? 99+'+':
                                my_profile?.my_posts_count &&
                                my_profile?.my_posts_count>999 ?
                                my_profile?.my_posts_count/1000+'k':
                                my_profile?.my_posts_count}</span>)
                    </Tab>
                    <Tab  value="following" className="font-bold text-xl">
                        Followers (<span className="text-blue-500">
                                    {my_profile?.followedby_count>99&&
                                    my_profile?.followedby_count<1000 ? 99+'+':
                                    my_profile?.followedby_count &&
                                    my_profile?.followedby_count>999 ?
                                    my_profile?.followedby_count/1000+'k':
                                    my_profile?.followedby_count}</span>)
                    </Tab>
                    <Tab  value="followers" className="font-bold text-xl">
                        Following (<span className="text-blue-500">
                                    {my_profile?.follow_count>99&&
                                    my_profile?.follow_count<1000 ? 99+'+':
                                    my_profile?.follow_count &&
                                    my_profile?.follow_count>999 ?
                                    my_profile?.follow_count/1000+'k':
                                    my_profile?.follow_count}</span>)
                    </Tab>
                    <Tab  value="cons" className="font-bold text-xl">
                        Liked (<span className="text-blue-500">
                                    {liked_posts?.length>99&&
                                    liked_posts?.length<1000 ? 99+'+':
                                    liked_posts?.length &&
                                    liked_posts?.length>999 ?
                                    liked_posts?.length/1000+'k':
                                    liked_posts?.length}</span>)
                    </Tab>
                    <Tab  value="saves" className="font-bold text-xl">
                        Saved(<span className="text-blue-500">
                                    {saved_posts?.length>99&&
                                    saved_posts?.length<1000 ? 99+'+':
                                    saved_posts?.length &&
                                    saved_posts?.length>999 ?
                                    saved_posts?.length/1000+'k':
                                    saved_posts?.length}</span>)
                    </Tab>
                </TabsHeader>
                <TabsBody
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 250 },}}
                >
                    <TabPanel value="posts">
                        {my_posts?.slice(0,loadmore)?.map((item, index)=>
                            <div key={index} className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            {my_profile.avatar ?
                                                <img className="rounded-full  h-10 w-10 object-cover" src={my_profile.avatar} alt=""/>:
                                                <IoMdPerson  className="rounded-full  h-10 w-10 object-contain text-gray-400"/>}

                                            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 ml-1 capitalize">{my_profile?.user?.username}
                                                <span className="font-thin capitalize ml-1">@{my_profile?.user?.username}
                                                <span className="ml-3">{moment(item?.posted?.toString()).startOf().fromNow()}</span>
                                                </span>
                                            </a>
                                        </div>
                                        <span className="text-sm font-light text-gray-600 dark:text-gray-400"></span>
                                        <a href={`/${item?.topic?.name}`} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{item?.topic?.name}</a>
                                    </div>

                                    <div className="mt-2 ">
                                        <a href={`/single/${item?.id}`}
                                           className="text-2xl ml-2 font-bold text-gray-700 capitalize dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:underline">{item?.title}</a>
                                        <div className="flex">
                                            <div>
                                                <p className="mt-2 ml-3 text-gray-600 dark:text-gray-300 ">{item?.content?.slice(0, 250)}<a href={`/single/${item?.id}`} className="text-blue-700">...</a></p>
                                            </div>
                                            <div>
                                                <a  href={`/single/${item?.id}`}>
                                                    {item?.cover_image &&<img  className="object-contain w-56 h-56 rounded-lg md:h-28  md:w-64 md:rounded md:rounded-lg"
                                                                                src={item?.cover_image} alt=""/>}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">

                                        <div className="flex items-center text-gray-500 hover:text-blue-500">
                                            <MdOutlineQuickreply size={20} className="mr-2"/>{item?.num_replies>0 && <span>{item?.num_replies}</span>}
                                        </div>
                                        <div className="flex items-center text-gray-600 hover:text-green-500">
                                            {item?.saves?.includes(item?.profile?.id) &&
                                                <MdBookmarkAdded  size={20} color={"green"} type="submit" onClick={()=>dispatch(postSavesAction(item?.id))}/>}
                                            {!item?.saves?.includes(item?.profile?.id)&&
                                                <MdOutlineBookmarkBorder size={20} type="submit" onClick={()=>dispatch(postSavesAction(item?.id))}/>}
                                            {item?.num_saves>0 &&<span className='ml-2'>{item?.num_saves}</span>}
                                        </div>
                                        <div className="flex items-center text-gray-500 hover:text-red-700">
                                            {item?.likes?.includes(item?.profile?.id) &&
                                            <RiHeart2Fill  size={20} color={"red"} type="submit" onClick={()=>dispatch(postLikeAction(item?.id))}/>}
                                            {!item?.likes?.includes(item?.profile?.id)&&
                                                <RiHeart2Line size={20}  type="submit" onClick={()=>dispatch(postLikeAction(item?.id))}/>}
                                            {item?.num_likes>0 &&<span className='ml-2'>{item?.num_likes}</span>}
                                        </div>
                                        <div className="flex items-center text-blue-600 hover:text-blue-800">

                                            <Popover>
                                                <PopoverHandler>
                                                    <div>
                                                        <AiFillEdit size={20} className="mr-2"/>
                                                    </div>
                                                </PopoverHandler>
                                                <PopoverContent>
                                                    <div>
                                                        <EditPostModal item={item}/>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>

                                                {item?.shares>0 && <span>{item?.shares}</span>}
                                            {/*</AiFillEdit>*/}
                                        </div>
                                        <div className="flex items-center text-red-600 hover:text-red-800">
                                            <RiDeleteBin6Line
                                                onClick={()=>dispatch(deleteMyPostAction(item?.id))}
                                                size={20} className="mr-2"/> {item?.shares>0 && <span>{item?.shares}</span>}
                                        </div>
                                        <a href={`/single/${item?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <Loader loadingFeeds={loadingFeeds}/>
                    </TabPanel>
                    <TabPanel value="following">
                        <div className="w-full max-w-3xl h-auto px-5 py-3 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                {followedby?.slice(0,loadmore)?.map((item, index)=>
                                    <li  key={index} className="py-2 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                {item.avatar ?
                                                    <img className="rounded-full  h-8 w-8 object-cover" src={item.avatar} alt=""/>:
                                                    <IoMdPerson  className="rounded-full  h-8 w-8 object-contain text-gray-400"/>}

                                            </div>
                                            <div className="flex-1 min-w-0 text-base">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">{item?.user?.username}</p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">@{item?.user?.username}</p>
                                            </div>
                                            <a href={`/hisprofile/${item?.id}`} type="button"
                                                    className="cursor-pointer inline-flex bg-blue-200 px-4 py-2 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">
                                                See More
                                            </a>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <Loader loadingFeeds={loadingFeeds}/>

                    </TabPanel>
                    <TabPanel value="followers">
                        <div className="w-full max-w-3xl h-auto px-5 py-3 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {following?.slice(0,loadmore)?.map((item, index)=>
                                <li  key={index} className="py-2 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            {item.avatar ?
                                                <img className="rounded-full  h-8 w-8 object-cover" src={item.avatar} alt=""/>:
                                                <IoMdPerson  className="rounded-full  h-8 w-8 object-contain text-gray-400"/>}
                                        </div>
                                        <div className="flex-1 min-w-0 text-base">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">{item?.user?.username}</p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">@{item?.user?.username}</p>
                                        </div>
                                        <a href={`/hisprofile/${item?.id}`} type="button"
                                                className="cursor-pointer inline-flex bg-blue-200 px-4 py-2 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">
                                            See More
                                        </a>
                                        <button type="button" onClick={()=>{dispatch(followProfileAction(item?.id))}}
                                                className="cursor-pointer inline-flex bg-red-200 px-4 py-2 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">
                                            Unfollow
                                        </button>
                                    </div>
                                </li>
                            )}
                        </ul>
                        </div>
                        <Loader loadingFeeds={loadingFeeds}/>

                    </TabPanel>
                    <TabPanel value="cons">
                        {liked_posts?.slice(0,loadmore)?.map((value, index)=>
                            <div key={index} className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            {value?.profile?.avatar ?
                                                <img className="rounded-full  h-10 w-10 object-cover sm:block" src={value?.profile?.avatar} alt=""/>:
                                                <IoMdPerson  className="rounded-full  h-10 w-10 object-contain text-gray-400"/>}
                                            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize">{value?.profile?.user?.username}
                                                <span className="font-thin capitalize ml-1">@{value?.profile?.user?.username}
                                                <span className="ml-3">{moment(value?.posted?.toString()).startOf().fromNow()}</span>
                                                </span>
                                            </a>
                                        </div>
                                        <span className="text-sm font-light text-gray-600 dark:text-gray-400"></span>
                                        <a href={`/${value?.topic?.name}`} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{value?.topic?.name}</a>
                                    </div>

                                    <div className="mt-2 ">
                                        <a href={`/single/${value?.id}`}
                                           className="text-2xl ml-2 font-bold text-gray-700 capitalize dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:underline">{value?.title}</a>
                                        <div className="flex">
                                            <div>
                                                <p className="mt-2 ml-3 text-gray-600 dark:text-gray-300 ">{value?.content?.slice(0, 250)}<a href={`/single/${value?.id}`} className="text-blue-700">...</a></p>
                                            </div>
                                            <div>
                                                <a  href={`/single/${value?.id}`}>
                                                    {value?.cover_image &&<img  className="object-contain w-56 h-56 rounded-lg md:h-28  md:w-64 md:rounded md:rounded-lg"
                                                                                src={value?.cover_image} alt=""/>}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">

                                        <div className="flex items-center hover:text-blue-500">
                                            <MdOutlineQuickreply size={20} className="mr-2"/>{value?.num_replies>0 && <span>{value?.num_replies}</span>}

                                        </div>
                                        <div className="flex items-center text-gray-600 hover:text-green-500">
                                            {value?.saves?.includes(value?.profile?.id) &&
                                                <MdBookmarkAdded  size={20} color={"green"} type="submit" onClick={()=>dispatch(postSavesAction(value?.id))}/>}
                                            {!value?.saves?.includes(value?.profile?.id)&&
                                                <MdOutlineBookmarkBorder size={20} type="submit" onClick={()=>dispatch(postSavesAction(value?.id))}/>}
                                            {value?.num_saves>0 &&<span className='ml-2'>{value?.num_saves}</span>}
                                        </div>
                                        <div className="flex items-center text-gray-500 hover:text-red-700">
                                            {value?.likes?.includes(value?.profile?.id) &&
                                                <RiHeart2Fill  size={20} color={"red"} type="submit" onClick={()=>dispatch(postLikeAction(value?.id))}/>}
                                            {!value?.likes?.includes(value?.profile?.id)&&
                                                <RiHeart2Line size={20}  type="submit" onClick={()=>dispatch(postLikeAction(value?.id))}/>}
                                            {value?.num_likes>0 &&<span className='ml-2'>{value?.num_likes}</span>}
                                        </div>
                                        <div className="flex items-center hover:text-blue-700">
                                            <RiShareForwardLine size={20} className="mr-2"/> {value?.shares>0 && <span>{value?.shares}</span>}
                                        </div>
                                        <a href={`/single/${value?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                                    </div>
                                </div>
                            </div>
                        )}
                        <Loader loadingFeeds={loadingFeeds}/>

                    </TabPanel>
                    <TabPanel value="saves">
                        {saved_posts?.slice(0,loadmore)?.map((value, index)=>
                            <div key={index} className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            {value?.profile?.avatar ?
                                                <img className="rounded-full  h-10 w-10 object-cover sm:block" src={value?.profile?.avatar} alt=""/>:
                                                <IoMdPerson  className="rounded-full  h-10 w-10 object-contain text-gray-400"/>}

                                            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize">{value?.profile?.user?.username}
                                                <span className="font-thin capitalize ml-1">@{value?.profile?.user?.username}
                                                    <span className="ml-3">{moment(value?.posted?.toString()).startOf().fromNow()}</span>
                                                    </span>
                                            </a>
                                        </div>
                                        <span className="text-sm font-light text-gray-600 dark:text-gray-400"></span>
                                        <a href={`/${value?.topic?.name}`} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{value?.topic?.name}</a>
                                    </div>

                                    <div className="mt-2 ">
                                        <a href={`/single/${value?.id}`}
                                           className="text-2xl ml-2 font-bold text-gray-700 capitalize dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:underline">{value?.title}</a>
                                        <div className="flex">
                                            <div>
                                                <p className="mt-2 ml-3 text-gray-600 dark:text-gray-300 ">{value?.content?.slice(0, 250)}<a href={`/single/${value?.id}`} className="text-blue-700">...</a></p>
                                            </div>
                                            <div>
                                                <a  href={`/single/${value?.id}`}>
                                                    {value?.cover_image &&<img  className="object-contain w-56 h-56 rounded-lg md:h-28  md:w-64 md:rounded md:rounded-lg"
                                                                                src={value?.cover_image} alt=""/>}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">

                                        <div className="flex items-center hover:text-blue-500">
                                            <MdOutlineQuickreply size={20} className="mr-2"/>{value?.num_replies>0 && <span>{value?.num_replies}</span>}
                                        </div>
                                        <div className="flex items-center text-gray-600 hover:text-green-500">
                                            {value?.saves?.includes(value?.profile?.id) &&
                                                <MdBookmarkAdded  size={20} color={"green"} type="submit" onClick={()=>dispatch(postSavesAction(value?.id))}/>}
                                            {!value?.saves?.includes(value?.profile?.id)&&
                                                <MdOutlineBookmarkBorder size={20} type="submit" onClick={()=>dispatch(postSavesAction(value?.id))}/>}
                                            {value?.num_saves>0 &&<span className='ml-2'>{value?.num_saves}</span>}
                                        </div>
                                        <div className="flex items-center text-gray-500 hover:text-red-700">
                                            {value?.likes?.includes(value?.profile?.id) &&
                                                <RiHeart2Fill  size={20} color={"red"} type="submit" onClick={()=>dispatch(postLikeAction(value?.id))}/>}
                                            {!value?.likes?.includes(value?.profile?.id)&&
                                                <RiHeart2Line size={20}  type="submit" onClick={()=>dispatch(postLikeAction(value?.id))}/>}
                                            {value?.num_likes>0 &&<span className='ml-2'>{value?.num_likes}</span>}
                                        </div>
                                        <div className="flex items-center hover:text-blue-700">
                                            <RiShareForwardLine size={20} className="mr-2"/> {value?.shares>0 && <span>{value?.shares}</span>}
                                        </div>
                                        <a href={`/single/${value?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <Loader loadingFeeds={loadingFeeds}/>

                    </TabPanel>
                </TabsBody>
            </Tabs>

        </div>
    )
}
export default MeTab
