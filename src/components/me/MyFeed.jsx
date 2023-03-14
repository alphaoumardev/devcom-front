import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import EditMyProfile from "../modals/EditMyProfile";
import {loadMyProfileAction} from "../../redux/Actions/mineAction";
import MyTabs from "./MyTabs";
import MyTabsMobile from "./MyTabsMobile";

const MyFeed =() =>
{
    const dispatch = useDispatch()
    const {my_info} = useSelector(state=> state.getMyInfoReducer)
    const {my_posts, followedby, liked_posts, saved_posts, following} = useSelector(state=> state.getMyProfileReducer)
    useEffect(() =>
    {
        if (my_info)
        {
            dispatch(loadMyProfileAction())
        }
    }, [dispatch,]);
    // console.log(my_info)

    return(
        <div className="flex-col">
            <div className="max-w-3xl mb-4 h-auto p-1 sm:px-8 sm:py-4 bg-white rounded-lg  dark:bg-gray-800">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center"> </div>
                    </div>
                    <div className="">
                        {/*mine*/}
                        <div className="w-full flex-col">
                            <div className="rounded relative">
                                <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img className="rounded h-56 w-full object-cover"  src={my_info?.cover_image} alt=""/>
                                </a>
                                <div className="w-full">
                                    <div className="flex justify-center -mt-12 md:justify-end">
                                        <img className="object-cover mr-3 w-20 h-20 sm:w-32 sm:h-32 border-2 border-black rounded-full dark:border-blue-400"
                                            alt=""
                                            src={my_info?.avatar}/>
                                    </div>

                                    <h3 className="flex justify-center items-center mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl uppercase">{my_info?.user?.username}</h3>
                                    <span className="flex justify-center items-center text-blue-600 ">@{my_info?.user?.username}</span>
                                    <p className="mt-2 text-gray-600 dark:text-gray-200 indent-6">{my_info?.bio}</p>
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
                            <div className="hidden sm:flex items-center justify-center">
                                <MyTabs my_posts={my_posts} followedby={followedby}
                                        liked_posts={liked_posts} saved_posts={saved_posts}
                                        following={following}/>
                            </div>
                            <div className="sm:hidden flex items-center justify-center">
                                <MyTabsMobile my_posts={my_posts} followedby={followedby}
                                              liked_posts={liked_posts} saved_posts={saved_posts}
                                              following={following}/>
                            </div>

                        </div>
                        {/*end*/}
                        {/*edit my profile modal*/}
                        <EditMyProfile my_info={my_info} />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyFeed
