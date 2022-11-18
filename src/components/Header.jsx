import {BsFillBellFill, BsSearch} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import MyDropDown from "./header/MyDropDown";
import {Popover} from "antd";
import Notifications from "./header/Notifications";

const Header =({my_profile, setQuery})=>
{
    let date = new Date();
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
                             className="mr-3 rounded-full  h-14 w-14 object-cover rounded-full  sm:h-14 " alt="Logo"/>

                        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Devco</span>
                    </a>
                </div>

                <div className="relative flex justify-center items-center w-96">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <BsSearch/>
                    </div>
                        <input type="search" id="search"
                               className="block p-4 pl-10 w-full text-xl  border-none bg-gray-200 text-sm text-gray-900  rounded-lg focus:ring-blue-200 focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search..." required onChange={(e)=>setQuery(e.target.value)}/>
                </div>

                <div className="flex space-x-3 items-center">
                    {/*notification start*/}
                    <div className="relative block">
                        <Popover content={<Notifications/>} placement="bottom">
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
        </nav>
    )
}
export default Header

