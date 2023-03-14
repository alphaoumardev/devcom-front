import {followProfileAction} from "../../redux/Actions/activitiesAction";
import {useDispatch} from "react-redux";
import {Empty} from "antd";

const MyFollowing = ({following}) =>
{
    const dispatch = useDispatch()
    return(
        <div>
            {following?.length>0 ?
                <div>
                {following?.map((item, index) =>
                    <div key={index} className="max-w-3xl h-auto px-2 py-2 rounded dark:bg-gray-800">
                        <div className="flex flex-row  justify-between ">
                            <div className="flex">
                                <div className="flex items-center">
                                    <img src={item.avatar} alt="" className="rounded-full h-8 w-8 object-cover"/>
                                </div>
                                <div className="flex-col ml-2 mb-0 p-0">
                                    <div className="text-sm font-medium py-0 text-gray-900 dark:text-white capitalize">{item?.user?.username}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">@{item?.user?.username}</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 ">
                                <div>
                                    <button type="button" onClick={() => dispatch(followProfileAction(item?.id))}
                                            className="cursor-pointer bg-red-200 px-3 py-1 rounded-3xl text-base font-semibold text-gray-900 dark:text-white">
                                        Unfollow
                                    </button>
                                </div>
                                <div>
                                    <a href={`/hisprofile/${item?.id}`} type="button"
                                       className="cursor-pointer bg-blue-100 px-3 py-1 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">See
                                        More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>:
                <Empty/>
            }
        </div>
    )
}
export default MyFollowing
