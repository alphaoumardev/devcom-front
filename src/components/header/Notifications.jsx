import {MdMessage, MdOutlineMessage} from "react-icons/md";
import {BsFillHeartFill, BsFillPersonPlusFill} from "react-icons/bs";
import {AiOutlineMessage} from "react-icons/ai";
import {FiEye} from "react-icons/fi";

const Notifications =({})=>
{
    return(
        <div>
            <div className="block w-72 py-3  bg-white rounded-md shadow-xl dark:bg-gray-800">
                <div
                    className="block py-2 px-4 font-medium text-center text-gray-700 rounded bg-gray-50 dark:bg-gray-800 dark:text-white">
                    Notifications
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                    <a href="#" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0">
                            <img className="w-11 h-11 rounded-full object-cover"
                                 src="https://res.cloudinary.com/diallo/image/upload/v1653794949/diallo_rjazjs.png"
                                 alt="Jese image"/>
                            <div
                                className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 dark:border-gray-800">
                                <MdMessage className="text-blue-400"/>
                            </div>
                        </div>
                        <div className="pl-3 w-full">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message
                                from <span
                                    className="font-semibold text-gray-900 dark:text-white">Jese Leos</span>:
                                "Hey,
                                what's up? All set for the presentation?"
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0">
                            <img className="w-11 h-11 rounded-full object-cover"
                                 src="https://res.cloudinary.com/diallo/image/upload/v1653794949/diallo_rjazjs.png"
                                 alt="Joseph image"/>
                            <div
                                className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5   dark:border-gray-800">
                                <BsFillPersonPlusFill/>
                            </div>
                        </div>
                        <div className="pl-3 w-full">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span
                                className="font-medium text-gray-900 dark:text-white">5 others</span> started
                                following you.
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">10 minutes ago
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0">
                            <img className="w-11 h-11 rounded-full object-cover"
                                 src="https://res.cloudinary.com/diallo/image/upload/v1653794949/diallo_rjazjs.png"
                                 alt="Bonnie image"/>
                            <div
                                className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5   dark:border-gray-800">
                                <BsFillHeartFill className="text-red-700"/>

                            </div>
                        </div>
                        <div className="pl-3 w-full">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and <span
                                className="font-medium text-gray-900 dark:text-white">141 others</span> love
                                your
                                story. See it and view more stories.
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">44 minutes ago
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0">
                            <img className="w-11 h-11 rounded-full object-cover"
                                 src="https://res.cloudinary.com/diallo/image/upload/v1653794949/diallo_rjazjs.png"
                                 alt="Leslie image"/>
                            <div
                                className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5   dark:border-gray-800">
                                <AiOutlineMessage className="text-green-500"/>
                            </div>
                        </div>
                        <div className="pl-3 w-full">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                className="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned
                                you in a comment: <span className="font-medium text-blue-500"
                                >@bonnie.green</span> what do you say?
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">1 hour ago</div>
                        </div>
                    </a>
                    <a href="#" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0">
                            <img className="w-11 h-11 rounded-full object-cover"
                                 src="https://res.cloudinary.com/diallo/image/upload/v1653794949/diallo_rjazjs.png"
                                 alt="Leslie"/>
                            <div
                                className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5  dark:border-gray-800">
                                <MdOutlineMessage className="text-blue-500"/>

                            </div>
                        </div>
                        <div className="pl-3 w-full">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                className="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned
                                you in a comment: <span className="font-medium text-blue-500"
                                >@bonnie.green</span> what do you say?
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">1 hour ago</div>
                        </div>
                    </a>
                </div>
                <a href="#"
                   className="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <div className="inline-flex items-center ">
                        <FiEye/>View All
                    </div>
                </a>
            </div>
        </div>
    )
}
export default Notifications
