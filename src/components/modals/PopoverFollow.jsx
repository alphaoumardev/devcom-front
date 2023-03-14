import {followProfileAction} from "../../redux/Actions/activitiesAction";
import {useDispatch} from "react-redux";

const PopoverFollow = ({item})=>
{
    const dispatch = useDispatch()
    // console.log(item)
    return(
        <div className=" w-52 h-40 pb-4 transition-opacity duration-300 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
            <div className="flex justify-between items-center mb-2">
                <a href={`/hisprofile/${item?.id}`}>
                    <img  src={item?.avatar} alt="" className="hidden object-cover w-10 h-10 mx-1 rounded-full sm:block" />
                </a>
                <div>
                    <a type="button" href={`/hisprofile/${item?.id}`}  className="focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Posts:
                        <span className="ml-1">
                            {item?.my_posts_count>99&&item?.my_posts_count<1000 ? 99+'+':item?.my_posts_count && item?.my_posts_count>999 ? item?.my_posts_count/1000+'k': item?.my_posts_count}
                        </span>
                    </a>
                </div>
                <div>
                <button type="button"
                        onClick={()=>dispatch(followProfileAction(item?.id))}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow
                </button>
                </div>
            </div>
            <div className="text-base font-semibold capitalize leading-none text-gray-900 text-black dark:text-white">
                <a href={`/hisprofile/${item?.id}`} className="text-black">{item?.user?.username}</a>
            </div>
            <div className="mb-3 text-sm font-normal">
                <a href={`/hisprofile/${item?.id}`} className="hover:underline ">@{item?.user?.username}</a>
            </div>
            <span className="mb-4 text-sm font-light">{item?.bio?.slice(0,40)} ...
                <a href="/" className="text-blue-600 dark:text-blue-500 hover:underline">devco.com</a>.
            </span>
            <ul className="flex text-sm font-light ">
                <li className="mr-2">
                    <a href={`/hisprofile/${item?.id}`} className="hover:underline">
                        <span className="font-semibold text-gray-900 dark:text-white">
                                {item?.followedby_count>99&&
                                item?.followedby_count<1000 ? 99+'+':
                                item?.followedby_count &&
                                item?.followedby_count>999 ?
                                item?.followedby_count/1000+'k':
                                item?.followedby_count}
                        </span>
                        <span> Following</span>
                    </a>
                </li>
                <li>
                    <a href={`/hisprofile/${item?.id}`} className="hover:underline">
                        <span className="font-semibold text-gray-900 dark:text-white">
                            {item?.follow_count>99&&
                            item?.follow_count<1000 ? 99+'+':
                            item?.follow_count &&
                            item?.follow_count>999 ?
                            item?.follow_count/1000+'k':
                            item?.follow_count}
                        </span>
                        <span> Followers</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default PopoverFollow
