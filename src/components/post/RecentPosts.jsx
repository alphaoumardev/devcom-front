import {IoMdPerson} from "react-icons/io";
import moment from "moment";
import {MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {BsHeart} from "react-icons/bs";

const RecentPosts = ({recent_posts, data})=>
{
    // console.log(recent_posts)
    return(
        <div>
            <div className="flex justify-center p-3 bg-blue-50 border  border-2 border-black m-4 rounded-full text-2xl uppercase font-bold dark:text-white "><span className="text-gray-600 mr-1">{data?.profile?.user?.username}</span> Recent Posts</div>
            {recent_posts?.map((item, index)=>
                <div key={index} className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                {item?.profile.avatar ?
                                    <img className="rounded-full  h-10 w-10 object-cover" src={item?.profile.avatar} alt=""/>:
                                    <IoMdPerson  className="rounded-full  h-10 w-10 object-contain text-gray-400"/>}

                                <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize">{item?.profile?.user?.username}
                                    <span className="font-thin capitalize ml-1">@{item?.profile?.user?.username}
                                        <span className="ml-3">{moment(item?.posted?.toString()).startOf().fromNow()}</span>
                                    </span>
                                </a>
                            </div>
                            <span className="text-sm font-light text-gray-600 dark:text-gray-400"></span>
                            <a href={`/${item?.topic?.name}`} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{item?.topic?.name}</a>
                        </div>
                        <div className="flex items-center space-x-1">
                            <div className="flex-col space-y-3">
                                <div className="flex items-center text-gray-500 hover:text-blue-500">
                                    <MdOutlineQuickreply size={20} className="mr-2"/>{item?.num_replies>0 && <span>{item?.num_replies}</span>}
                                </div>
                                <div className="flex items-center text-gray-500 hover:text-green-500">
                                    <MdOutlineBookmarkBorder size={20} className="mr-2"/>{item?.num_saves>0 && <span>{item?.num_saves}</span>}
                                </div>
                                <div className="flex items-center text-gray-500 hover:text-red-700">
                                    <BsHeart size={20} className="mr-2"/>{item?.num_likes>0 && <span>{item?.num_likes}</span>}
                                </div>
                            </div>
                            <div className="mt-2 ">
                                <a href={`/single/${item?.id}`}
                                   className="text-2xl ml-2 font-bold text-gray-700 capitalize dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:underline">{item?.title}</a>
                                <div className="flex">
                                    <div>
                                        <p className="mt-2 ml-3 text-gray-600 dark:text-gray-300 ">{item?.content?.slice(0, 250)}<a href={`/single/${item?.id}`} className="text-blue-700">...</a></p>
                                    </div>
                                    <div>
                                        <a  href={`/single/${item?.id}`}>
                                            {item?.cover_image &&<img  className="object-contain w-56 h-56 rounded-lg md:h-28  md:w-64 md:rounded md:rounded-lg"
                                                                       src={item?.cover_image} alt=""/>}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default RecentPosts
