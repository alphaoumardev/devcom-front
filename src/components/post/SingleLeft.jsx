import {MdBookmarkAdded, MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {
    BsCodeSlash,
    BsEmojiHeartEyes,
    BsFacebook,
    BsImage,
    BsReddit,
    BsTwitter
} from "react-icons/bs";
import {RiHeart2Fill, RiHeart2Line, RiShareForwardLine,} from "react-icons/ri";
import {FaDiscord} from "react-icons/fa";
import {FiLink} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";
import {useState} from "react";
import {
    postLikeAction,
    postRepliesAction, postSavesAction
} from "../../redux/Actions/feedActions";
import {useDispatch,} from "react-redux";

const SingleLeft = ({data, id, my_profile})=>
{
    const dispatch = useDispatch()
    const [comment, setComment] = useState('');
    const commentator = my_profile ? my_profile?.id : null;
    let post = id
    // console.log(parent)
    const submitComments = (e) =>
    {
        e.preventDefault()
        dispatch(postRepliesAction(post, comment, commentator, null))
    }
    return(
        <>
        <div className="flex-col sticky top-36 max-w-xl  mt-12">
            <div className="mb-12 flex-col  hover:text-green-500 cursor-pointer"
                 data-bs-toggle="modal" data-bs-target="#commentModal">
                <div className="flex justify-center items-center">
                    <MdOutlineQuickreply  size={25} className="mr-2"/>
                </div>
                <div className="flex justify-center">
                    {data?.num_replies>0 &&<span>{data?.num_replies}</span>}
                </div>
            </div>
            <div className="mb-12 flex-col hover:text-red-700" >
                <div className="flex justify-center items-center">
                    {data?.saves?.includes(commentator)  ?
                        <MdBookmarkAdded  size={25} color={"green"} type="submit" onClick={()=>dispatch(postSavesAction(data?.id))}/>:
                        <MdOutlineBookmarkBorder size={25} type="submit" onClick={()=>dispatch(postSavesAction(data?.id))}/>}
                </div>
                <div className="flex justify-center items-center">
                    {data?.num_saves>0 &&<span>{data?.num_saves}</span>}
                </div>
            </div>

            <div className="mb-12 flex-col hover:text-red-700" >
                <div className="flex justify-center items-center">
                    {data?.likes?.includes(commentator)  ?
                        <RiHeart2Fill  size={25} color={"red"} type="submit" onClick={()=>dispatch(postLikeAction(data?.id))}/>:
                        <RiHeart2Line size={25}  type="submit" onClick={()=>dispatch(postLikeAction(data?.id))}/>}
                </div>
                <div className="flex justify-center items-center">
                    {data?.num_likes>0 &&<span>{data?.num_likes}</span>}
                </div>
            </div>
            <div className=" relative block">
                <div className="peer relative  hover:text-blue-700 cursor-pointer">
                    <RiShareForwardLine size={25} className="mr-2"/>{data?.shares}
                </div>
                {/*<-- Dropdown menu -->*/}
                <div
                    className="hidden peer-hover:flex absolute hover:flex  m-auto w-56 py-5 mt-2 right-0  bg-white rounded-md shadow-2xl dark:bg-gray-800">
                    <a href="#"
                       className="flex cursor-pointer items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 hover:rounded-full dark:hover:bg-gray-700 dark:hover:text-white">
                        <BsTwitter size={25} className="text-blue-500"/>
                    </a>
                    <a href="#"
                       className="flex cursor-pointer items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 hover:rounded-full dark:hover:bg-gray-700 dark:hover:text-white">
                        <BsFacebook size={25} className="text-blue-500"/>
                    </a>
                    <a href="#"
                       className="flex cursor-pointer items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 hover:rounded-full dark:hover:bg-gray-700 dark:hover:text-white">
                        <FaDiscord size={25} className="text-black"/>
                    </a>
                    <a href="#"
                       className="flex cursor-pointer items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 hover:rounded-full dark:hover:bg-gray-700 dark:hover:text-white">
                        <BsReddit size={25} className="text-orange-400"/>
                    </a>

                </div>
            </div>
        </div>

    {/*    modal comments*/}
    <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="commentModal" tabIndex="-1" aria-labelledby="commentModal"
        aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
            <div   className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-body relative p-4">
                    <form onSubmit={submitComments}>
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
    </>
    )
}
export default SingleLeft
