import {MdLibraryAdd, MdOutlineQuickreply} from "react-icons/md";
import {RiShareForwardLine} from "react-icons/ri";
import {BsBookmark, BsCodeSlash, BsEmojiHeartEyes, BsHeart, BsImage} from "react-icons/bs";
import {FiLink} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getFeedAction, postFeedAction} from "../redux/Actions/feedActions";
import {useParams} from "react-router-dom";
import {load_user} from "../redux/Actions/authActions";
import moment from "moment/moment";
import {getTopicsAction} from "../redux/Actions/topicsActions";
import {Input} from "@material-tailwind/react";

const Feed = () =>
{
    let {name} = useParams()
    const dispatch = useDispatch()
    const {feeds} = useSelector(state => state.getFeedsReducer)
    const {user} = useSelector(state => state.authReducer)
    const {topics} = useSelector(state => state.getTopicsReducer)

    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');


    useEffect(() =>
    {
        if (user)
        {
            dispatch(load_user())
            dispatch(getTopicsAction())
        }
        dispatch(getFeedAction(name))
    }, [dispatch]);
    const postFeed = (e)=>
    {
        e.preventDefault()
        dispatch(postFeedAction(title, topic, content, user.id))
    }
    return(
        <div className="flex-col mt-5 hover:shadow">

            <div className="max-w-3xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800">
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                             src="https://res.cloudinary.com/diallo/image/upload/v1653794949/diallo_rjazjs.png" alt="host"/>
                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Alpha Oumar <span className="font-thin">@Alphaoumar</span></a>
                    </div>
                </div>
                <div className="mt-2">
                    {/*new article edit*/}
                    <form onSubmit={postFeed}>
                        <div className="mb-4 relative w-full bg-gray-50 rounded-lg hover:shadow-lg dark:bg-gray-700 dark:border-gray-600">
                            <div className="py-2 px-4 rounded-full dark:bg-gray-800">
                                <Input variant="standard" label="Title" onChange={(e)=>setTitle(e.target.value)}/>
                                <label htmlFor="editor" className="sr-only">Publish</label>
                                <textarea id="editor" rows="4" disabled={topic===''}
                                          onChange={(e)=>setContent(e.target.value)}
                                          className="block px-0 w-full text-normal text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                          placeholder="Write an article..." required/>
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                    <div className="flex items-center space-x-1 sm:pr-4">
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

                                    </div>
                                    <div className="flex items-center space-x-3 sm:pl-4">
                                        <button type="button"
                                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <MdLibraryAdd/>
                                        </button>
                                        <select id="underline_select" onChange={(e)=>setTopic(e.target.value)} title="Choose a topic or add one" required={true}
                                                className="block px-2 pr-8 w-full text-sm text-gray-500 border-b-1 border-0 appearance-none bg-transparent dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option> First Choose a Topic</option>
                                            {topics?.map((item, index)=>
                                                <option key={index} value={item?.id}>{item?.name}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" onClick={()=>window.location.reload()} disabled={topic===''||title===''||content===''}
                                        className="inline-flex float-right mt-1 items-center px-6 py-2 text-sm rounded-full font-bold text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Post</button>
                            </div>
                        </div>
                    </form>
                    {/*end*/}
                </div>
            </div>
        </div>

            {feeds?.map((item, index)=>
                <div key={index} className="max-w-3xl mb-4 h-auto px-8 py-4 bg-white rounded dark:bg-gray-800 hover:shadow-lg">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                 src="https://res.cloudinary.com/diallo/image/upload/v1653794949/diallo_rjazjs.png" alt="host"/>
                            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize">{item?.user?.username}<span className="font-thin capitalize ml-1">@{item?.user?.username}
                            <span className="ml-3">{moment(item?.posted?.toString()).startOf().fromNow()}</span>
                            </span>
                            </a>
                        </div>
                        <span className="text-sm font-light text-gray-600 dark:text-gray-400"></span>
                        <a href={`/${item?.topic?.name}`} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{item?.topic?.name}</a>
                    </div>

                    <div className="mt-2">
                        <a href={`/single/${item?.id}`}
                           className="text-2xl font-bold text-gray-700 capitalize dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:underline">{item?.title}</a>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{item?.content?.slice(0, 250)}<a href={`/single/${item?.id}`} className="text-blue-700">...</a></p>
                    </div>

                    <div className="flex items-center justify-between mt-4">

                        <div className="flex items-center hover:text-blue-500"
                             data-bs-toggle="modal" data-bs-target="#commentModal">
                            <MdOutlineQuickreply
                            size={25} className="mr-2"/>{item?.replies}
                        </div>
                        <div className="flex items-center hover:text-green-500">
                            <BsBookmark size={25} className="mr-2"/>{item?.saves}
                        </div>
                        <div className="flex items-center hover:text-red-700">
                            <BsHeart size={25} className="mr-2"/>{item?.likes}
                        </div>
                        <div className="flex items-center hover:text-blue-700">
                            <RiShareForwardLine size={25} className="mr-2"/>{item?.shares}
                        </div>
                        <a href={`/single/${item?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
                    </div>
                </div>
            </div>
            )}

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
export default Feed
