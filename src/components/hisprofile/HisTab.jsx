import {MdBookmarkAdded, MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {RiHeart2Fill, RiHeart2Line, RiShareForwardLine,} from "react-icons/ri";
import moment from "moment";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {useDispatch, useSelector} from "react-redux";
import {followProfileAction} from "../../redux/Actions/activitiesAction";
import {postLikeAction, postSavesAction} from "../../redux/Actions/feedActions";
import {Empty} from "antd";
import {IoMdPerson} from "react-icons/io";

const HisTab = ({hisprofile, hisposts, hisfollowers, hisfollowing})=>
{
    const {my_info} = useSelector(state => state.getMyInfoReducer)
    const dispatch = useDispatch()
    return(
        <div>
            <Tabs id="custom-animation" value="posts">
                <TabsHeader>
                    <Tab  value="posts" className="font-bold sm:text-xl text-sm" >
                        Posts(<span className="text-blue-500">{hisposts?.length}</span>)
                    </Tab>
                    <Tab  value="following" className="font-bold sm:text-xl text-sm">
                        Followers(<span className="text-blue-500">{hisfollowers?.length}</span>)
                    </Tab>
                    <Tab  value="followers" className="font-bold sm:text-xl text-sm">
                        Following(<span className="text-blue-500">{hisfollowing?.length}</span>)
                    </Tab>
                </TabsHeader>
                <TabsBody
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 250 },}}
                >
                <TabPanel value="posts">
                    {hisposts?.length>0 ?
                        <div className={"mb-8 w-full"}>
                            {hisposts?.map((item, index)=>
                                <div key={index} className="w-full mb-4 h-auto p-2 sm:px-5 sm:py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                {hisprofile.avatar ?
                                                    <img className="rounded-full  h-10 w-10 object-cover"
                                                         src={hisprofile.avatar} alt=""/> :
                                                    <IoMdPerson className="rounded-full h-10 w-10 object-contain text-gray-400"/>}

                                                <div className={"sm:hidden flex-col ml-2 mr-2 mb-1"}>
                                                    <div className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 ml-1 capitalize">{hisprofile?.user?.username}</div>
                                                    <div className="font-thin capitalize ml-1 text-blue-500 ">@{hisprofile?.user?.username}</div>
                                                </div>
                                                <span className="sm:hidden ml-3">{moment(item?.posted?.toString()).startOf().fromNow()}</span>

                                                <div className="hidden sm:flex font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize ml-2">{hisprofile?.user?.username}
                                                    <span className="font-thin capitalize ml-1 text-blue-500">@{hisprofile?.user?.username}
                                                        <span className="ml-4 text-black">{moment(item?.posted?.toString()).startOf().fromNow()}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="text-sm font-light text-gray-600 dark:text-gray-400"></span>
                                            <a href={`/${item?.topic?.name}`} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{item?.topic?.name}</a>
                                        </div>

                                        <div className="mt-2 ">
                                            <a href={`/single/${item?.id}`}
                                               className="sm:text-2xl text-xl ml-2 font-bold text-gray-700 capitalize dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:underline">{item?.title}</a>
                                            <div className="flex">
                                                <div>
                                                    <p className="mt-2 font-normal ml-3 text-gray-600 dark:text-gray-300 ">{item?.content?.slice(0, 250)}<a href={`/single/${item?.id}`} className="text-blue-700">...</a></p>
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
                                            <a href={`/single/${item?.id}`} className="flex items-center cursor-pointer text-gray-500 hover:text-blue-500">
                                                <MdOutlineQuickreply size={20} className="mr-2"/>{item?.num_replies > 0 && <span>{item?.num_replies}</span>}
                                            </a>
                                            <div className="flex items-center text-gray-600 hover:text-green-500">
                                                {item?.saves?.includes(my_info?.id) ?
                                                    <MdBookmarkAdded size={20} color={"green"} type="submit"  onClick={() => dispatch(postSavesAction(item?.id, hisprofile?.id))}/>:
                                                    <MdOutlineBookmarkBorder size={20} type="submit"  onClick={() => dispatch(postSavesAction(item?.id,hisprofile?.id))}/>}
                                                {item?.num_saves > 0 && <span className='ml-2'>{item?.num_saves}</span>}
                                            </div>
                                            <div className="flex items-center text-gray-500 hover:text-red-700">
                                                {item?.likes?.includes(my_info?.id) ?
                                                    <RiHeart2Fill size={20} color={"red"} type="submit" onClick={() => dispatch(postLikeAction(item?.id,hisprofile?.id))}/>:
                                                    <RiHeart2Line size={20} type="submit" onClick={() => dispatch(postLikeAction(item?.id,hisprofile?.id))}/>}
                                                {item?.num_likes>0 &&<span className='ml-2'>{item?.num_likes}</span>}
                                            </div>
                                            <div className="flex items-center text-gray-500 hover:text-blue-800">
                                                <RiShareForwardLine size={20} className="mr-2"/>{item?.shares>0 && <span>{item?.shares}</span>}
                                            </div>
                                            <a href={`/single/${item?.id}`} className="hidden sm:flex text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/*<Loader loadingFeeds={loadingFeeds}/>*/}
                        </div>:
                        <Empty/>
                    }
                </TabPanel>
                <TabPanel value="following">
                    {hisfollowers?.length > 0 ?
                        <div>
                            {hisfollowers?.map((item, index) =>
                                <div key={index} className="max-w-3xl h-auto px-2 py-2 rounded dark:bg-gray-800">
                                    <div className="flex flex-row  justify-between ">
                                            <div className="flex">
                                                <div className="flex items-center">
                                                    <img src={item.avatar} alt="" className="rounded-full h-8 w-8 object-cover"/>
                                                </div>
                                                <div className="flex-col ml-2 mb-0 p-0">
                                                    <div className="text-sm font-medium py-0 text-gray-900 dark:text-white capitalize">{item?.user?.username}</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">@{item?.user?.username}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3 ">
                                                <div>
                                                    {my_info?.following?.find((index)=>index?.id === item?.id) ?
                                                        <button type="button"
                                                                className="cursor-pointer bg-red-200 px-3 py-1 rounded-3xl text-base font-semibold text-gray-900 dark:text-white">
                                                            Following
                                                        </button> :
                                                        <button type="button" onClick={() => dispatch(followProfileAction(item?.id, hisprofile?.id))}
                                                                disabled={my_info?.id === item?.id}
                                                                className="cursor-pointer bg-blue-200 px-3 py-1 rounded-3xl text-base font-semibold text-gray-900 dark:text-white">
                                                            Follow
                                                        </button>
                                                    }
                                                </div>
                                                <div>
                                                    <a href={`/hisprofile/${item?.id}`} type="button"
                                                       className="cursor-pointer bg-blue-100 px-3 py-1 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">See
                                                        More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            )}
                            {/*<Loader loadingFeeds={loadingFeeds}/>*/}
                        </div> :
                        <Empty/>
                    }
                </TabPanel>
                <TabPanel value="followers">
                    {hisfollowing?.length > 0 ?
                        <div>
                            {hisfollowing?.map((item, index) =>
                                <div key={index} className="max-w-3xl h-auto px-2 py-2 rounded dark:bg-gray-800">
                                    <div className="flex flex-row  justify-between ">
                                        <div className="flex">
                                            <div className="flex items-center">
                                                <img src={item.avatar} alt="" className="rounded-full h-8 w-8 object-cover"/>
                                            </div>
                                            <div className="flex-col ml-2 mb-0 p-0">
                                                <div className="text-sm font-medium py-0 text-gray-900 dark:text-white capitalize">{item?.user?.username}</div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">@{item?.user?.username}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 ">
                                            <div>
                                                {my_info?.following?.find((index)=>index?.id === item?.id) ?
                                                    <button type="button"
                                                            className="cursor-pointer bg-red-200 px-3 py-1 rounded-3xl text-base font-semibold text-gray-900 dark:text-white">
                                                        Following
                                                    </button> :
                                                    <button type="button" onClick={() => dispatch(followProfileAction(item?.id, hisprofile?.id))}
                                                            disabled={my_info?.id === item?.id}
                                                            className="cursor-pointer bg-blue-200 px-3 py-1 rounded-3xl text-base font-semibold text-gray-900 dark:text-white">
                                                        Follow
                                                    </button>
                                                }
                                            </div>
                                            <div>
                                                <a href={`/hisprofile/${item?.id}`} type="button"
                                                   className="cursor-pointer bg-blue-100 px-3 py-1 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">See
                                                    More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )}
                            {/*<Loader loadingFeeds={loadingFeeds}/>*/}
                        </div> :
                        <Empty/>
                    }
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </div>
    )
}
export default HisTab
