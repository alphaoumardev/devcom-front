import React, { useState } from "react";
// import { HomeIcon, SearchIcon, BellIcon, UserIcon } from "@heroicons/react/outline";
import {AiFillBell, AiFillHome, AiOutlineSearch} from "react-icons/ai";
import {ImUser} from "react-icons/im";

function BottomNavigation() {
    const [activeTab, setActiveTab] = useState("home");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
            <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-14">
                    <button
                        onClick={() => handleTabClick("home")}
                        className={`flex flex-col justify-center items-center w-full ${
                            activeTab === "home"
                                ? "text-blue-600"
                                : "text-gray-400 hover:text-blue-600"
                        }`}
                    >
                        <AiFillHome className="h-6 w-6" />
                        <span className="text-xs font-medium">Home</span>
                    </button>
                    <button
                        onClick={() => handleTabClick("search")}
                        className={`flex flex-col justify-center items-center w-full ${
                            activeTab === "search"
                                ? "text-blue-600"
                                : "text-gray-400 hover:text-blue-600"
                        }`}
                    >
                        <AiOutlineSearch className="h-6 w-6" />
                        <span className="text-xs font-medium">Search</span>
                    </button>
                    <button
                        onClick={() => handleTabClick("notification")}
                        className={`flex flex-col justify-center items-center w-full ${
                            activeTab === "notification"
                                ? "text-blue-600"
                                : "text-gray-400 hover:text-blue-600"
                        }`}
                    >
                        <AiFillBell className="h-6 w-6" />
                        <span className="text-xs font-medium">Notification</span>
                    </button>
                    <button
                        onClick={() => handleTabClick("me")}
                        className={`flex flex-col justify-center items-center w-full ${
                            activeTab === "me"
                                ? "text-blue-600"
                                : "text-gray-400 hover:text-blue-600"
                        }`}
                    >
                        <ImUser className="h-6 w-6" />
                        <span className="text-xs font-medium">Message</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BottomNavigation;

// import { useState } from 'react'
// import { Tab } from '@headlessui/react'

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// export default function BottomNavigation() {
//     let [categories] = useState({
//         Recent: [
//             {
//                 id: 1,
//                 title: 'Does drinking coffee make you smarter?',
//                 date: '5h ago',
//                 commentCount: 5,
//                 shareCount: 2,
//             },
//             {
//                 id: 2,
//                 title: "So you've bought coffee... now what?",
//                 date: '2h ago',
//                 commentCount: 3,
//                 shareCount: 2,
//             },
//         ],
//         Popular: [
//             {
//                 id: 1,
//                 title: 'Is tech making coffee better or worse?',
//                 date: 'Jan 7',
//                 commentCount: 29,
//                 shareCount: 16,
//             },
//             {
//                 id: 2,
//                 title: 'The most innovative things happening in coffee',
//                 date: 'Mar 19',
//                 commentCount: 24,
//                 shareCount: 12,
//             },
//         ],
//         Trending: [
//             {
//                 id: 1,
//                 title: 'Ask Me Anything: 10 answers to your questions about coffee',
//                 date: '2d ago',
//                 commentCount: 9,
//                 shareCount: 5,
//             },
//             {
//                 id: 2,
//                 title: "The worst advice we've ever heard about coffee",
//                 date: '4d ago',
//                 commentCount: 1,
//                 shareCount: 2,
//             },
//         ],
//     })
//
//     return (
//         <div className="w-full max-w-md px-2 py-16 sm:px-0">
//             <Tab.Group>
//                 <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
//                     {Object.keys(categories).map((category) => (
//                         <Tab
//                             key={category}
//                             className={({ selected }) =>
//                                 classNames(
//                                     'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
//                                     'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
//                                     selected
//                                         ? 'bg-white shadow'
//                                         : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
//                                 )
//                             }
//                         >
//                             {category}
//                         </Tab>
//                     ))}
//                 </Tab.List>
//                 <Tab.Panels className="mt-2">
//                     {Object.values(categories).map((posts, idx) => (
//                         <Tab.Panel
//                             key={idx}
//                             className={classNames(
//                                 'rounded-xl bg-white p-3',
//                                 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
//                             )}
//                         >
//                             <ul>
//                                 {posts.map((post) => (
//                                     <li
//                                         key={post.id}
//                                         className="relative rounded-md p-3 hover:bg-gray-100"
//                                     >
//                                         <h3 className="text-sm font-medium leading-5">
//                                             {post.title}
//                                         </h3>
//
//                                         <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
//                                             <li>{post.date}</li>
//                                             <li>&middot;</li>
//                                             <li>{post.commentCount} comments</li>
//                                             <li>&middot;</li>
//                                             <li>{post.shareCount} shares</li>
//                                         </ul>
//
//                                         <a
//                                             href="#"
//                                             className={classNames(
//                                                 'absolute inset-0 rounded-md',
//                                                 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
//                                             )}
//                                         />
//                                     </li>
//                                 ))}
//                             </ul>
//                         </Tab.Panel>
//                     ))}
//                 </Tab.Panels>
//             </Tab.Group>
//         </div>
//     )
// }
