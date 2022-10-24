import {MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {AiOutlineRetweet} from "react-icons/ai";
import {BsHeart} from "react-icons/bs";
import {RiShareForwardLine} from "react-icons/ri";
import moment from "moment";

const MeTab = ({userinfo, mypost})=>
{
    return(
        <div>
            <ul className="nav nav-tabs nav-justified flex flex-col bg-gray-100 mt-2 md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabse" role="tablist">

                <li className="nav-item flex-grow text-center" role="presentation">
                    <a href="#" id="posts" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab" aria-controls="tabs-homeJustify" aria-selected="true"
                       className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active">Posts</a>
                </li>
                <li className="nav-item flex-grow text-center" role="presentation">
                    <a href="#" id="followers" data-bs-toggle="pill" data-bs-target="#follow" role="tab" aria-controls="follow" aria-selected="false"
                       className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent">Followers</a>
                </li>
                <li className="nav-item flex-grow text-center" role="presentation">
                    <a href="#" id="cons" data-bs-toggle="pill" data-bs-target="#con" role="tab" aria-controls="con" aria-selected="false"
                       className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent">Cons</a>
                </li>
                <li className="nav-item flex-grow text-center" role="presentation">
                    <a href="#" id="sa" data-bs-toggle="pill" data-bs-target="#sav" role="tab" aria-controls="con" aria-selected="false"
                       className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent">Save</a>
                </li>

            </ul>

            <div className="tab-content" id="tabs-tabContentJustify">
                {mypost?.map((item, index)=>
                    <div key={index} className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"  aria-labelledby="posts">
                        <div className="max-w-2xl mb-4 h-auto px-8 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                             src={userinfo?.avatar} alt="host"/>
                                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize">{item?.user?.username}<span className="font-thin capitalize ml-1">@{item?.user?.username}
                                            <span className="ml-3">{moment(item?.posted?.toString()).startOf().fromNow()}</span>
                            </span>
                                        </a>
                                    </div>
                                    <span className="text-sm font-light text-gray-600 dark:text-gray-400"></span>
                                    <a href={`/${item?.topic?.name}`} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{item?.topic?.name}</a>
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

                                <div className="flex items-center justify-between mt-4">

                                    <div className="flex items-center hover:text-blue-500">
                                        <MdOutlineQuickreply size={25} className="mr-2"/>{item?.num_replies>0 && <span>{item?.num_replies}</span>}
                                    </div>
                                    <div className="flex items-center hover:text-green-500">
                                        <MdOutlineBookmarkBorder size={25} className="mr-2"/>{item?.num_saves>0 && <span>{item?.num_saves}</span>}
                                    </div>
                                    <div className="flex items-center hover:text-red-700">
                                        <BsHeart size={25} className="mr-2"/>{item?.num_likes>0 && <span>{item?.num_likes}</span>}
                                    </div>
                                    <div className="flex items-center hover:text-blue-700">
                                        <RiShareForwardLine size={25} className="mr-2"/> {item?.shares>0 && <span>{item?.shares}</span>}
                                    </div>
                                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="tab-pane fade" id="follow" role="tabpanel" aria-labelledby="followers">
                    <div className="max-w-2xl mb-4 h-auto px-8 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                         src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="host"/>
                                    <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Alpha Oumar <span className="font-thin">@Alphaoumar</span></a>
                                </div>
                                <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
                                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Design</a>
                            </div>

                            <div className="mt-2">
                                <a href="#"
                                   className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Accessibility
                                    tools for developers</a>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-4">

                                <div className="flex items-center hover:text-blue-500">
                                    <MdOutlineQuickreply size={25} className="mr-2"/>89
                                </div>
                                <div className="flex items-center hover:text-green-500">
                                    <AiOutlineRetweet size={25} className="mr-2"/>90
                                </div>
                                <div className="flex items-center hover:text-red-700">
                                    <BsHeart size={25} className="mr-2"/>67
                                </div>
                                <div className="flex items-center hover:text-blue-700">
                                    <RiShareForwardLine size={25} className="mr-2"/> 43
                                </div>
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="con" role="tabpanel" aria-labelledby="cons">
                    <div className="max-w-2xl mb-4 h-auto px-8 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                         src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="host"/>
                                    <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Alpha Oumar <span className="font-thin">@Alphaoumar</span></a>
                                </div>
                                <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
                                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Design</a>
                            </div>

                            <div className="mt-2">
                                <a href="#"
                                   className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Accessibility
                                    tools for developers</a>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-4">

                                <div className="flex items-center hover:text-blue-500">
                                    <MdOutlineQuickreply size={25} className="mr-2"/>89
                                </div>
                                <div className="flex items-center hover:text-green-500">
                                    <AiOutlineRetweet size={25} className="mr-2"/>90
                                </div>
                                <div className="flex items-center hover:text-red-700">
                                    <BsHeart size={25} className="mr-2"/>67
                                </div>
                                <div className="flex items-center hover:text-blue-700">
                                    <RiShareForwardLine size={25} className="mr-2"/> 43
                                </div>
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="sav" role="tabpanel" aria-labelledby="sav">
                    <div className="max-w-2xl mb-4 h-auto px-8 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                         src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="host"/>
                                    <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Alpha Oumar <span className="font-thin">@Alphaoumar</span></a>
                                </div>
                                <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
                                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Design</a>
                            </div>

                            <div className="mt-2">
                                <a href="#"
                                   className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Accessibility
                                    tools for developers</a>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-4">

                                <div className="flex items-center hover:text-blue-500">
                                    <MdOutlineQuickreply size={25} className="mr-2"/>89
                                </div>
                                <div className="flex items-center hover:text-green-500">
                                    <AiOutlineRetweet size={25} className="mr-2"/>90
                                </div>
                                <div className="flex items-center hover:text-red-700">
                                    <BsHeart size={25} className="mr-2"/>67
                                </div>
                                <div className="flex items-center hover:text-blue-700">
                                    <RiShareForwardLine size={25} className="mr-2"/> 43
                                </div>
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default MeTab
