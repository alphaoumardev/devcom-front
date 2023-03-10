import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import EditMyProfile from "../components/modals/EditMyProfile";
import EditPostModal from "../components/modals/EditPostModal";
import Sidebar from "../components/Sidebar";
import Activities from "../components/activities/Activities";
import MyPosts from "../components/mytabs/MyPosts";

const MeSettings =() =>
{
    const {my_info} = useSelector(state=> state.getMyInfoReducer)
    const [itemToEdit, setItemToEdit] = useState({});


    return(
        <div className="flex justify-center">
            <div>
                <Sidebar/>
            </div>
            <div className="flex-col">
                <div className="w-full p-1 sm:max-w-3xl sm:mb-4 h-auto sm:px-8 sm:py-4 bg-white rounded-lg  dark:bg-gray-800">
                    {/*mine*/}
                    <div className="w-full flex-col">
                        <div className="rounded relative">
                            <a href="/me" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img className="rounded h-72 w-full object-cover"  src={my_info?.cover_image} alt=""/>
                            </a>
                            <div className="w-full">
                                <div className="flex justify-center -mt-16 md:justify-end">
                                    <img className="object-cover mr-3 w-20 h-20 sm:w-32 sm:h-32 border-2 border-black rounded-full dark:border-blue-400"
                                         alt=""
                                         src={my_info?.avatar}/>
                                </div>

                                <div className="w-full ">
                                    <h3 className="flex justify-center items-center mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl uppercase">{my_info?.user?.username}</h3>
                                    <span className={"flex justify-center items-center"}>@{my_info?.user?.username}</span>
                                </div>

                                <p className="indent-6 font-medium mt-2 text-gray-600 dark:text-gray-200">{my_info?.bio}</p>
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
                    <div>
                    {/*end*/}
                    <MyPosts/>
                    </div>
                </div>
                    {/*edit my profile modal*/}
                    <EditMyProfile my_info={my_info} />
                    {/*edit the post modal*/}
                    <EditPostModal item={itemToEdit}/>
                </div>
            </div>
            <div>
                <Activities/>
            </div>
        </div>
    )
}
export default MeSettings
