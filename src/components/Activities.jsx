import {IoMdTrendingUp} from "react-icons/io";
import {BsThreeDots} from "react-icons/bs";
import {FiExternalLink} from "react-icons/fi";

const Activities = ()=>
{
    return(
        <>
        <div className="flex-col sticky top-24 max-w-xl bg-gray-50 rounded p-5 border-gray-100 hover:shadow">
            <a href="#" className="flex justify-center items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="uppercase px-12 py-3 bg-gray-200 flex justify-center items-center rounded-full">RECENT ACTIVITIES</span>
            </a>
            <div className="block w-full h-auto rounded hover:shadow bg-white max-w-sm">
                <div className="py-3 pl-3 border-b border-gray-300 flex">
                    <img src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="host"
                         className="h-10 w-10 rounded-full object-cover"/>
                    <span className="ml-5">Alpha Diallo <br/><b className="text-blue-700">@alphaoumar</b></span>
                    <span className="justify-end">7 days ago</span>
                </div>
                <div className="p-6 text-base">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                    <p className="text-gray-700 text-base mb-4">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </div>
            </div>

            {/*the trending*/}
            <div className="p-6 mt-4 max-w-sm bg-white rounded-lg hover:shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-xl flex font-bold leading-none text-red-700 dark:text-white">Tranding Topics  <IoMdTrendingUp className="ml-1 text-red-700"/></h5>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"><BsThreeDots/></a>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <a href="#" className="font-normal leading-none text-gray-900 dark:text-white">Cybersecurity</a>
                    <a href="#" className="text-sm font-thin text-blue-600 p-1 bg-blue-300 rounded-full  dark:text-blue-500">99k+</a>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <a href="#" className="font-normal leading-none text-gray-900 dark:text-white">Artificial Itelligence</a>
                    <a href="#" className="text-sm font-thin text-blue-600 p-1 bg-blue-300 rounded-full dark:text-blue-500">99k+</a>
                </div>
                <a href="#" className="inline-flex items-center text-blue-600 hover:underline">See more<FiExternalLink className="ml-1"/></a>
            </div>

            <div className="p-4 w-full max-w-md bg-white rounded-lg hover:shadow mt-4 sm:p-8 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Relevent People</h5>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">See more</a>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full object-cover"
                                         src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="Neil image"/>
                                </div>
                                <div className="flex-1 min-w-0 text-base">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white"> Elizabeth II</p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">@elizabethtwo</p>
                                </div>
                                <button type="button"  className="inline-flex bg-blue-300 px-5 py-3 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">
                                    Follow
                                </button>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full object-cover"
                                         src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="Neil image"/>
                                </div>
                                <div className="flex-1 min-w-0 text-base">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white"> Elizabeth II</p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">@elizabethtwo</p>
                                </div>
                                <button type="button"  className="inline-flex bg-blue-300 px-5 py-3 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">
                                    Follow
                                </button>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        {/*     copyright*/}
            <div className=" w-full max-w-md  rounded-lg mt-4 sm:p-8  dark:bg-gray-800 ">
                <div className="flex-1 min-w-0 text-base">
                    <a href="#" className="font-medium text-gray-900 truncate dark:text-white"> Terms of Service</a><br/>
                    <a href="#" className="font-medium text-gray-900 truncate dark:text-white"> About us</a>
                    <a href="#" className="font-medium text-gray-900 truncate dark:text-white"> Contact us</a><br/>
                    <a href="#" className="font-medium text-gray-900 truncate dark:text-white"> Privacy Policy</a><br/>
                    <a href="#" className="justify-center flex font-medium text-gray-900 truncate dark:text-white"> © 2022 Devcom, Inc</a>
                </div>
            </div>

        </div>
        </>
            )
}
export default Activities
