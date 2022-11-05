import {MdBookmarkAdded, MdLibraryAdd, MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {RiHeart2Fill, RiHeart2Line, RiShareForwardLine} from "react-icons/ri";
import {BsCodeSlash, BsEmojiHeartEyes, BsImage} from "react-icons/bs";
import {FiLink} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    getFeedAction,
    postFeedAction,
    postLikeAction, postSavesAction
} from "../redux/Actions/feedActions";
import {useNavigate, useParams} from "react-router-dom";
import {loadMyInfoAction} from "../redux/Actions/authActions";
import moment from "moment/moment";
import {getTopicsAction, postTopicAction} from "../redux/Actions/topicsActions";
import {Input} from "@material-tailwind/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import {FaExchangeAlt} from "react-icons/fa";
import parse from 'html-react-parser';
import {
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import PopoverInfo from "./PopoverInfo";
import {IoMdPerson} from "react-icons/io";
import {BiLoader} from "react-icons/bi";

const Feed = ({query}) =>
{
    let {name} = useParams()
    let date = new Date();

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {feeds} = useSelector(state => state.getFeedsReducer)
    const {topics} = useSelector(state => state.getTopicsReducer)
    const {my_profile, my_posts} = useSelector(state=> state.getMyInfoReducer)
    const [loadingFeeds, setLoadingFeeds] = useState(false);

    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [newTopic, setNewTopic] = useState('');
    const [cover_image, setCover_image] = useState('');

    const [loadmore, setLoadmore] = useState(4);
    const [changeEditor, setChangeEditor] = useState(true);

    let toolbarOptions = [
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'image'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered'},{ 'list': 'bullet' }],//{ 'list': 'bullet' }
        [{ 'indent': '+1' }],          // outdent/indent
        [{ 'color': [] }, { 'background': [] },{ 'align': [] }],          // dropdown with defaults from theme
        // [{ 'font': [] }],
        // [{ 'header': 1 }, { 'header': 2 }],
        // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscriptcustom button values
        // [{ 'direction': 'rtl' }],
        // ['clean']                                         // remove formatting button
    ];
    const handleInfiniteScroll = ()=>
    {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >
            document.documentElement.scrollHeight)
        {
            setLoadingFeeds(true)
            setLoadmore((loadmore)=>loadmore + 5)
        }
    }
    let modules={toolbar:toolbarOptions}
    useEffect(() =>
    {
        if (my_profile)
        {
            dispatch(getTopicsAction())
            dispatch(loadMyInfoAction())
        }
        dispatch(getFeedAction(name, query))
        window.addEventListener('scroll', handleInfiniteScroll)
        return ()=>window.removeEventListener('scroll', handleInfiniteScroll )
    }, [dispatch, query, loadmore]);


    const postFeed = async (e) =>
    {
        let newPost = new FormData()
        newPost.append('title', title)
        newPost.append('topic', topic)
        newPost.append('content', content)
        newPost.append('profile', my_profile?.id)
        newPost.append('cover_image', cover_image)
        e.preventDefault()
        dispatch(postFeedAction(newPost))
        window.location.reload()
    }
    const postTopic = (e)=>
    {
        e.preventDefault()
        dispatch(postTopicAction(newTopic))
        window.location.reload()
    }

    return(
        <div className="flex-col mt-5 hover:shadow">

            <div className="max-w-3xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800">
            <div>
                <div className="flex items-center justify-between">

                    {my_profile &&
                        <div className="flex items-center">
                            {my_profile?.avatar ?
                                <img className="relative rounded-full  h-10 w-10 object-contain" src={my_profile?.avatar} alt=""/>:
                                <IoMdPerson  className="relative rounded-full  h-10 w-10 object-contain text-gray-400 mr-2"/>}
                            <a href={"/me"} className="font-bold text-gray-700 cursor-pointer capitalize dark:text-gray-200">{my_profile?.user?.username} <span className="font-thin">@{my_profile?.user?.username}</span></a>
                    </div>}
                </div>
                <div className="mt-2">
                    {/*new article edit*/}
                    <form onSubmit={postFeed}>
                        <div className="mb-4 relative w-full bg-gray-50 rounded-lg hover:shadow-lg dark:bg-gray-700 dark:border-gray-600">
                            <div className="py-2 px-4 rounded-full dark:bg-gray-800">
                                <Input variant="standard" label="Title" onChange={(e)=>setTitle(e.target.value)}/>
                                <label htmlFor="editor" className="sr-only">Publish</label>
                                {changeEditor ?<textarea id="editor" rows="4" disabled={topic===''}
                                          onChange={(e)=>setContent(e.target.value)}
                                          className="block px-0 w-full text-normal text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                          placeholder="Write an article..." required/>:
                                <ReactQuill
                                    theme="snow"
                                    className="border-none"
                                    placeholder="Edit your Con here "
                                    modules={modules}
                                    value={parse(content)}
                                    onChange={setContent}
                                />}

                            </div>

                            <div className="flex justify-between  items-center py-2 px-3 border-b dark:border-gray-600">

                                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                    <div className="flex items-center space-x-1 sm:pr-4">
                                        <button type="button" onClick={()=>setChangeEditor(!changeEditor)} className="p-2 text-gray-500 font-bold rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <FaExchangeAlt title="Change the Editor"/>
                                        </button>
                                        <button type="button"  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <GrLocation/>
                                        </button>
                                        <label htmlFor="im">
                                            <BsImage/>
                                        </label>
                                            <input type="file" id="im"
                                                   name='conver_image'
                                                   accept='image/*'
                                                   onChange={(e)=>setCover_image(e.target.files[0])} className="" style={{display:"none"}}/>

                                        <label htmlFor="codeblock">
                                            <BsCodeSlash/>
                                        </label>
                                        <code  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"/>


                                    </div>
                                    <div className="flex items-center space-x-3 sm:pl-4">
                                        <button type="button"
                                                title="Add A New Topic"
                                                data-bs-toggle="modal" data-bs-target="#addTopicModal"
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
                                <button type="submit"  disabled={topic===''||title===''||content===''}
                                        className="inline-flex float-right mt-1 items-center px-6 py-2 text-sm rounded-full font-bold text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Post</button>

                            </div>
                        </div>
                    </form>
                    {/*end*/}
                </div>
            </div>
        </div>

            {feeds?.slice(0,loadmore)?.map((item, index)=>
                <div key={index} className="max-w-3xl mb-4 h-auto px-8 py-4 bg-white rounded dark:bg-gray-800 hover:shadow-lg">

                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Popover>
                                <PopoverHandler>
                                    {item?.profile?.avatar?
                                    <img  src={item?.profile?.avatar} alt="" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />:
                                        <div>
                                            <IoMdPerson  className="hidden object-cover w-10 h-10 mx-4 rounded-full text-gray-400 sm:block "/>
                                        </div>}
                                </PopoverHandler>
                                <PopoverContent>
                                    <PopoverInfo item={item}/>{/* this is the component */}
                                </PopoverContent>
                            </Popover>
                            <a href={`/me`} className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize">{item?.profile?.user?.username}<span className="font-thin capitalize ml-1">@{item?.profile?.user?.username}
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

                        <div className="flex items-center hover:text-blue-500"
                             data-bs-toggle="modal" data-bs-target="#commentModal">
                            <MdOutlineQuickreply
                            size={25} className="mr-2"/>{item?.num_replies>0 && <span>{item?.num_replies}</span>}
                        </div>
                        <div className="flex items-center hover:text-red-700">
                            { my_profile && item?.saves?.includes(item?.profile?.id) &&
                                <MdBookmarkAdded  size={25} color={"green"} type="submit"
                                               onClick={()=>{
                                                   if(dispatch(postSavesAction(item?.id)))
                                                   {
                                                       dispatch(getFeedAction(name))
                                                   }
                                               }}

                                />}
                            {!item?.saves?.includes(item?.profile?.id)&&
                                <MdOutlineBookmarkBorder size={25}  type="submit"
                                              onClick={()=>{
                                                  if(dispatch(postSavesAction(item?.id)))
                                                  {
                                                      dispatch(getFeedAction(name))
                                                  }
                                              }}
                                />}
                            {item?.num_saves>0 &&<span className='ml-2'>{item?.num_saves}</span>}

                        </div>
                        <div className="flex items-center hover:text-red-700">
                            { my_profile && item?.likes?.includes(item?.profile?.id) &&
                                <RiHeart2Fill  size={25} color={"red"} type="submit"
                                         onClick={()=>{
                                             if(dispatch(postLikeAction(item?.id)))
                                             {
                                                 dispatch(getFeedAction(name))
                                             }
                                         }}
                                />}

                            {!item?.likes?.includes(item?.profile?.id)&&
                                <RiHeart2Line size={25}  type="submit"
                                         onClick={()=>{
                                             if(dispatch(postLikeAction(item?.id)))
                                             {
                                                 dispatch(getFeedAction(name))
                                             }
                                         }}
                                />}
                            {item?.num_likes>0 &&<span className='ml-2'>{item?.num_likes}</span>}

                        </div>

                        <div className="flex items-center hover:text-blue-700">
                            <RiShareForwardLine size={25} className="mr-2"/>{item?.shares}
                        </div>
                        <a href={`/single/${item?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
                    </div>
                </div>
            </div>

            )}
            {loadingFeeds &&
                <div role="status" className="flex item-center justify-center">
                     <BiLoader className="flex items-center justify-center w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"/>
                </div>
            }

            <div className="flex justify-center max-w-3xl mb-4 h-auto px-8 py-4 bg-white rounded dark:bg-gray-800">
                {/*<button onClick={()=>setLoadmore(loadmore+10)}*/}
                {/*    className="px-6 py-3 font-bold text-white capitalize transition-colors*/}
                {/*    duration-300 transform bg-blue-300 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">*/}
                {/*    Load More Feeds*/}
                {/*</button>*/}
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

            {/*    modal add new topic*/}
            <div
                className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="addTopicModal" tabIndex="-1" aria-labelledby="addTopicModal"
                aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
                            <button type="button"
                                    className="btn-close box-content w-2 h-2 p-1 text-black  opacity-50 focus:shadow-none  hover:text-black hover:opacity-75 "
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                            <form onSubmit={postTopic}>
                                <div className="mb-4 w-full bg-gray-50  dark:bg-gray-700 dark:border-gray-600">
                                    <div className="flex justify-between items-center py-2 px-3">
                                        <Input variant="standard" label="New Topic" onChange={(e)=>setNewTopic(e.target.value)}/>
                                        <button type="submit" data-bs-dismiss="modal" aria-label="Close"
                                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                            Add
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
