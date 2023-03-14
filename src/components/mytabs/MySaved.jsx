import {IoMdPerson} from "react-icons/io";
import moment from "moment";
import {MdBookmarkAdded, MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {postLikeAction, postSavesAction} from "../../redux/Actions/feedActions";
import {RiHeart2Fill, RiHeart2Line, RiShareForwardLine} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {Empty} from "antd";

const MySaved = ({saved_posts})=>
{
    const dispatch = useDispatch()
    return(
        <div>
            {saved_posts?.length>0 ?
                <div>
            {saved_posts?.map((value, index)=>
                <div  key={index} className="w-full mb-4 h-auto p-2 sm:px-5 sm:py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                {value?.profile?.avatar ?
                                    <img className="rounded-full  h-10 w-10 object-cover sm:block" src={value?.profile?.avatar} alt=""/>:
                                    <IoMdPerson  className="rounded-full  h-10 w-10 object-contain text-gray-400"/>}

                                <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize">{value?.profile?.user?.username}
                                    <span className="font-thin capitalize ml-1">@{value?.profile?.user?.username}
                                        <span className="ml-3">{moment(value?.posted?.toString()).startOf().fromNow()}</span>
                                                    </span>
                                </a>
                            </div>
                            <span className="text-sm font-light text-gray-600 dark:text-gray-400"></span>
                            <a href={`/${value?.topic?.name}`} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{value?.topic?.name}</a>
                        </div>

                        <div className="mt-2 ">
                            <a href={`/single/${value?.id}`}
                               className="text-2xl ml-2 font-bold text-gray-700 capitalize dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:underline">{value?.title}</a>
                            <div className="flex">
                                <div>
                                    <p className="mt-2 ml-3 text-gray-600 dark:text-gray-300 ">{value?.content?.slice(0, 250)}<a href={`/single/${value?.id}`} className="text-blue-700">...</a></p>
                                </div>
                                <div>
                                    <a  href={`/single/${value?.id}`}>
                                        {value?.cover_image &&<img  className="object-contain w-56 h-56 rounded-lg md:h-28  md:w-64 md:rounded md:rounded-lg"
                                                                    src={value?.cover_image} alt=""/>}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">

                            <div className="flex items-center hover:text-blue-500">
                                <MdOutlineQuickreply size={20} className="mr-2"/>{value?.num_replies>0 && <span>{value?.num_replies}</span>}
                            </div>
                            <div className="flex items-center text-gray-600 hover:text-green-500">
                                {value?.saves?.includes(value?.profile?.id) &&
                                    <MdBookmarkAdded  size={20} color={"green"} type="submit" onClick={()=>dispatch(postSavesAction(value?.id))}/>}
                                {!value?.saves?.includes(value?.profile?.id)&&
                                    <MdOutlineBookmarkBorder size={20} type="submit" onClick={()=>dispatch(postSavesAction(value?.id))}/>}
                                {value?.num_saves>0 &&<span className='ml-2'>{value?.num_saves}</span>}
                            </div>
                            <div className="flex items-center text-gray-500 hover:text-red-700">
                                {value?.likes?.includes(value?.profile?.id) &&
                                    <RiHeart2Fill  size={20} color={"red"} type="submit" onClick={()=>dispatch(postLikeAction(value?.id))}/>}
                                {!value?.likes?.includes(value?.profile?.id)&&
                                    <RiHeart2Line size={20}  type="submit" onClick={()=>dispatch(postLikeAction(value?.id))}/>}
                                {value?.num_likes>0 &&<span className='ml-2'>{value?.num_likes}</span>}
                            </div>
                            <div className="flex items-center hover:text-blue-700">
                                <RiShareForwardLine size={20} className="mr-2"/> {value?.shares>0 && <span>{value?.shares}</span>}
                            </div>
                            <a href={`/single/${value?.id}`} className="hidden sm:flex text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
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
export default MySaved
