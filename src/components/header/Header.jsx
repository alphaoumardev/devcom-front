// import {BsFillBellFill, BsSearch} from "react-icons/bs";
// import {useDispatch, useSelector} from "react-redux";
// import {useEffect, useState} from "react";
// import {useNavigate} from "react-router-dom";
// import MyDropDown from "./MyDropDown";
// import {Popover} from "antd";
// import Notifications from "../notifications/Notifications";
// import {getNotificationsAction} from "../../redux/Actions/notificationAction";
//
// const Header =({my_profile, setQuery})=>
// {
//     let date = new Date();
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     let [month] = useState(date.getMonth()+1);
//     let [day] = useState(date.getDate());
//     let [hour] = useState(date.getHours());
//     let [minutes] = useState(date.getMinutes());
//
//     let token_ = localStorage.getItem('token')
//     let storage_profile = JSON.parse(localStorage.getItem('my_profile'));
//     let expiration_date = storage_profile?.expiry?.slice(0,17).replaceAll("-","").replaceAll(":",'').replace('T','')
//     month = month < 10 ? '0'+month : month;
//     day = day < 10 ? '0'+day : day;
//     hour = hour < 10 ? '0'+hour : hour;
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//
//     let current_date = date.getFullYear()+""+month+""+ day+""+hour+""+minutes
//     const {notification} = useSelector(state => state.getNotificationsReducer)
//
//     if((parseInt(current_date)>=parseInt(expiration_date)) || (token_===null))
//     {
//         localStorage.clear()
//         navigate('/login')
//     }
//     useEffect(() =>
//     {
//         dispatch(getNotificationsAction())
//     }, [dispatch]);
//
//     return (
//         <nav className="sticky-top  bg-gray-100 border-gray-200 px-8 shadow-lg sm:px-4 py-4 rounded dark:bg-gray-900">
//             <div className="flex justify-between w-full md:w-10/12 mx-auto ">
//                 <div>
//                     <a href="/" className="hidden md:flex">
//                         <img src="https://res.cloudinary.com/diallo/image/upload/v1662517794/devcom_qxhwcj.jpg"
//                              className="mr-3 rounded-full  h-14 w-14 object-cover rounded-full  sm:h-14 " alt="Logo"/>
//                         <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Devco</span>
//                     </a>
//                 </div>
//
//                 <div className="relative flex justify-center items-center w-8/12 md:w-6/12">
//                     <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//                         <BsSearch/>
//                     </div>
//                         <input type="search" id="search"
//                                className="block p-2 pl-10 w-full text-xl border-none bg-gray-200 text-sm text-gray-900  rounded-lg focus:ring-blue-200 focus:border-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                placeholder="Search..." required onChange={(e)=>setQuery(e.target.value)}/>
//                 </div>
//
//                 <div className="flex space-x-3 items-center">
//                     {/*notification start*/}
//                     <div className="relative hidden md:block">
//                         <Popover content={<Notifications notification={notification}/>} placement="bottom">
//                             <div className="relative peer mr-2" title="Notifications">
//                                     {my_profile&&
//                                         <button
//                                             className="peer relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
//                                             type="button">
//                                             <BsFillBellFill className="w-6 h-6 text-blue-500 hover:bg-gray-300 rounded-full"/>
//                                             {notification?.length>0 &&
//                                             <div className="flex relative">
//                                                 <div  className=" relative top-1 right-3 w-3 h-3 bg-red-600 rounded-full border-2 border-white dark:border-gray-900"></div>
//                                             </div>}
//                                         </button>
//                                     }
//                                 </div>
//                         </Popover>
//                     </div>
//                     {/*notifications end*/}
//
//                     {/*<-- Dropdown popover me -->*/}
//                     <div className=" relative block">
//                         <Popover content={<MyDropDown my_profile={my_profile}/>} placement="bottom">
//                             <div className="relative peer ">
//                                 <img className="relative rounded-full  h-12 w-12 object-cover" src={my_profile?.avatar} alt=""/>
//                                 <span className="bottom-0 left-8 absolute  w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
//                             </div>
//                         </Popover>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }
// export default Header
//



