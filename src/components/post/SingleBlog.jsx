import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect,} from "react";
import {getOneFeedAction,} from "../../redux/Actions/feedActions";
import SingleLeft from "./SingleLeft";
import moment from "moment";
import RecentPosts from "./RecentPosts";
import {loadMyInfoAction} from "../../redux/Actions/mineAction";
import Replies from "./Replies";

const SingleBlog = ()=>
{
    const {id} =useParams()
    const dispatch = useDispatch()
    const {data ,recent_posts} = useSelector(state => state.getOneFeedReducer)
    const {my_profile} = useSelector(state => state.getMyInfoReducer)
    const commentator = my_profile ? my_profile?.id : null;

    useEffect(() =>
    {
        dispatch(loadMyInfoAction())
        dispatch(getOneFeedAction(id))
    }, [dispatch, id]);
    // console.log(data)
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
