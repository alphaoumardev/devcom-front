import {MdOutlineQuickreply} from "react-icons/md";
import {AiOutlineRetweet, } from "react-icons/ai";
import {
    BsBookmarkPlus,
    BsCodeSlash,
    BsEmojiHeartEyes,
    BsFacebook,
    BsHeart,
    BsImage,
    BsReddit,
    BsTwitter
} from "react-icons/bs";
import {RiShareForwardLine, } from "react-icons/ri";
import {FaDiscord} from "react-icons/fa";
import {FiLink} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";

const SingleLeft = ({feed})=>
{
    return(
        <div className="flex-col items-center justify-between mt-12">
            <div className="mb-12 items-center hover:text-blue-500 cursor-pointer"
                 data-bs-toggle="modal" data-bs-target="#commentModal">
                <MdOutlineQuickreply  size={25} className="mr-2"/>{feed?.replies}
                {/*<MdOutlineQuickreply size={25} className="mr-2"/>{feed?.replies}*/}
            </div>
            <div className="mb-12 items-center hover:text-green-500 cursor-pointer">
                <BsBookmarkPlus size={25} className="mr-2"/>{feed?.saves}
            </div>
            <div className="mb-12 items-center hover:text-red-700 cursor-pointer">
                <BsHeart size={25} className="mr-2"/>{feed?.likes}
            </div>

            <div className=" relative block">
                <div className="peer relative items-center hover:text-blue-700 cursor-pointer">
                    <RiShareForwardLine size={25} className="mr-2"/>{feed?.shares}
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



            {/*    modal replies*/}
            <div
                className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="commentModal" tabIndex="-1" aria-labelledby="commentModal"
                aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800"
                                id="commentModalLabel">
                                Comment
                            </h5>
                            <button type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                            <form>
                                <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                                    <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                                        <label htmlFor="comment" className="sr-only">Your comment</label>
                                        <textarea id="comment" rows="4" className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required=""></textarea>
                                    </div>
                                    <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                                        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                            Reply
                                        </button>
                                        <div className="flex pl-0 space-x-1 sm:pl-2">
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
export default SingleLeft
