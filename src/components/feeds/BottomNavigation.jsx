import React, { useState } from "react";
import {AiFillBell, AiFillHome, AiOutlineSearch} from "react-icons/ai";
import {ImUser} from "react-icons/im";

function BottomNavigation()
{
    const [activeTab, setActiveTab] = useState("home");

    const handleTabClick = (tabName) =>
    {
        setActiveTab(tabName);
    };

    return (
        <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
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

