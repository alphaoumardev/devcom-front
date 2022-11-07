import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {loadMyInfoAction} from "../../redux/Actions/authActions";
import {FaExchangeAlt} from "react-icons/fa";
import {GrLocation} from "react-icons/gr";
import {BsCodeSlash, BsImage} from "react-icons/bs";
import {MdLibraryAdd} from "react-icons/md";
import {Input} from "@material-tailwind/react";
import {getTopicsAction} from "../../redux/Actions/topicsActions";
import {editMyPostAction} from "../../redux/Actions/mineAction";

const EditPostModal = ({item}) =>
{
    const dispatch = useDispatch()
    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [newTopic, setNewTopic] = useState('');
    const [cover_image, setCover_image] = useState(null);

    const {my_profile, my_posts} = useSelector(state=> state.getMyInfoReducer)
    const {topics} = useSelector(state => state.getTopicsReducer)

    const [changeEditor, setChangeEditor] = useState(true);
    const [openEdit, setOpenEdit] = useState(false);

    const handleOpen = () => setOpenEdit(!openEdit);
    const editPost = async (e) =>
    {
        let editedPost = new FormData()
        editedPost.append('title', title ? title : item?.title)
        editedPost.append('topic', topic ? topic : item?.topic?.id)
        editedPost.append('content', content ? content : item?.content)
        editedPost.append('profile', my_profile?.id)
        if(cover_image !== null)
        {
            editedPost.append('cover_image', cover_image)
        }
        e.preventDefault()
        dispatch(editMyPostAction(item?.id, editedPost))
        window.location.reload()
    }
    useEffect(() =>
    {
        if (my_profile)
        {
            dispatch(getTopicsAction())
            dispatch(loadMyInfoAction())
        }
    }, [dispatch]);

    return(
        <div>
            {/*new article edit*/}
            <form onSubmit={editPost}>
                <div className="mb-4 relative max-w-3xl bg-gray-50 rounded-lg hover:shadow-lg dark:bg-gray-700 dark:border-gray-600">
                    <div className="py-2 px-4 rounded-full dark:bg-gray-800">
                        <Input variant="standard" label="Title" onChange={(e)=>setTitle(e.target.value ? e.target.value: item?.title)} defaultValue={item?.title}/>
                        <label htmlFor="editor" className="sr-only">Publish</label>
                        <textarea id="editor" rows="4"
                                  onChange={(e)=>setContent(e.target.value ? e.target.value : item?.content)}
                                 className="block px-0 w-full text-normal text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                  placeholder="Write an article..." required={true} defaultValue={item?.content}/>
                            {/*<ReactQuill*/}
                            {/*//     theme="snow"*/}
                            {/*//     className="border-none"*/}
                            {/*//     placeholder="Edit your Con here "*/}
                            {/*//     modules={modules}*/}
                            {/*//     value={parse(content)}*/}
                            {/*//     onChange={setContent}*/}
                            {/*// />}*/}
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
                                       defaultValue={item?.image_cover}
                                       onChange={(e)=>setCover_image(e.target.files[0] ? e.target.files[0] : item?.image_cover)} className="" style={{display:"none"}}/>

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
                                <select id="underline_select" onChange={(e)=>setTopic(e.target.value? e.target.value : item?.topic?.name)} title="Choose a topic or add one" required={true}
                                        className="block px-2 pr-8 w-full text-sm text-gray-500 border-b-1 border-0 appearance-none bg-transparent dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option defaultValue={item?.topic?.name}>{item?.topic?.name}</option>
                                    {topics?.map((values, index)=>
                                        <option key={index} value={values?.id}>{values?.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <button type="submit"
                                className="inline-flex float-right mt-1 items-center px-6 py-2 text-sm rounded-full font-bold text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Post</button>

                    </div>
                </div>
            </form>
            {/*end*/}
        </div>
    )
}
export default EditPostModal
