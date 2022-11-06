import MeTab from "./MeTab";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadMyInfoAction} from "../redux/Actions/authActions";
import {
    getSavedPostsAction,
    likedPostsAction,
    profileFollowingMeAction,
    profileIFollowAction
} from "../redux/Actions/mineAction";
import {PopoverContent, Popover,PopoverHandler} from "@material-tailwind/react";

const MyFeed =() =>
{
    const dispatch = useDispatch()
    const {my_profile, my_posts} = useSelector(state=> state.getMyInfoReducer)
    const {user} = useSelector(state => state.authReducer)
    const {following} = useSelector(state => state.getprofileFollowingMeReducer)
    const {liked_posts}= useSelector(state => state.getlikedPostsReducer)
    const {saved_posts} = useSelector(state => state.getsavedPostsReducer)
    const {followers} = useSelector(state => state.getprofileIFollowReducer)

    useEffect(() =>
    {
        if (my_profile)
        {
            dispatch(loadMyInfoAction())
            dispatch(profileFollowingMeAction())
            dispatch(likedPostsAction())
            dispatch(getSavedPostsAction())
            dispatch(profileIFollowAction())
        }
    }, [dispatch]);

    return(
        <div className="flex-col">
            <div className="max-w-3xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center"> </div>
                    </div>
                    <div className="">
                        {/*mine*/}
                        <div className="w-full flex-col">
                            <div className="rounded relative">
                                <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img className="rounded h-72 w-full object-cover"  src={my_profile?.cover_image} alt=""/>
                                </a>
                                <div className="w-full">
                                    <div className="flex justify-center -mt-16 md:justify-end">
                                        <img className="object-cover mr-3 w-32 h-32 border-2 border-black rounded-full dark:border-blue-400"
                                            alt=""
                                            src={my_profile?.avatar}/>
                                    </div>

                                    <h3 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl uppercase">{my_profile?.user?.username}</h3>
                                    <span>@{my_profile?.user?.username}</span>

                                    <p className="mt-2 text-gray-600 dark:text-gray-200">{my_profile?.bio}</p>
                                    <div className="flex justify-end m-3 text-xl font-medium hover:bg-blue-300 rounded-full px-2 py-1 outline text-blue-500 dark:text-blue-300">
                                        <Popover>
                                            <PopoverHandler>
                                                <button type="button">Show Popover</button>
                                            </PopoverHandler>
                                            <PopoverContent>
                                                This is a very beautiful popover, show some love.
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>
                                {/*d*/}
                            </div>
                            <MeTab my_profile={my_profile} my_posts={my_posts} following={following}
                                   liked_posts={liked_posts} saved_posts={saved_posts}
                                   followers={followers}
                            />
                        </div>
                        {/*end*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyFeed
