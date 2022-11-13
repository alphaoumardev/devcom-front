import {BsPerson} from "react-icons/bs";
import {followProfileAction} from "../../redux/Actions/activitiesAction";
import {useDispatch} from "react-redux";

const PopoverInfo = ({item, my_profile})=>
{
    const dispatch = useDispatch()
    // console.log(item)
    return(
        <div className=" w-56 h-40 pb-3 transition-opacity duration-300 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
            <div className="flex justify-between items-center mb-2">
                <a href={`/hisprofile/${item?.profile?.id}`}>
                    {item?.profile?.avatar?
                        <div>
                            <img  src={item?.profile?.avatar} alt="" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                        </div>:
                        <div>
                            <BsPerson  className="hidden object-cover w-10 h-10 rounded-full text-gray-400 sm:block "/>
                        </div>}
                </a>
                <div>
                    <a type="button" href={`/hisprofile/${item?.profile?.id}`}  className="focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Posts:
                        <span className="ml-1">
                            {item?.profile?.my_posts_count>99&&item?.profile?.my_posts_count<1000 ? 99+'+':item?.profile?.my_posts_count && item?.profile?.my_posts_count>999 ? item?.profile?.my_posts_count/1000+'k': item?.profile?.my_posts_count}
                        </span> </a>
                </div>
                <div>
                    {!my_profile?.following?.includes(item?.profile?.id)?

                    <>{item?.profile?.id !== my_profile?.id &&
                    <button type="button"
                            onClick={()=>dispatch(followProfileAction(item?.profile?.id))}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow
                    </button>}</>:
                    <>{item?.profile?.id !== my_profile?.id &&
                    <button type="button"
                            onClick={()=>dispatch(followProfileAction(item?.profile?.id))}
                            className="text-white bg-red-700 hover:bg-red-400 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-red-500 dark:hover:bg-red-500 focus:outline-none dark:focus:ring-blue-800">Unfollow
                    </button>}</>}
                </div>
            </div>
            <p className="text-base font-semibold capitalize leading-none text-gray-900 dark:text-white">
                <a href="">{item?.profile?.user?.username}</a>
            </p>
            <p className="mb-3 text-sm font-normal">
                <a href={`/hisprofile/${item?.profile?.id}`} className="hover:underline">@{item?.profile?.user?.username}</a>
            </p>
            <p className="mb-4 text-sm font-light">{item?.profile?.bio?.slice(0,40)} ...
                <a href="/" className="text-blue-600 dark:text-blue-500 hover:underline">devco.com</a>.
            </p>
            <ul className="flex text-sm font-light ">
                <li className="mr-2">
                    <a href={`/hisprofile/${item?.profile?.id}`} className="hover:underline">
                        <span className="font-semibold text-gray-900 dark:text-white">
                                {item?.profile?.followedby_count>99&&
                                item?.profile?.followedby_count<1000 ? 99+'+':
                                item?.profile?.followedby_count &&
                                item?.profile?.followedby_count>999 ?
                                item?.profile?.followedby_count/1000+'k':
                                item?.profile?.followedby_count}
                        </span>
                        <span> Following</span>
                    </a>
                </li>
                <li>
                    <a href={`/hisprofile/${item?.profile?.id}`} className="hover:underline">
                        <span className="font-semibold text-gray-900 dark:text-white">
                            {item?.profile?.follow_count>99&&
                            item?.profile?.follow_count<1000 ? 99+'+':
                            item?.profile?.follow_count &&
                            item?.profile?.follow_count>999 ?
                            item?.profile?.follow_count/1000+'k':
                            item?.profile?.follow_count}
                        </span>
                        <span> Followers</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default PopoverInfo
