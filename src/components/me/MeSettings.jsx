import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {loadMyInfoAction} from "../../redux/Actions/authActions";
import {
    deleteMyPostAction,
    getSavedPostsAction,
    likedPostsAction,
    profileFollowingMeAction,
    profileIFollowAction
} from "../../redux/Actions/mineAction";
import {PopoverContent, Popover,PopoverHandler} from "@material-tailwind/react";
import EditMyProfile from "../modals/EditMyProfile";
import {IoMdPerson} from "react-icons/io";
import moment from "moment/moment";
import {MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {BsHeart} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";
import EditPostModal from "../modals/EditPostModal";
import {RiDeleteBin6Line} from "react-icons/ri";
import Loader from "../modals/Loader";
import Sidebar from "../Sidebar";
import Activities from "../Activities";

const MeSettings =() =>
{
    const dispatch = useDispatch()
    const {my_profile, my_posts} = useSelector(state=> state.getMyInfoReducer)
    const {user} = useSelector(state => state.authReducer)
    const {following} = useSelector(state => state.getprofileFollowingMeReducer)
    const {liked_posts}= useSelector(state => state.getlikedPostsReducer)
    const {saved_posts} = useSelector(state => state.getsavedPostsReducer)
    const {followers} = useSelector(state => state.getprofileIFollowReducer)
    const [loadmore, setLoadmore] = useState(4);
    const [loadingFeeds, setLoadingFeeds] = useState(false);

    const handleInfiniteScroll = ()=>
    {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >
            document.documentElement.scrollHeight)
        {
            setLoadingFeeds(true)
            setLoadmore((loadmore)=>loadmore + 5)
        }
    }
    useEffect(() =>
    {
        if (my_profile)
        {
            dispatch(loadMyInfoAction())
            dispatch(profileFollowingMeAction())
            dispatch(likedPostsAction())
            dispatch(getSavedPostsAction())
            dispatch(profileIFollowAction())
        }
    }, [dispatch]);

    return(
        <div className="flex">
            <Sidebar/>
            <div className="flex-col">
                <div className="max-w-3xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800">
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center"> </div>
                        </div>
                        <div className="">
                            {/*mine*/}
                            <div className="w-full flex-col">
                                <div className="rounded relative">
                                    <a href="src/components/me/MeSettings#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img className="rounded h-72 w-full object-cover"  src={my_profile?.cover_image} alt=""/>
                                    </a>
                                    <div className="w-full">
                                        <div className="flex justify-center -mt-16 md:justify-end">
                                            <img className="object-cover mr-3 w-32 h-32 border-2 border-black rounded-full dark:border-blue-400"
                                                 alt=""
                                                 src={my_profile?.avatar}/>
                                        </div>

                                        <h3 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl uppercase">{my_profile?.user?.username}</h3>
                                        <span>@{my_profile?.user?.username}</span>

                                        <p className="mt-2 text-gray-600 dark:text-gray-200">{my_profile?.bio}</p>
                                        <div className="flex justify-center justify-content-evenly items-center">
                                            <div className="flex justify-center justify-content-evenly items-center bg-blue-50 w-6/12 m-3 text-xl font-medium hover:bg-blue-300 rounded-full px-2 py-1 outline text-blue-500 dark:text-blue-300">
                                                <Popover placement='bottom'>
                                                    <PopoverHandler>
                                                        <div>
                                                            <button type="button">Edit My Profile</button>
                                                        </div>
                                                    </PopoverHandler>
                                                    <PopoverContent className="mt-16 py-3">
                                                        <div>
                                                            <EditMyProfile my_profile={my_profile}/>
                                                        </div>
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                        </div>
                                    </div>
                                    {/*d*/}
                                </div>
                                {my_posts?.slice(0,loadmore)?.map((item, index)=>
                                    <div key={index} className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    {my_profile.avatar ?
                                                        <img className="rounded-full  h-10 w-10 object-cover" src={my_profile.avatar} alt=""/>:
                                                        <IoMdPerson  className="rounded-full  h-10 w-10 object-contain text-gray-400"/>}

                                                    <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize">{my_profile?.user?.username}
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
                                                <div className="flex items-center text-gray-500 hover:text-green-500">
                                                    <MdOutlineBookmarkBorder size={20} className="mr-2"/>{item?.num_saves>0 && <span>{item?.num_saves}</span>}
                                                </div>
                                                <div className="flex items-center text-gray-500 hover:text-red-700">
                                                    <BsHeart size={20} className="mr-2"/>{item?.num_likes>0 && <span>{item?.num_likes}</span>}
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
                                                        onClick={()=>{dispatch(deleteMyPostAction(item?.id))
                                                            window.location.reload()}}
                                                        size={20} className="mr-2"/> {item?.shares>0 && <span>{item?.shares}</span>}
                                                </div>
                                                <a href={`/single/${item?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                                            </div>
                                        </div>
                                    </div>
                                )}
                                <Loader loadingFeeds={loadingFeeds}/>
                            </div>
                            {/*end*/}
                        </div>
                    </div>
                </div>
            </div>
            <Activities/>
        </div>
    )
}
export default MeSettings
