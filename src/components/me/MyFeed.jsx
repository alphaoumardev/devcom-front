import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import EditMyProfile from "../modals/EditMyProfile";
import {loadMyInfoAction} from "../../redux/Actions/mineAction";
import MyTabs from "./MyTabs";

const MyFeed =() =>
{
    const dispatch = useDispatch()
    const {my_profile, my_posts, followedby, liked_posts, saved_posts, following} = useSelector(state=> state.getMyInfoReducer)
    useEffect(() =>
    {
        if (my_profile)
        {
            dispatch(loadMyInfoAction())
        }
    }, [dispatch,]);
    // console.log(my_profile)

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
                                    <div className="flex justify-center justify-content-evenly items-center">
                                        <div className="flex justify-center justify-content-evenly items-center bg-blue-50 w-6/12 m-3 text-xl font-medium hover:bg-blue-300 rounded-full px-2 py-1 outline text-blue-500 dark:text-blue-300">
                                            <div data-bs-toggle="modal" data-bs-target="#editMyProfileModal">
                                                <button type="button">Edit My Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*d*/}
                            </div>
                            <div className="flex items-center justify-center">
                                <MyTabs my_profile={my_profile} my_posts={my_posts} followedby={followedby}
                                        liked_posts={liked_posts} saved_posts={saved_posts}
                                        following={following}/>
                            </div>

                        </div>
                        {/*end*/}
                        {/*edit my profile modal*/}
                        <EditMyProfile my_profile={my_profile} />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyFeed
