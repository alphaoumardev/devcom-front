import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {MdBookmarkAdded, MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {getTopicsAction} from "../../redux/Actions/topicsActions";
import {deleteMyPostAction, loadMyInfoAction} from "../../redux/Actions/mineAction";
import {IoMdPerson} from "react-icons/io";
import moment from "moment";
import {postLikeAction, postSavesAction} from "../../redux/Actions/feedActions";
import {RiDeleteBin6Line, RiHeart2Fill, RiHeart2Line} from "react-icons/ri";
import {AiFillEdit, AiOutlineQuestionCircle} from "react-icons/ai";
import {Empty, Popconfirm} from 'antd';
import EditPostModal from "../modals/EditPostModal";
import Loader from "../modals/Loader";
const MyPosts = () =>
{
    const dispatch = useDispatch()
    const {my_profile, my_posts} = useSelector(state=> state.getMyInfoReducer)
    const [itemToEdit, setItemToEdit] = useState({});
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
            dispatch(getTopicsAction())
            dispatch(loadMyInfoAction())
            window.addEventListener('scroll', handleInfiniteScroll)
            return ()=> window.removeEventListener('scroll', handleInfiniteScroll )
        }
    }, [dispatch, ]);
    return(
        <div>
            {my_posts?.length > 0 ?
                <div>
                    {my_posts?.slice(0, loadmore)?.map((item, index) =>
                        <div key={index}
                             className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        {my_profile.avatar ?
                                            <img className="rounded-full  h-10 w-10 object-cover"
                                                 src={my_profile.avatar} alt=""/> :
                                            <IoMdPerson
                                                className="rounded-full  h-10 w-10 object-contain text-gray-400"/>}

                                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 ml-1 capitalize">{my_profile?.user?.username}
                                            <span className="font-thin capitalize ml-1">@{my_profile?.user?.username}
                                                <span
                                                    className="ml-3">{moment(item?.posted?.toString()).startOf().fromNow()}</span>
                                                    </span>
                                        </a>
                                    </div>
                                    <span className="text-sm font-light text-gray-600 dark:text-gray-400"></span>
                                    <a href={`/${item?.topic?.name}`}
                                       className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{item?.topic?.name}</a>
                                </div>
                                <div className="mt-2 ">
                                    <a href={`/single/${item?.id}`}
                                       className="text-2xl ml-2 font-bold text-gray-700 capitalize dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:underline">{item?.title}</a>
                                    <div className="flex">
                                        <div>
                                            <p className="mt-2 ml-3 text-gray-600 dark:text-gray-300 ">{item?.content?.slice(0, 250)}<a
                                                href={`/single/${item?.id}`} className="text-blue-700">...</a></p>
                                        </div>
                                        <div>
                                            <a href={`/single/${item?.id}`}>
                                                {item?.cover_image && <img
                                                    className="object-contain w-56 h-56 rounded-lg md:h-28  md:w-64 md:rounded md:rounded-lg"
                                                    src={item?.cover_image} alt=""/>}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center text-gray-500 hover:text-blue-500">
                                        <MdOutlineQuickreply size={20} className="mr-2"/>{item?.num_replies > 0 &&
                                        <span>{item?.num_replies}</span>}
                                    </div>
                                    <div className="flex items-center text-gray-600 hover:text-green-500">
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
                                         data-bs-toggle="modal" data-bs-target="#editPostModal">
                                        <AiFillEdit size={20} className="mr-2" onClick={() => setItemToEdit(item)}/>
                                        {item?.shares > 0 && <span>{item?.shares}</span>}
                                    </div>

                                    <div className="flex items-center text-red-600 hover:text-red-800">
                                        <Popconfirm
                                            title="Are you sure to delete this Post?"
                                            onConfirm={() => dispatch(deleteMyPostAction(item?.id))}
                                            okText="Yes"
                                            cancelText="No"
                                            icon={ <AiOutlineQuestionCircle color={"red"} size={20}/>}
                                        >
                                            <RiDeleteBin6Line size={20} className="mr-2"/> {item?.shares > 0 &&
                                            <span>{item?.shares}</span>}
                                        </Popconfirm>
                                    </div>
                                    <a href={`/single/${item?.id}`}
                                       className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
                                </div>
                            </div>
                        </div>
                    )}
                    <Loader loadingFeeds={loadingFeeds}/>
                    <EditPostModal item={itemToEdit}/>
                </div> :
                <Empty/>
            }
        </div>
    )
}
export default MyPosts
