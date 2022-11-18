import PopoverInfo from "../modals/PopoverInfo";
import moment from "moment";
import {MdBookmarkAdded, MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {postLikeAction, postRepliesAction, postSavesAction} from "../../redux/Actions/feedActions";
import {RiHeart2Fill, RiHeart2Line, RiShareForwardLine} from "react-icons/ri";
import {FiLink} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";
import {BsCodeSlash, BsEmojiHeartEyes, BsImage} from "react-icons/bs";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Popover} from "antd";

const Feed = ({feeds, my_profile, loadmore}) =>
{
    const dispatch = useDispatch()
    const [comment, setComment] = useState('');
    const commentator = my_profile ? my_profile?.id : null;
    const [post, setPost] = useState(null);

    const submitComment = (e) =>
    {
        e.preventDefault()
        dispatch(postRepliesAction(post, comment, commentator, null))
    }
    // console.log(feeds)
    return(
        <div>
            {feeds?.slice(0,loadmore)?.map((item, index)=>
                <div key={index} className="max-w-3xl mb-4 h-auto px-8 py-4 bg-white rounded dark:bg-gray-800 hover:shadow-lg">
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Popover content={<PopoverInfo item={item} my_profile={my_profile}/>}>
                                    <img  src={item?.profile?.avatar} alt="" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                </Popover>
                                <a href={`/hisprofile/${item?.profile?.id}`} className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize">{item?.profile?.user?.username}<span className="font-thin capitalize ml-1">@{item?.profile?.user?.username}
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
                                    <p className="mt-2 ml-3 text-gray-600 dark:text-gray-300">{item?.content?.slice(0, 250)}<a href={`/single/${item?.id}`} className="text-blue-700">...</a></p>
                                </div>
                                <div>
                                    <a href={`/single/${item?.id}`}>
                                        {item?.cover_image &&<img src={item?.cover_image} className="object-contain w-56 h-56 rounded-lg md:h-28  md:w-64 md:rounded md:rounded-lg" alt=""/>}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">

                            <div className="flex items-center hover:text-blue-500"
                                 data-bs-toggle="modal" data-bs-target="#feedCommentModal">
                                <MdOutlineQuickreply size={20} className="mr-2" onMouseOver={()=>setPost(item?.id)}/>
                                {item?.num_replies>0 && <span>{item?.num_replies}</span>}
                            </div>
                            <div className="flex items-center hover:text-red-700">
                                {item?.saves?.includes(commentator) ?
                                    <MdBookmarkAdded  size={20} color="green" type="submit" onClick={()=>dispatch(postSavesAction(item?.id))}/>:
                                    <MdOutlineBookmarkBorder size={20} type="submit" onClick={()=>dispatch(postSavesAction(item?.id))}/>}
                                {item?.num_saves>0 &&<span className='ml-2'>{item?.num_saves}</span>}
                            </div>
                            <div className="flex items-center hover:text-red-700">
                                {item?.likes?.includes(commentator) ?
                                    <RiHeart2Fill  size={20} color="red" type="submit" onClick={()=>dispatch(postLikeAction(item?.id))}/>:
                                    <RiHeart2Line size={20}  type="submit" onClick={()=>dispatch(postLikeAction(item?.id))}/>}
                                {item?.num_likes>0 &&<span className='ml-2'>{item?.num_likes}</span>}
                            </div>
                            <div className="flex items-center hover:text-blue-700">
                                <RiShareForwardLine size={20} className="mr-2"/>{item?.shares}
                            </div>
                            <a href={`/single/${item?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
                        </div>
                    </div>
                </div>
            )}

            {/* modal comments*/}
            <div
                className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="feedCommentModal" tabIndex="-1" aria-labelledby="feedCommentModal"
                aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                    <div   className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-body relative p-4">
                            <form onSubmit={submitComment}>
                                <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                    <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                                        <label htmlFor="comment" className="sr-only">Your comment</label>
                                        <textarea aria-required={true} onChange={(e)=>setComment(e.target.value)} id="comment" rows="2" className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required=""></textarea>
                                    </div>
                                    <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                                        <div className="flex pl-0 sm:pl-2">
                                            <button type="button" className="p-2 text-gray-500 font-bold rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <FiLink/>
                                            </button>
                                            <button type="button"  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <GrLocation/>
                                            </button>
                                            <button type="button"  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <BsImage/>
                                            </button>
                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <BsCodeSlash/>
                                            </button>
                                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <BsEmojiHeartEyes/>
                                            </button>
                                        </div>
                                        <button type="submit"  data-bs-dismiss="modal" aria-label="Close"
                                                disabled={commentator===null || comment==='' || post===null}
                                                className="inline-flex items-center space-x-1 py-2 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                            Comment
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/*end modal*/}
        </div>
    )
}
export default Feed