// import moment from "moment";
// import {MdBookmarkAdded, MdOutlineBookmarkBorder, MdOutlineQuickreply} from "react-icons/md";
// import {postLikeAction, postSavesAction} from "../../redux/Actions/feedActions";
// import {RiDeleteBin6Line, RiHeart2Fill, RiHeart2Line} from "react-icons/ri";
// import {AiFillEdit, AiOutlineQuestionCircle} from "react-icons/ai";
// import {Popconfirm} from "antd";
// import {deleteMyPostAction} from "../../redux/Actions/mineAction";
//
// {my_posts?.slice(0,loadmore)?.map((item, index)=>
//     <div key={index} className="w-full mb-4 h-auto px-5 py-4 rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
//         <div>
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                     <img className="rounded-full  h-10 w-10 object-cover" src={my_profile.avatar} alt=""/>
//                     <a className="font-bold text-gray-700 cursor-pointer ml-2 dark:text-gray-200 capitalize">{my_profile?.user?.username}
//                         <span className="font-thin capitalize ml-1">@{my_profile?.user?.username}
//                             <span className="ml-3 capitalize">{moment(item?.posted?.toString()).startOf().fromNow()}</span>
//                                                             </span>
//                     </a>
//                 </div>
//                 <span className="text-sm font-light text-gray-600 dark:text-gray-400"></span>
//                 <a href={`/${item?.topic?.name}`} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{item?.topic?.name}</a>
//             </div>
//
//             <div className="mt-2 ">
//                 <a href={`/single/${item?.id}`}
//                    className="text-2xl ml-2 font-bold text-gray-700 capitalize dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:underline">{item?.title}</a>
//                 <div className="flex">
//                     <div>
//                         <p className="mt-2 ml-3 text-gray-600 dark:text-gray-300 ">{item?.content?.slice(0, 250)}<a href={`/single/${item?.id}`} className="text-blue-700">...</a></p>
//                     </div>
//                     <div>
//                         <a  href={`/single/${item?.id}`}>
//                             {item?.cover_image &&<img  className="object-contain w-56 h-56 rounded-lg md:h-28  md:w-64 md:rounded md:rounded-lg"
//                                                        src={item?.cover_image} alt=""/>}
//                         </a>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="flex items-center justify-between mt-4">
//
//                 <div className="flex items-center text-gray-500 hover:text-blue-500">
//                     <MdOutlineQuickreply size={20} className="mr-2"/>{item?.num_replies>0 && <span>{item?.num_replies}</span>}
//                 </div>
//                 <div className="flex items-center text-gray-500 hover:text-green-500">
//                     {item?.saves?.includes(item?.profile?.id) ?
//                         <MdBookmarkAdded size={20} color={"green"} type="submit"  onClick={() => dispatch(postSavesAction(item?.id))}/>:
//                         <MdOutlineBookmarkBorder size={20} type="submit"  onClick={() => dispatch(postSavesAction(item?.id))}/>}
//                     {item?.num_saves > 0 && <span className='ml-2'>{item?.num_saves}</span>}
//                 </div>
//                 <div className="flex items-center text-gray-500 hover:text-red-700">
//                     {item?.likes?.includes(item?.profile?.id) ?
//                         <RiHeart2Fill size={20} color={"red"} type="submit" onClick={() => dispatch(postLikeAction(item?.id))}/>:
//                         <RiHeart2Line size={20} type="submit" onClick={() => dispatch(postLikeAction(item?.id))}/>}
//                     {item?.num_likes > 0 && <span className='ml-2'>{item?.num_likes}</span>}
//                 </div>
//                 <div className="flex items-center text-blue-600 hover:text-blue-800"
//                      data-bs-toggle="modal" data-bs-target="#editPostModal"
//                 >
//                     <AiFillEdit size={20} className="mr-2" onClick={()=>setItemToEdit(item)}/>
//                     {item?.shares>0 && <span>{item?.shares}</span>}
//                 </div>
//
//                 <div className="flex items-center text-red-600 hover:text-red-800">
//                     <Popconfirm
//                         title="Are you sure to delete this Post?"
//                         onConfirm={()=>dispatch(deleteMyPostAction(item?.id))}
//                         okText="Yes"
//                         cancelText="No"
//                         icon={ <AiOutlineQuestionCircle color={"red"} size={20}/>}
//                     >
//                         <RiDeleteBin6Line size={20} className="mr-2"/> {item?.shares>0 && <span>{item?.shares}</span>}
//                     </Popconfirm>
//                 </div>
//                 <a href={`/single/${item?.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
//
//             </div>
//         </div>
//     </div>
// )}
