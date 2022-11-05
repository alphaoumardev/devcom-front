import {MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {BsHeart} from "react-icons/bs";
import {RiShareForwardLine} from "react-icons/ri";
import moment from "moment";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const MeTab = ({my_profile, my_posts, following, liked_posts, saved_posts, followers})=>
{
    return(
        <div>
            <Tabs id="custom-animation" value="posts">
                <TabsHeader>
                    <Tab  value="posts" className="font-bold text-xl" >
                        Posts
                    </Tab>
                    <Tab  value="following" className="font-bold text-xl">
                        Followers
                    </Tab>
                    <Tab  value="followers" className="font-bold text-xl">
                        Following
                    </Tab>
                    <Tab  value="cons" className="font-bold text-xl">
                        Liked
                    </Tab>
                    <Tab  value="saves" className="font-bold text-xl">
                        Saved
                    </Tab>
                </TabsHeader>
                <TabsBody
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 250 },}}
                >
                    <TabPanel value="posts">
                        {my_posts?.map((item, index)=>
                            <div key={index} className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                                     src={my_profile?.avatar} alt="host"/>
                                                <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize">{my_profile?.user?.username}
                                                    <span className="font-thin capitalize ml-1">@{my_profile?.user?.username}
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
                                            <a href={`/single/${item?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                                        </div>
                                    </div>
                                </div>
                        )}
                    </TabPanel>
                    <TabPanel value="following">
                        <div className="max-w-3xl h-auto px-5 py-3 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                {following?.map((item, index)=>
                                    <li  key={index} className="py-2 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full object-cover" src={item?.avatar} alt=""/>
                                            </div>
                                            <div className="flex-1 min-w-0 text-base">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">{item?.user?.username}</p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">@{item?.user?.username}</p>
                                            </div>
                                            <button type="button"
                                                    className="cursor-pointer inline-flex bg-blue-200 px-4 py-2 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">
                                                Following
                                            </button>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel value="followers">
                        <div className="max-w-3xl h-auto px-5 py-3 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {followers?.map((item, index)=>
                                <li  key={index} className="py-2 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full object-cover" src={item?.avatar} alt=""/>
                                        </div>
                                        <div className="flex-1 min-w-0 text-base">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">{item?.user?.username}</p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">@{item?.user?.username}</p>
                                        </div>
                                        <button type="button"
                                                className="cursor-pointer inline-flex bg-blue-200 px-4 py-2 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">
                                            Following
                                        </button>
                                    </div>
                                </li>
                            )}
                        </ul>
                        </div>
                    </TabPanel>
                    <TabPanel value="cons">
                        {liked_posts?.map((value, index)=>
                            <div key={index} className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                                 src={value?.profile?.avatar} alt="host"/>
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
                                            <MdOutlineQuickreply size={25} className="mr-2"/>{value?.num_replies>0 && <span>{value?.num_replies}</span>}
                                        </div>
                                        <div className="flex items-center hover:text-green-500">
                                            <MdOutlineBookmarkBorder size={25} className="mr-2"/>{value?.num_saves>0 && <span>{value?.num_saves}</span>}
                                        </div>
                                        <div className="flex items-center hover:text-red-700">
                                            <BsHeart size={25} className="mr-2"/>{value?.num_likes>0 && <span>{value?.num_likes}</span>}
                                        </div>
                                        <div className="flex items-center hover:text-blue-700">
                                            <RiShareForwardLine size={25} className="mr-2"/> {value?.shares>0 && <span>{value?.shares}</span>}
                                        </div>
                                        <a href={`/single/${value?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                                    </div>
                                </div>
                            </div>
                        )}
                    </TabPanel>
                    <TabPanel value="saves">
                        {saved_posts?.map((value, index)=>
                            <div key={index} className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                                 src={value?.profile?.avatar} alt="host"/>
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
                                            <MdOutlineQuickreply size={25} className="mr-2"/>{value?.num_replies>0 && <span>{value?.num_replies}</span>}
                                        </div>
                                        <div className="flex items-center hover:text-green-500">
                                            <MdOutlineBookmarkBorder size={25} className="mr-2"/>{value?.num_saves>0 && <span>{value?.num_saves}</span>}
                                        </div>
                                        <div className="flex items-center hover:text-red-700">
                                            <BsHeart size={25} className="mr-2"/>{value?.num_likes>0 && <span>{value?.num_likes}</span>}
                                        </div>
                                        <div className="flex items-center hover:text-blue-700">
                                            <RiShareForwardLine size={25} className="mr-2"/> {value?.shares>0 && <span>{value?.shares}</span>}
                                        </div>
                                        <a href={`/single/${value?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                                    </div>
                                </div>
                            </div>
                        )}
                    </TabPanel>
                </TabsBody>
            </Tabs>

        </div>
    )
}
export default MeTab
