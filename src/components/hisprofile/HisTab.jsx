import {MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
import {BsHeart} from "react-icons/bs";
import {RiShareForwardLine,} from "react-icons/ri";
import moment from "moment";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {IoMdPerson} from "react-icons/io";
import {useDispatch} from "react-redux";
import {useState} from "react";
import Loader from "../modals/Loader";

const HisTab = ({hisprofile, hisposts})=>
{
    const dispatch = useDispatch()
    const [loadmore, setLoadmore] = useState(4);
    const [loadingFeeds, setLoadingFeeds] = useState(false);

    const handleInfiniteScroll = ()=>
    {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >
            document.documentElement.scrollHeight)
        {
            setLoadingFeeds(true)
            setLoadmore((loadmore)=>loadmore + 5)
        }
    }

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
                </TabsHeader>
                <TabsBody
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 250 },}}
                >
                <TabPanel value="posts">
                    {hisposts?.slice(0,loadmore)?.map((item, index)=>
                        <div key={index} className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        {hisprofile.avatar ?
                                            <img className="rounded-full  h-10 w-10 object-cover" src={hisprofile.avatar} alt=""/>:
                                            <IoMdPerson  className="rounded-full  h-10 w-10 object-contain text-gray-400"/>}

                                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200 capitalize ml-1">{hisprofile?.user?.username}
                                            <span className="font-thin capitalize ml-1">@{hisprofile?.user?.username}
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

                                    <div className="flex items-center text-gray-500 hover:text-blue-500">
                                        <MdOutlineQuickreply size={20} className="mr-2"/>{item?.num_replies>0 && <span>{item?.num_replies}</span>}
                                    </div>
                                    <div className="flex items-center text-gray-500 hover:text-green-500">
                                        <MdOutlineBookmarkBorder size={20} className="mr-2"/>{item?.num_saves>0 && <span>{item?.num_saves}</span>}
                                    </div>
                                    <div className="flex items-center text-gray-500 hover:text-red-700">
                                        <BsHeart size={20} className="mr-2"/>{item?.num_likes>0 && <span>{item?.num_likes}</span>}
                                    </div>
                                    <div className="flex items-center text-gray-500 hover:text-blue-800">
                                        <RiShareForwardLine size={20} className="mr-2"/>{item?.shares>0 && <span>{item?.shares}</span>}
                                    </div>
                                    <a href={`/single/${item?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
                                </div>
                            </div>
                        </div>
                    )}
                    <Loader loadingFeeds={loadingFeeds}/>
                </TabPanel>
                <TabPanel value="following">
                    <div className="max-w-3xl h-auto px-5 py-3 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {/*{following?.slice(0,loadmore)?.map((item, index)=>*/}
                            {/*    <li  key={index} className="py-2 sm:py-4">*/}
                            {/*        <div className="flex items-center space-x-4">*/}
                            {/*            <div className="flex-shrink-0">*/}
                            {/*                {item.avatar ?*/}
                            {/*                    <img className="rounded-full  h-8 w-8 object-cover" src={item.avatar} alt=""/>:*/}
                            {/*                    <IoMdPerson  className="rounded-full  h-8 w-8 object-contain text-gray-400"/>}*/}

                            {/*            </div>*/}
                            {/*            <div className="flex-1 min-w-0 text-base">*/}
                            {/*                <p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">{item?.user?.username}</p>*/}
                            {/*                <p className="text-sm text-gray-500 truncate dark:text-gray-400">@{item?.user?.username}</p>*/}
                            {/*            </div>*/}
                            {/*            <button type="button"*/}
                            {/*                    className="cursor-pointer inline-flex bg-blue-200 px-4 py-2 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">*/}
                            {/*                Following*/}
                            {/*            </button>*/}
                            {/*        </div>*/}
                            {/*    </li>*/}
                            {/*)}*/}
                        </ul>
                    </div>
                    <Loader loadingFeeds={loadingFeeds}/>

                </TabPanel>
                <TabPanel value="followers">
                        <div className="max-w-3xl h-auto px-5 py-3 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {/*{followers?.slice(0,loadmore)?.map((item, index)=>*/}
                            {/*    <li  key={index} className="py-2 sm:py-4">*/}
                            {/*        <div className="flex items-center space-x-4">*/}
                            {/*            <div className="flex-shrink-0">*/}
                            {/*                {item.avatar ?*/}
                            {/*                    <img className="rounded-full  h-8 w-8 object-cover" src={item.avatar} alt=""/>:*/}
                            {/*                    <IoMdPerson  className="rounded-full  h-8 w-8 object-contain text-gray-400"/>}*/}
                            {/*            </div>*/}
                            {/*            <div className="flex-1 min-w-0 text-base">*/}
                            {/*                <p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">{item?.user?.username}</p>*/}
                            {/*                <p className="text-sm text-gray-500 truncate dark:text-gray-400">@{item?.user?.username}</p>*/}
                            {/*            </div>*/}
                            {/*            <button type="button"*/}
                            {/*                    className="cursor-pointer inline-flex bg-blue-200 px-4 py-2 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">*/}
                            {/*                Following*/}
                            {/*            </button>*/}
                            {/*        </div>*/}
                            {/*    </li>*/}
                            {/*)}*/}
                        </ul>
                        </div>
                        <Loader loadingFeeds={loadingFeeds}/>

                    </TabPanel>
                </TabsBody>
            </Tabs>

        </div>
    )
}
export default HisTab
