import {MdMessage} from "react-icons/md";
import {BsFillPersonPlusFill} from "react-icons/bs";
import {FiEye} from "react-icons/fi";
import {useDispatch, useSelector} from "react-redux";
import {deleteMyNotification, getNotificationsAction} from "../../redux/Actions/notificationAction";
import {AiOutlineMessage} from "react-icons/ai";
import moment from "moment/moment";
import {useEffect} from "react";

const NotificationsMobile =()=>
{
    const dispatch =  useDispatch()
    const {notification} = useSelector(state => state.getNotificationsReducer)

    useEffect(() =>
    {
        dispatch(getNotificationsAction())

    }, [dispatch]);

    return(
        <div className="sm:hidden">
            <div className="block w-full py-3  rounded-md  dark:bg-gray-800">
                <div className="block py-2 px-4 font-medium text-center text-gray-700 rounded bg-gray-50 dark:bg-gray-800 dark:text-white">
                    Notifications
                </div>

                {notification?.map((item, index)=>
                    <div key={index} className="divide-y divide-gray-100 dark:divide-gray-700">
                        {item?.notification_type === "new_post" &&
                            <a href={`/hisprofile/${item?.from_profile?.id}`} onClick={()=>dispatch(deleteMyNotification(item?.id))} className="flex py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="flex-shrink-0">
                                    <img src={item?.from_profile?.avatar} className="w-11 h-11 rounded-full object-cover" alt=""/>
                                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5   dark:border-gray-800">
                                        <MdMessage className="text-blue-500"/>
                                    </div>
                                </div>
                                <div className="pl-3 w-full">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                        <span className="capitalize font-bold text-black mr-1">{item?.from_profile?.user?.username}</span>
                                        {item?.content}
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">{moment(item?.created_at?.toString()).startOf().fromNow()}</div>
                                </div>
                            </a>
                        }
                        {item?.notification_type === "new_comment" &&
                            <a href={`/hisprofile/${item?.from_profile?.id}`} onClick={()=>dispatch(deleteMyNotification(item?.id))} className="flex py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="flex-shrink-0">
                                    <img src={item?.from_profile?.avatar} className="w-11 h-11 rounded-full object-cover" alt=""/>
                                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5   dark:border-gray-800">
                                        <AiOutlineMessage className="text-green-500"/>
                                    </div>
                                </div>
                                <div className="pl-3 w-full">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                        <span className="capitalize font-bold text-black mr-1">{item?.from_profile?.user?.username}</span>
                                        {item?.content}
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">{moment(item?.created_at?.toString()).startOf().fromNow()}</div>
                                </div>
                            </a>
                        }
                        {item?.notification_type === "new_follower" &&
                            <a href={`/hisprofile/${item?.from_profile?.id}`} onClick={()=>dispatch(deleteMyNotification(item?.id))} className="flex py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="flex-shrink-0">
                                    <img src={item?.from_profile?.avatar} className="w-11 h-11 rounded-full object-cover" alt=""/>
                                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5   dark:border-gray-800">
                                        <BsFillPersonPlusFill className={"text-red-500"}/>
                                    </div>
                                </div>
                                <div className="pl-3 w-full">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                        <span className="capitalize font-bold text-black mr-1">{item?.from_profile?.user?.username}</span>
                                        {item?.content}
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">{moment(item?.created_at?.toString()).startOf().fromNow()}</div>
                                </div>
                            </a>
                        }
                    </div>
                )}
                {notification?.length>0?
                <a href="src/components/header#" className="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <div className="inline-flex items-center ">
                        You have <span className="m-1 text-red-800"> {notification?.length} </span> notifications
                    </div>
                </a>:
                <a href="src/components/header#" className="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <div className="inline-flex items-center ">
                        <FiEye className="mr-2 text-red-500" size={20}/>Notifications are Empty!
                    </div>
                </a>}

            </div>
        </div>
    )
}
export default NotificationsMobile
