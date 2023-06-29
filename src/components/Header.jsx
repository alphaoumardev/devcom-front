import {BsFillBellFill, BsFillHeartFill, BsFillPersonPlusFill, BsPerson, BsSearch} from "react-icons/bs";
import {MdMessage, MdOutlineMessage, MdPersonAddAlt} from "react-icons/md";
import {AiOutlineMessage, AiOutlineSetting,} from "react-icons/ai";
import {FiEye, FiHelpCircle} from "react-icons/fi";
import {BiCommand} from "react-icons/bi";
import {RiTeamLine} from "react-icons/ri";
import {logout} from "../redux/Actions/authActions";
import {IoMdLogOut, IoMdPerson,} from "react-icons/io";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Popover, PopoverContent, PopoverHandler} from "@material-tailwind/react";

const Header =({my_profile, setQuery})=>
{
    let date = new Date();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [month, setMonth] = useState(date.getMonth()+1);
    let [day, setDay] = useState(date.getDate());
    let [hour, setHour] = useState(date.getHours());
    let [minutes, setMunites] = useState(date.getMinutes());

    let token_ = localStorage.getItem('token')
    let storage_profile = JSON.parse(localStorage.getItem('my_profile'));
    let expiration_date = storage_profile?.expiry?.slice(0,17).replaceAll("-","").replaceAll(":",'').replace('T','')
    month = month < 10 ? '0'+month : month;
    day = day < 10 ? '0'+day : day;
    hour = hour < 10 ? '0'+hour : hour;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    let current_date = date.getFullYear()+""+month+""+ day+""+hour+""+minutes
    useEffect(() =>
    {
        if((parseInt(current_date)>=parseInt(expiration_date)) || (token_===null))
        {
            localStorage.clear()
            navigate('/login')

        }
    }, [dispatch]);
    return (
        <nav className="sticky-top  bg-gray-100 border-gray-200 px-8 shadow-lg sm:px-4 py-4 rounded dark:bg-gray-900">
            <div className=" flex justify-between w-10/12 mx-auto ">
                <div>
                    <a href="/" className="flex">
                        <img src="https://res.cloudinary.com/diallo/image/upload/v1662517794/devcom_qxhwcj.jpg"
                             className="mr-3 h-14 w-14 object-cover rounded-full  sm:h-14 "
                             alt="Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Devco</span>
                    </a>
                </div>

                <div className="relative flex justify-center items-center w-96">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <BsSearch/>
                    </div>
                        <input type="search" id="search"
                               className="block p-4 pl-10 w-full border-none bg-gray-200 text-sm text-gray-900  rounded-lg focus:ring-blue-200 focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search..." required onChange={(e)=>setQuery(e.target.value)}/>
                </div>

                <div className="flex space-x-3 items-center">
                    {/*notification start*/}
                    <div className="relative block">
                        <Popover>
                            <PopoverHandler>
                                <div className="relative peer ">
                                    {my_profile&&
                                        <button
                                            className="peer relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                                            type="button">
                                            <BsFillBellFill className="w-5 h-5 text-red-800"/>
                                            <div className="flex relative">
                                                <div  className=" relative top-1 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                                            </div>
                                        </button>
                                    }
                                </div>
                            </PopoverHandler>
                            <PopoverContent>
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
                            </PopoverContent>
                        </Popover>
                    </div>
                    {/*notifications end*/}

                    {/*<-- Dropdown popover me -->*/}
                    <div className=" relative block">
                        <Popover>
                            <PopoverHandler>
                                <div className="relative peer ">
                                    {my_profile?.avatar ?
                                        <img className="relative rounded-full  h-12 w-12 object-contain" src={my_profile?.avatar} alt=""/>:
                                        <IoMdPerson  className="relative rounded-full  h-12 w-12 object-contain text-gray-400"/>}
                                    <span className="bottom-0 left-8 absolute  w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                                </div>
                            </PopoverHandler>
                            <PopoverContent>
                                <div className="block w-60 p-5  bg-white rounded-md shadow-xl dark:bg-gray-800">

                                    <a href="/me"
                                       className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        {my_profile?.avatar ?
                                            <img className="relative rounded-full  h-10 w-10 object-contain" src={my_profile?.avatar} alt=""/>:
                                            <IoMdPerson  className="relative rounded-full  h-10 w-10 object-contain text-gray-400"/>}
                                        <div className="mx-1">
                                            <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{my_profile?.user?.username}</h1>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{my_profile?.user?.email}</p>
                                        </div>
                                    </a>
                                    <hr className="border-gray-200 dark:border-gray-700 "/>
                                    <a href="/me"
                                       className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <BsPerson size={17}/>
                                        <span className="mx-1"> view profile</span>
                                    </a>
                                    <a href="/settings"
                                       className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <AiOutlineSetting size={17}/>
                                        <span className="mx-1">Settings</span>
                                    </a>
                                    <a href=""
                                       className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <IoMdLogOut size={17}/>
                                        <span className="mx-1">Details</span>
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
                                    <a href="/login" onClick={()=>dispatch(logout())}
                                       className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <IoMdLogOut size={17}/>
                                        <span className="mx-1"> Sign Out </span>
                                    </a>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header
