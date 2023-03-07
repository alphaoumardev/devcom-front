import {Fragment, useEffect, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {AiOutlineMenu, AiOutlinePlus} from "react-icons/ai";
import {BiDownArrow} from "react-icons/bi";
import {GrDiamond} from "react-icons/gr";
import {CgComponents, CgFileDocument} from "react-icons/cg";
import {GiHelp} from "react-icons/gi";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getTopicsAction} from "../../redux/Actions/topicsActions";
import {getFeedAction} from "../../redux/Actions/feedActions";
import {BsFillBellFill, BsSearch} from "react-icons/bs";
import Notifications from "../notifications/Notifications";
import MyDropDown from "../header/MyDropDown";
import {Popover} from "antd";
import {getNotificationsAction} from "../../redux/Actions/notificationAction";


export default function MainHeader({my_profile, setQuery})
{
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()
    let {name} = useParams()

    const {topics} = useSelector(state => state.getTopicsReducer)
    const [loadmore, setLoadmore] = useState(8);

    let date = new Date();
    let [month] = useState(date.getMonth()+1);
    let [day] = useState(date.getDate());
    let [hour] = useState(date.getHours());
    let [minutes] = useState(date.getMinutes());

    let token_ = localStorage.getItem('token')
    let storage_profile = JSON.parse(localStorage.getItem('my_profile'));
    let expiration_date = storage_profile?.expiry?.slice(0,17).replaceAll("-","").replaceAll(":",'').replace('T','')
    month = month < 10 ? '0'+month : month;
    day = day < 10 ? '0'+day : day;
    hour = hour < 10 ? '0'+hour : hour;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    let current_date = date.getFullYear()+""+month+""+ day+""+hour+""+minutes
    const {notification} = useSelector(state => state.getNotificationsReducer)

    if((parseInt(current_date)>=parseInt(expiration_date)) || (token_===null))
    {
        localStorage.clear()
        // navigate('/login')
        window.location.pathname = "/login"
    }
    useEffect(() =>
    {
        dispatch(getTopicsAction())
        dispatch(getFeedAction(name))
        dispatch(getNotificationsAction())

    }, [dispatch]);

    return (
        <div className="sticky-top">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">

                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button type="button" onClick={() => setOpen(false)} className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400">
                                    <span className="sr-only">Close menu</span>
                                    <AiOutlinePlus className="h-6 w-6 rotate-45" aria-hidden="true" />
                                </button>
                            </div>

                            <div className="mt-2">
                                <div className=" py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                                    <ul className="space-y-2">
                                        <li>
                                            <a href="/" className="flex justify-center items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <span className="ml-3 uppercase px-10 py-2 bg-gray-200 text-center rounded-full">Browse Topics</span>
                                            </a>
                                        </li>
                                        {topics?.slice(0,loadmore)?.map((item, index) =>
                                            <li key={index}>
                                                <a href={`/${item?.name}`} className="flex items-center p-1.5 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <span className="flex-1 ml-2 whitespace-nowrap capitalize text-xl hover:font-normal">{item?.name}</span>
                                                    <span className="inline-flex justify-center items-center p-4 ml-2 w-2 h-2 text-sm font-bold  bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                                        {item?.post_count>99&&item?.post_count<1000 ? 99+'+':item?.post_count && item?.post_count>999 ? item?.post_count/1000+'k': item?.post_count}
                                                    </span>
                                                </a>
                                            </li>
                                        )}

                                        <li>
                                            <a
                                                onClick={()=>setLoadmore(loadmore => loadmore+4)}
                                                className="flex items-center p-2 font-normal text-gray-900 hover:text-blue-300 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <span className="flex-1 ml-3 whitespace-nowrap capitalize text-xl ">More Topics</span>
                                                <BiDownArrow className=" justify-center items-center mr-3 text-sm font-medium dark:bg-blue-900 dark:text-blue-200"/>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="pt-4 mt-4 space-y-2 border-t dark:border-gray-700">
                                        <li>
                                            <a href="#"
                                               className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                                <GrDiamond size={25} className="text-gray-500"/>
                                                <span className="ml-4 font-bold text-xl">Upgrade to Pro</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                                <CgFileDocument size={25} className="text-gray-500"/>
                                                <span className="ml-4 font-bold text-xl">Documention</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                                <CgComponents size={25} className="text-gray-500"/>
                                                <span className="ml-4 font-bold text-xl">Components</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                                <GiHelp size={25} className="text-gray-500"/>
                                                <span className="ml-4 font-bold text-xl">Help</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <div className="relative overflow-hidden">
                {/* Top navigation */}
                <nav className="  bg-gray-100 border-gray-200 px-8 shadow-lg sm:px-4 py-4 rounded dark:bg-gray-900">
                    <div className="h-10 flex">
                        {!open?
                        <button type="button" onClick={() => setOpen(true)} className="p-2 -ml-4 rounded-md text-gray-400 lg:hidden">
                            <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
                        </button>:
                        <button type="button" onClick={() => setOpen(false)} className="p-2 -ml-4 rounded-md text-gray-400 lg:hidden">
                            <AiOutlinePlus className="h-6 w-6 rotate-45 text-red-600" aria-hidden="true" />
                        </button>}

                        <div className="flex justify-between w-full md:w-10/12 mx-auto ">
                            <div>
                                <a href="/" className="hidden md:flex">
                                    <img src="https://res.cloudinary.com/diallo/image/upload/v1662517794/devcom_qxhwcj.jpg"
                                         className="mr-3 rounded-full  h-14 w-14 object-cover rounded-full  sm:h-14 " alt="Logo"/>
                                    <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Devco</span>
                                </a>
                            </div>

                            <div className="relative flex justify-center items-center w-8/12 md:w-6/12">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <BsSearch/>
                                </div>
                                <input type="search" id="search"
                                       className="block p-2 pl-10 w-full text-xl border-none bg-gray-200 text-sm text-gray-900  rounded-full focus:ring-blue-200 focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search..." required onChange={(e)=>setQuery(e.target.value)}/>
                            </div>

                            <div className="flex space-x-3 items-center">
                                {/*notification start*/}
                                <div className="relative hidden md:block">
                                    <Popover content={<Notifications notification={notification}/>} placement="bottom">
                                        <div className="relative peer mr-2" title="Notifications">
                                            {my_profile&&
                                                <button
                                                    className="peer relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                                                    type="button">
                                                    <BsFillBellFill className="w-6 h-6 text-blue-500 hover:bg-gray-300 rounded-full"/>
                                                    {notification?.length>0 &&
                                                        <div className="flex relative">
                                                            <div  className=" relative top-1 right-3 w-3 h-3 bg-red-600 rounded-full border-2 border-white dark:border-gray-900"></div>
                                                        </div>}
                                                </button>
                                            }
                                        </div>
                                    </Popover>
                                </div>
                                {/*notifications end*/}

                                {/*<-- Dropdown popover me -->*/}
                                <div className=" relative block">
                                    <Popover content={<MyDropDown my_profile={my_profile}/>} placement="bottom">
                                        <div className="relative peer ">
                                            <img className="relative rounded-full  h-12 w-12 object-cover" src={my_profile?.avatar} alt=""/>
                                            <span className="bottom-0 left-8 absolute  w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                                        </div>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
