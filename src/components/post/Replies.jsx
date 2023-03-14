import moment from "moment/moment";
import {MdOutlineQuickreply} from "react-icons/md";
import {RiHeart2Fill, RiHeart2Line} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {postLikeCommentsAction, postRepliesAction} from "../../redux/Actions/feedActions";
import {FiLink} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";
import {BsCodeSlash, BsEmojiHeartEyes, BsImage} from "react-icons/bs";

const Replies = ({data, id, commentator}) =>
{
    const dispatch = useDispatch()
    const [comment, setComment] = useState('');
    const [parent, setParent] = useState(null);
    let post = id
    // console.log(parent, comment)
    const submitReplies = (e) =>
    {
        // console.log(parent)
        e.preventDefault()
        dispatch(postRepliesAction(post, comment, commentator, parent))
    }
    // console.log(data)
    return(
        <div>
        {data?.map((item, index)=>
            <div key={index} className="max-w-2xl mb-1 h-auto px-6 py-2 bg-white rounded-lg  dark:bg-gray-800 ">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center mb-1">
                            <img className="object-cover w-8 h-8 rounded-full sm:block" src={item?.commentator?.avatar} alt=""/>
                            <a className="font-bold text-gray-700 ml-1 cursor-pointer capitalize dark:text-gray-200">{item?.commentator?.user?.username}
                                <span className="font-thin ml-1">@{item?.commentator?.user?.username}
                                <span className="ml-3 dark:text-gray-400">{moment(item?.timestamp?.toString()).startOf().fromNow()}</span></span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 ">
                        <div className="flex-col items-center  ">
                            <div className="flex items-center mb-1  hover:text-blue-500 cursor-pointer"
                                 data-bs-toggle="modal" data-bs-target="#replyModal">
                                <MdOutlineQuickreply onClick={()=>setParent(item?.id)} size={13} className="mr-1"/>{item?.reply_count>0 &&item?.reply_count}
                            </div>

                            <div className="flex items-center hover:text-red-700">
                                {item?.liking?.includes(commentator)?
                                    <RiHeart2Fill size={13} color="red" className="mr-1" onClick={()=>dispatch(postLikeCommentsAction(item?.id, id))}/>:
                                    <RiHeart2Line size={13} className="mr-1" onClick={()=>dispatch(postLikeCommentsAction(item?.id, id))}/>
                                }
                                {item?.like_count>0 &&item?.like_count }

                            </div>
                        </div>
                        <div className="mt-0 flex items-center justify-center text-gray-600 dark:text-gray-300">{item?.comment}</div>
                    </div>
                </div>
                {item.subcomments && <Replies data={item.subcomments} id={id} commentator={commentator} parent={parent}/>}


                {/*    modal replies*/}
                <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                     id="replyModal" tabIndex="-1" aria-labelledby="replyModal"
                     aria-modal="false" >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                        <div   className="modal-content border-none shadow-md relative flex flex-col w-full pointer-events-auto bg-white  rounded-md outline-none text-current">
                            <div className="modal-body relative p-4">
                                <form onSubmit={submitReplies}>
                                    <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                        <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                                            <label htmlFor="reply" className="sr-only">Your reply</label>
                                            <input id="reply" type="text" onChange={(e)=>setComment(e.target.value)} className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Reply here..."/>
                                        </div>
                                        <div className="flex justify-between items-center py-1 px-3 border-t dark:border-gray-600">
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
                                                Reply
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
        )}



        </div>
    )
}
export default Replies
