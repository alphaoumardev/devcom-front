import {FiLink, FiSettings} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";
import {BsCodeSlash, BsEmojiHeartEyes, BsHeart, BsImage} from "react-icons/bs";
import {MdOutlineQuickreply} from "react-icons/md";
import {AiOutlineRetweet} from "react-icons/ai";
import {RiShareForwardLine} from "react-icons/ri";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { getOneFeedAction} from "../redux/Actions/feedActions";
import SingleLeft from "./SingleLeft";

const SingleBlog = ()=>
{
    const {id} =useParams()
    const dispatch = useDispatch()
    const {feed} = useSelector(state => state.getOneFeedReducer)

    useEffect(() =>
    {
        dispatch(getOneFeedAction(id))
    }, [dispatch, id]);
    return(
        <div>
        <div className="flex w-full justify-center gap-4 left-2 mt-3">
            <SingleLeft feed={feed}/>
            <div className="flex-col ">

            <div className="max-w-3xl mb-4 p-5 h-auto rounded border">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center"> </div>
                    </div>
                    <div className="">
                        {/*single post*/}
                        <div className="w-full flex">
                            <div className="">
                                <div className="flex-col mt-5 ">
                                    <div className="py-3 flex">
                                        <div className="flex">
                                            <img src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="host"
                                                 className="h-10 w-10 rounded-full object-cover"/>
                                            <span className="ml-5">Alpha Diallo <br/><b className="text-blue-700">6 days ago</b></span>
                                        </div>
                                    </div>
                                    <h1 className="mt-4 font-bold text-3xl text-gray-800 dark:text-white md:mt-0 md:text-3xl">{feed?.title}</h1>

                                    <p className="mt-2 ">
                                        {feed?.content}
                                        <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                            <img className="rounded h-72 w-full"  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                                        </a>
                                    </p>
                                    {/* the post replies start here*/}
                                    <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800 ">
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                                         src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="host"/>
                                                    <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Alpha Oumar <span className="font-thin">@Alphaoumar</span></a>
                                                </div>
                                                <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
                                            </div>

                                            <div className="mt-2">
                                                <p className="mt-2 text-gray-600 dark:text-gray-300">
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing
                                                    elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                                    facere in mo libero!
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center hover:text-blue-500 cursor-pointer"
                                                     data-bs-toggle="modal" data-bs-target="#commentModal">
                                                    <MdOutlineQuickreply  size={25} className="mr-2"/>12
                                                </div>
                                                <div className="flex items-center hover:text-red-700">
                                                    <BsHeart size={25} className="mr-2"/>67
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*d*/}
                            </div>
                        </div>
                        {/*end*/}
                    </div>
                </div>
            </div>
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
export default SingleBlog
