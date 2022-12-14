import {FiLink} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";
import {BsCodeSlash, BsEmojiHeartEyes, BsImage} from "react-icons/bs";
import {MdOutlineQuickreply} from "react-icons/md";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect,} from "react";
import {getOneFeedAction,} from "../redux/Actions/feedActions";
import SingleLeft from "./SingleLeft";
import moment from "moment";
import {loadMyInfoAction} from "../redux/Actions/authActions";
import {RiHeart2Line} from "react-icons/ri";

const SingleBlog = ()=>
{
    const {id} =useParams()
    const dispatch = useDispatch()
    const {data, comments} = useSelector(state => state.getOneFeedReducer)
    const {my_profile} = useSelector(state => state.getMyInfoReducer)
    useEffect(() =>
    {
        dispatch(loadMyInfoAction())
        dispatch(getOneFeedAction(id))
    }, [dispatch, id]);
    // console.log(comments)
    return(
        <div>
        <div className="flex w-full justify-center gap-4 left-2 mt-3">
            <div className="">
                <SingleLeft  data={data} id={id} my_profile={my_profile} />
            </div>
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
                                            <img src={data?.profile?.avatar} alt={data?.profile?.user?.username?.charAt(0)}
                                                 className="h-10 w-10 rounded-full object-cover capitalize"/>
                                            <span className="ml-5 capitalize">{data?.profile?.user?.username}
                                                <b className="text-blue-700 ml-1">@{data?.profile?.user?.username}</b><br/>
                                                <b className="text-blue-400">{moment(data?.posted?.toString()).startOf().fromNow()}</b>
                                            </span>
                                        </div>
                                    </div>
                                    <h1 className="mt-4 font-bold text-3xl text-gray-800 dark:text-white md:mt-0 md:text-3xl">{data?.title}</h1>

                                    <p className="mt-2 ">
                                        {data?.content}
                                        <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                            {data?.cover_image &&<img className="rounded h-72 w-full object-cover"  src={data?.cover_image} alt=""/>}
                                        </a>
                                    </p>
                                    {/* the post replies start here*/}
                                    {comments?.map((item, index)=>
                                        <div key={index} className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800 ">
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                                             src={item?.commentator?.avatar} alt=""/>
                                                        <a className="font-bold text-gray-700 cursor-pointer capitalize dark:text-gray-200">{item?.commentator?.user?.username}
                                                            <span className="font-thin ml-1">@{item?.commentator?.user?.username}
                                                                <span className="ml-3 dark:text-gray-400">{moment(item?.commentated?.toString()).startOf().fromNow()}</span></span></a>
                                                    </div>

                                                </div>

                                                <div className="flex items-center space-x-3">
                                                    <div className="flex-col items-center  mt-4">
                                                        <div className="flex items-center mb-3 hover:text-blue-500 cursor-pointer"
                                                             data-bs-toggle="modal" data-bs-target="#commentModal">
                                                            <MdOutlineQuickreply  size={15} className="mr-2"/>{item?.replies}
                                                        </div>
                                                        <div className="flex items-center hover:text-red-700">
                                                            <RiHeart2Line size={15} className="mr-2"/>{item?.like}
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{item?.comment}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )}
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
