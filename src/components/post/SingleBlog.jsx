import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect,} from "react";
import {getOneFeedAction,} from "../../redux/Actions/feedActions";
import CommentLeft from "./CommentLeft";
import moment from "moment";
import Replies from "./Replies";
import RecentPosts from "./RecentPosts";
import {IoMdPerson} from "react-icons/io";

const SingleBlog = ()=>
{
    const {id} =useParams()
    const dispatch = useDispatch()
    const {data ,recent_posts} = useSelector(state => state.getOneFeedReducer)
    const {my_info} = useSelector(state => state.getMyInfoReducer)
    const commentator = my_info ? my_info?.id : null;

    useEffect(() =>
    {
        dispatch(getOneFeedAction(id))
    }, [dispatch, id]);
    // console.log(data)
    return(
        <div className={""}>
        <div className="flex w-full justify-center gap-4 left-2 mt-3 mb-12">
            <div className="hidden sm:block">
                <CommentLeft data={data} id={id} />
            </div>
            <div className="flex-col ">
            <div className="w-full sm:max-w-3xl mb-4 p-2 sm:p-5 h-auto rounded sm:border">
                <div>
                    <div className="">
                        {/*single post*/}
                        <div className="w-full flex">
                            <div className="">
                                <div className="flex-col mt-5 w-full">
                                    <div className="py-3 flex">
                                        {data?.profile?.avatar ?
                                            <img className="rounded-full  h-10 w-10 object-cover"
                                                 src={data?.profile?.avatar} alt=""/> :
                                            <IoMdPerson className="rounded-full h-10 w-10 object-contain text-gray-400"/>}

                                        <div className={"sm:hidden flex-col ml-2 mr-2 mb-1"}>
                                            <div className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 ml-1 capitalize">{data?.profile?.user?.username}</div>
                                            <div className="font-thin capitalize ml-1 text-blue-500 ">@{data?.profile?.user?.username}</div>
                                        </div>
                                        <span className="sm:hidden ml-3">{moment(data?.posted?.toString()).startOf().fromNow()}</span>

                                        <div className="hidden sm:flex font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize ml-2">{data?.profile?.user?.username}
                                            <span className="font-thin capitalize ml-1 text-blue-500">@{data?.profile?.user?.username}
                                                <span className="ml-4 text-black">{moment(data?.posted?.toString()).startOf().fromNow()}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <h1 className="mt-4 font-bold text-3xl text-gray-800 dark:text-white md:mt-0 md:text-3xl">{data?.title}</h1>

                                    <p className="m-2 ">{data?.content}</p>
                                    {data?.cover_image &&<img className="rounded h-72 w-full object-cover mt-2"  src={data?.cover_image} alt=""/>}

                                    {/* the post replies start here*/}
                                    <Replies data={data?.replies} id={id} commentator={commentator}/>
                                </div>
                                {/*end*/}
                            </div>
                        </div>

                        {/*end*/}
                        <RecentPosts recent_posts={recent_posts} data={data}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>

    )
}
export default SingleBlog
