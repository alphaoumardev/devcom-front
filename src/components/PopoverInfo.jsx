const PopoverInfo = ({item})=>
{
    // console.log(item)
    return(
        <div className=" w-56 h-40 pb-3 transition-opacity duration-300 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
            <div className="flex justify-between items-center mb-2">
                <a href="#">
                    <img className="object-cover w-10 h-10 rounded-full" src={item?.profile?.avatar}  alt=""/>
                </a>
                <div>
                    <a type="button" href={''}  className="focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Posts: <span>20k</span> </a>
                </div>
                <div>
                    <button type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow
                    </button>
                </div>
            </div>
            <p className="text-base font-semibold capitalize leading-none text-gray-900 dark:text-white">
                <a href="#">{item?.profile?.user?.username}</a>
            </p>
            <p className="mb-3 text-sm font-normal">
                <a href="#" className="hover:underline">@{item?.profile?.user?.username}</a>
            </p>
            <p className="mb-4 text-sm font-light">{item?.profile?.bio?.slice(0,30)}
                <a href="/" className="text-blue-600 dark:text-blue-500 hover:underline">devco.com</a>.
            </p>
            <ul className="flex text-sm font-light ">
                <li className="mr-2">
                    <a href="#" className="hover:underline">
                        <span className="font-semibold text-gray-900 dark:text-white">799 </span>
                        <span> Following</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                        <span className="font-semibold text-gray-900 dark:text-white">3,758 </span>
                        <span> Followers</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default PopoverInfo
