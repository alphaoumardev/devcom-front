import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import EditMyProfile from "../modals/EditMyProfile";
import moment from "moment/moment";
import {MdBookmarkAdded, MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {AiFillEdit, AiOutlineQuestionCircle} from "react-icons/ai";
import EditPostModal from "../modals/EditPostModal";
import {RiDeleteBin6Line, RiHeart2Fill, RiHeart2Line} from "react-icons/ri";
import Loader from "../modals/Loader";
import Sidebar from "../Sidebar";
import Activities from "../Activities";
import {deleteMyPostAction, loadMyInfoAction} from "../../redux/Actions/mineAction";
import {Empty, Popconfirm} from "antd";
import {postLikeAction, postSavesAction} from "../../redux/Actions/feedActions";

const MeSettings =() =>
{
    const dispatch = useDispatch()
    const {my_profile, my_posts} = useSelector(state=> state.getMyInfoReducer)
    const [loadmore, setLoadmore] = useState(4);
    const [loadingFeeds, setLoadingFeeds] = useState(false);
    const [itemToEdit, setItemToEdit] = useState({});

    // const handleInfiniteScroll = ()=>
    // {
    //     if(window.innerHeight + document.documentElement.scrollTop + 1 >
    //         document.documentElement.scrollHeight)
    //     {
    //         setLoadingFeeds(true)
    //         setLoadmore((loadmore)=>loadmore + 5)
    //     }
    // }
    useEffect(() =>
    {
        dispatch(loadMyInfoAction())
        // window.addEventListener('scroll', handleInfiniteScroll)
        // return ()=> window.removeEventListener('scroll', handleInfiniteScroll )
    }, [dispatch,]);

    return(
        <div className="flex justify-center">
            <div>
                <Sidebar/>
            </div>
            <div className="flex-col">
                <div className="max-w-3xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800">
                    <div>
                        <div className="">
                            {/*mine*/}
                            <div className="w-full flex-col">
                                <div className="rounded relative">
                                    <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
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
                                                <div data-bs-toggle="modal" data-bs-target="#editMyProfileModal">
                                                    <button type="button">Edit My Profile</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*d*/}
                                </div>
                                    {my_posts?.length>0 ?
                                    <div>
                                    {my_posts?.slice(0,loadmore)?.map((item, index)=>
                                        <div key={index} className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img className="rounded-full  h-10 w-10 object-cover" src={my_profile.avatar} alt=""/>
                                                        <a className="font-bold text-gray-700 cursor-pointer ml-2 dark:text-gray-200 capitalize">{my_profile?.user?.username}
                                                            <span className="font-thin capitalize ml-1">@{my_profile?.user?.username}
                                                                <span className="ml-3 capitalize">{moment(item?.posted?.toString()).startOf().fromNow()}</span>
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
                                                        {item?.saves?.includes(item?.profile?.id) ?
                                                            <MdBookmarkAdded size={20} color={"green"} type="submit"  onClick={() => dispatch(postSavesAction(item?.id))}/>:
                                                            <MdOutlineBookmarkBorder size={20} type="submit"  onClick={() => dispatch(postSavesAction(item?.id))}/>}
                                                        {item?.num_saves > 0 && <span className='ml-2'>{item?.num_saves}</span>}
                                                    </div>
                                                    <div className="flex items-center text-gray-500 hover:text-red-700">
                                                        {item?.likes?.includes(item?.profile?.id) ?
                                                            <RiHeart2Fill size={20} color={"red"} type="submit" onClick={() => dispatch(postLikeAction(item?.id))}/>:
                                                            <RiHeart2Line size={20} type="submit" onClick={() => dispatch(postLikeAction(item?.id))}/>}
                                                        {item?.num_likes > 0 && <span className='ml-2'>{item?.num_likes}</span>}
                                                    </div>
                                                    <div className="flex items-center text-blue-600 hover:text-blue-800"
                                                         data-bs-toggle="modal" data-bs-target="#editPostModal"
                                                    >
                                                        <AiFillEdit size={20} className="mr-2" onClick={()=>setItemToEdit(item)}/>
                                                        {item?.shares>0 && <span>{item?.shares}</span>}
                                                    </div>

                                                    <div className="flex items-center text-red-600 hover:text-red-800">
                                                        <Popconfirm
                                                            title="Are you sure to delete this Post?"
                                                            onConfirm={()=>dispatch(deleteMyPostAction(item?.id))}
                                                            okText="Yes"
                                                            cancelText="No"
                                                            icon={ <AiOutlineQuestionCircle color={"red"} size={20}/>}
                                                        >
                                                            <RiDeleteBin6Line size={20} className="mr-2"/> {item?.shares>0 && <span>{item?.shares}</span>}
                                                        </Popconfirm>
                                                    </div>
                                                    <a href={`/single/${item?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    </div>:
                                    <div className="w-full mb-4 h-auto px-5 py-4 rounded-lg  dark:bg-gray-800">
                                        <Empty/>
                                    </div>}
                                    <Loader loadingFeeds={loadingFeeds}/>
                                </div>
                            <div>
                        </div>
                            {/*end*/}
                    </div>
                </div>
                    {/*edit my profile modal*/}
                    <EditMyProfile my_profile={my_profile} />
                    {/*edit the post modal*/}
                    <EditPostModal item={itemToEdit}/>

                </div>
            </div>
            <div>
                <Activities/>
            </div>
        </div>
    )
}
export default MeSettings
