import {MdLibraryAdd} from "react-icons/md";
import {BsCodeSlash, BsImage} from "react-icons/bs";
import {GrLocation} from "react-icons/gr";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    getFeedAction,
    postFeedAction,
} from "../redux/Actions/feedActions";
import {useParams} from "react-router-dom";
import {getTopicsAction, postTopicAction} from "../redux/Actions/topicsActions";
import {Input} from "@material-tailwind/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import {FaExchangeAlt} from "react-icons/fa";
import parse from 'html-react-parser';
import {loadMyInfoAction} from "../redux/Actions/mineAction";
import Loader from "./modals/Loader";
import Feed from "./feeds/Feed";

const Feeds = ({query}) =>
{
    const dispatch = useDispatch()
    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [newTopic, setNewTopic] = useState('');
    const [cover_image, setCover_image] = useState('');

    const [changeEditor, setChangeEditor] = useState(true);
    const {topics} = useSelector(state => state.getTopicsReducer)

    let {name} = useParams()
    const {feeds} = useSelector(state => state.getFeedsReducer)
    const {my_profile,} = useSelector(state=> state.getMyInfoReducer)
    const [loadingFeeds, setLoadingFeeds] = useState(false);
    const [loadmore, setLoadmore] = useState(20);

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
    let modules={toolbar:toolbarOptions}


    const handleInfiniteScroll = ()=>
    {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >
            document.documentElement.scrollHeight)
        {
            setLoadingFeeds(true)
            setLoadmore((loadmore)=>loadmore + 20)
        }
    }
    useEffect(() =>
    {
        dispatch(getTopicsAction())
        dispatch(loadMyInfoAction())
        dispatch(getFeedAction(name, query))

        window.addEventListener('scroll', handleInfiniteScroll)
        return ()=> window.removeEventListener('scroll', handleInfiniteScroll )
    }, [dispatch, query]);

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
        e.target.reset()//to reset the state
    }
    const postTopic = (e)=>
    {
        e.preventDefault()
        dispatch(postTopicAction(newTopic))
    }
    // console.log(feeds.length)
    return(
        <div className="flex-col mt-5 hover:shadow">

            <div className="max-w-3xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800">
            <div>
                <div className="flex items-center justify-between">
                    {my_profile &&
                        <a href={"/me"} className="flex items-center">
                            <img className="relative rounded-full  h-10 w-10 object-cover" src={my_profile?.avatar} alt=""/>
                            <span className="font-bold text-gray-700 cursor-pointer ml-1 capitalize dark:text-gray-200">{my_profile?.user?.username}
                            <span className="font-thin">@{my_profile?.user?.username}</span></span>
                        </a>
                    }
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
                                                <option key={index} value={item?.id} className="capitalize">{item?.name}</option>
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
            <Feed feeds={feeds} my_profile={my_profile} loadmore={loadmore}/>
            <Loader loadingFeeds={loadingFeeds}/>

            {/*    modal add new topic*/}
            <div
                className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="addTopicModal" tabIndex="-1" aria-labelledby="addTopicModal"
                aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                    <div  className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white rounded-md outline-none text-current">
                        <div className="modal-body relative p-4">
                            <form onSubmit={postTopic}>
                                <div className="mb-4 w-full bg-gray-50  dark:bg-gray-700 dark:border-gray-600">
                                    <div className="flex justify-between items-center py-2 px-3">
                                        <Input variant="standard" label="Add New Topic" onChange={(e)=>setNewTopic(e.target.value)}/>
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
export default Feeds
