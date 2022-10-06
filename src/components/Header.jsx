import {BsFillBellFill, BsFillHeartFill, BsFillPersonPlusFill, BsPerson, BsSearch} from "react-icons/bs";
import {MdMessage, MdOutlineMessage, MdPersonAddAlt} from "react-icons/md";
import {AiOutlineMessage, AiOutlineSetting,} from "react-icons/ai";
import {FiEye, FiHelpCircle} from "react-icons/fi";
import {BiCommand} from "react-icons/bi";
import {RiTeamLine} from "react-icons/ri";
import {VscSignOut} from "react-icons/vsc";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {load_user, logout} from "../redux/Actions/authActions";
import {IoMdLogOut, } from "react-icons/io";
import {IoMdPerson} from "react-icons/io";

const Header =()=>
{
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.authReducer)

    useEffect(() => {
        if (user)
        {
            dispatch(load_user())
        }
    }, [dispatch]);
    return (
        <nav className="sticky-top  bg-gray-100 border-gray-200 px-8 shadow-lg sm:px-4 py-4 rounded dark:bg-gray-900">
            <div className=" flex justify-between w-10/12 mx-auto ">
                <div>
                    <a href="/" className="flex">
                        <img src="https://res.cloudinary.com/diallo/image/upload/v1662517794/devcom_qxhwcj.jpg"
                             className="mr-3 rounded-full  h-14 w-14 object-cover rounded-full  sm:h-14 "
                             alt="Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Devcom</span>
                    </a>
                </div>

                <div className="relative flex justify-center w-96">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <BsSearch/>

                    </div>
                    <input type="search" id="search"
                           className="block p-4 pl-10 w-full text-xl  border-none bg-gray-200 text-sm text-gray-900  rounded-lg focus:ring-blue-200 focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Search..." required/>
                </div>

                <div className=" flex space-x-3">
                    {/*notification start*/}
                    <div className="flex">
                        {user&&<button
                            className="peer relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                            type="button">
                            <BsFillBellFill className="w-5 h-5 text-red-800"/>

                            <div className="flex relative">
                                <div
                                    className="inline-flex relative -top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                            </div>
                        </button>}
                        {/*<- Dropdown menu -->*/}
                        <div
                            className="hidden peer-hover:block hover:block absolute mt-16 right-5  w-full max-w-sm bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700">
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
                    {/*notifications end*/}
                    {/*<-- Dropdown popover me -->*/}

                    <div className=" relative block">
                        {user ?
                            <div className="relative peer ">
                                <img className="relative rounded-full  h-12 w-12 object-contain" src="https://res.cloudinary.com/diallo/image/upload/v1653794949/diallo_rjazjs.png" alt=""/>
                                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                            </div>:
                            <a href={"/login"} className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                <IoMdPerson  className="absolute -left-1 w-12 h-12 text-gray-400"/>
                            </a>
                        }
                        {/*<-- Dropdown menu -->*/}
                        <div className="hidden peer-hover:block absolute hover:block w-60 p-5 right-0  mt-2  bg-white rounded-md shadow-2xl dark:bg-gray-800">

                            <a href="/me"
                               className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                                     src="https://res.cloudinary.com/diallo/image/upload/v1653794949/diallo_rjazjs.png" alt="Me"/>
                                <div className="mx-1">
                                    <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{user?.username}</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
                                </div>
                            </a>
                            <hr className="border-gray-200 dark:border-gray-700 "/>
                            <a href="/me"
                               className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <BsPerson size={17}/>
                                <span className="mx-1"> view profile</span>
                            </a>
                            <a href="#"
                               className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <AiOutlineSetting size={17}/>
                                <span className="mx-1">Settings</span>
                            </a>
                            <a href="/login" onClick={()=>dispatch(logout())}
                               className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <IoMdLogOut size={17}/>
                                <span className="mx-1">Logout</span>
                            </a>

                            <hr className="border-gray-200 dark:border-gray-700 "/>
                            <a href="#"
                               className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <BiCommand size={17}/>
                                <span className="mx-1"> Company profile</span>
                            </a>
                            <a href="#"
                               className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <RiTeamLine size={17}/>
                                <span className="mx-1">Team</span>
                            </a>
                            <a href="#"
                               className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <MdPersonAddAlt size={20}/>
                                <span className="mx-1">Invite colleagues</span>
                            </a>

                            <hr className="border-gray-200 dark:border-gray-700 "/>
                            <a href="#"
                               className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <FiHelpCircle size={17}/>
                                <span className="mx-1">Help</span>
                            </a>
                            <a href="#"
                               className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <VscSignOut size={17}/>
                                <span className="mx-1"> Sign Out </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header

