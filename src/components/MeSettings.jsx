import {BiDownArrow,} from "react-icons/bi";

const MeSettings = ()=>
{
    return(
        <aside className="sticky top-24 overflow-y-scroll w-96 hover:shadow-2xl" aria-label="Me-Settings">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="flex justify-center items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3 uppercase px-12 py-3 bg-gray-200 text-center rounded-full">Browse Topics</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap capitalize text-xl hover:font-bold">All</span>
                            <span className="inline-flex justify-center items-center p-5 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">83</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap capitalize text-xl hover:font-bold">React</span>
                            <span className="inline-flex justify-center items-center p-5 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">49</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap capitalize text-xl hover:font-bold">Vue</span>
                            <span className="inline-flex justify-center items-center p-5 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">36</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap capitalize text-xl hover:font-bold">Python</span>
                            <span className="inline-flex justify-center items-center p-5 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">23</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap capitalize text-xl hover:font-bold">Java</span>
                            <span className="inline-flex justify-center items-center p-5 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">13</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap capitalize text-xl hover:font-bold">Node.js</span>
                            <span className="inline-flex justify-center items-center p-5 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">62</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap capitalize text-xl hover:font-bold">Django</span>
                            <span className="inline-flex justify-center items-center p-5 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">14</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 font-normal text-gray-900 hover:text-blue-300 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap capitalize text-xl ">More Topics</span>
                            <BiDownArrow className=" justify-center items-center mr-3 text-sm font-medium dark:bg-blue-900 dark:text-blue-200"/>
                        </a>
                    </li>
                </ul>
                <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg aria-hidden="true"
                                 className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400"
                                 focusable="false" data-prefix="fas" data-icon="gem" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path>
                            </svg>
                            <span className="ml-4">Upgrade to Pro</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path fillRule="evenodd"
                                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className="ml-3">Documentation</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                            </svg>
                            <span className="ml-3">Components</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className="ml-3">Help</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
export default  MeSettings
