import {IoMdTrendingUp} from "react-icons/io";
import {BsThreeDots} from "react-icons/bs";
import {FiExternalLink} from "react-icons/fi";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {followProfileAction, getRecommadedProfilesAction, getTrendingAction} from "../../redux/Actions/activitiesAction";
import {loadMyInfoAction} from "../../redux/Actions/mineAction";
import PopoverFollow from "../modals/PopoverFollow";
import {Popover} from "antd";

const Activities = ()=>
{
    const dispatch = useDispatch()
    const {trending_feed} = useSelector(state => state.getTrendingReducer)
    const {recommanded} = useSelector(state => state.getRecommendedProfilesReducer)
    const {my_profile} = useSelector(state => state.getMyInfoReducer)
    const [moreTrending, setMoreTrending] = useState(4);
    const [moreToFollow, setMoreToFollow] = useState(4);
    useEffect(() =>
    {
        dispatch(getTrendingAction())
        dispatch(getRecommadedProfilesAction())
        dispatch(loadMyInfoAction())
    }, [dispatch,]);

    return(
        <>
        <div className="hidden md:block flex-col  sticky top-0 max-w-xl  rounded p-5 border-gray-100 hover:shadow">
            <a href="src/components#" className="flex justify-center items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="uppercase px-12 py-3 bg-gray-200 flex justify-center items-center rounded-full">RECENT ACTIVITIES</span>
            </a>
            <div className="block w-full h-auto rounded hover:shadow bg-white max-w-sm">
                <div className="py-3 pl-3 border-b border-gray-300 flex">
                    <img className="relative rounded-full  h-10 w-10 object-cover" src={my_profile?.avatar} alt=""/>
                    <a href={'/me'} className="ml-5 uppercase">{my_profile?.user?.username}<br/><b className="text-blue-700">@{my_profile?.user?.username}</b></a>
                    <span className="justify-end"></span>
                </div>
                {my_profile?.bio &&
                <div className="p-6 text-base">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">About Me</h5>
                    <span className="text-gray-700 text-base mb-4">{my_profile?.bio}</span>
                </div>}
            </div>

            {/*the trending*/}
            <div className="p-6 mt-4 max-w-sm bg-white rounded-lg hover:shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-xl flex font-bold leading-none text-red-700 dark:text-white">Tranding Topics  <IoMdTrendingUp className="ml-1 text-red-700"/></h5>
                    <a href="src/components#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"><BsThreeDots/></a>
                </div>
                {trending_feed?.slice(0,moreTrending)?.map((item, index)=>
                    <div key={index} className="flex justify-between items-center mb-4">
                        <a href={`/single/${item?.id}`} className="font-normal leading-none text-gray-900 dark:text-white">{item?.title?.slice(0,30 )}</a>
                        <a href={`/single/${item?.id}`} className="text-sm font-normal text-black px-2 w-10 py-1 bg-blue-300 rounded-full  dark:text-blue-500">
                            {item?.views>99&&item?.views<1000 ? 99+'+':item?.views && item?.views>999 ? item?.views/1000+'k': item?.views}
                        </a>
                    </div>
                )}
                <div className="inline-flex items-center text-blue-600 hover:underline cursor-pointer"
                     onClick={()=>setMoreTrending(moreTrending =>moreTrending === 4? moreTrending+4:moreTrending-4)}>See more
                    <FiExternalLink className="ml-1" />
                </div>
            </div>
            {/*Relevent people*/}
            {recommanded?.length>0 &&
            <div className="py-1 px-3  w-full max-w-md bg-white rounded-lg hover:shadow mt-2 sm:p-2 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-3">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Relevent People</h5>
                    <div  onClick={()=>setMoreToFollow(moreToFollow===4?moreToFollow+4:moreToFollow-4)} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">See more</div>
                </div>
                <div className="flow-root">
                    {recommanded?.slice(0, moreToFollow)?.map((item, index)=>
                        <div key={index}>
                            {!my_profile?.following?.includes(item?.id)&&
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center p-2">
                                    <Popover content={<PopoverFollow item={item}/>}>
                                        <img className="w-8 h-8 rounded-full object-cover" src={item?.avatar} alt=""/>
                                    </Popover>
                                {/* </div>*/}
                                {/*<div className=" ">*/}
                                    <div className="flex-col items-center ml-1 ">
                                        <div className="text-sm text-gray-900 dark:text-white capitalize">{item?.user?.username}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 capitalize text-blue-400">@{item?.user?.username}</div>
                                    </div>
                                  </div>
                                <button type="button"
                                        onClick={()=>dispatch(followProfileAction(item?.id))}
                                        className="inline-flex  bg-blue-400 px-4 py-1 rounded-3xl items-center text-base font-semibold text-gray-900 dark:text-white">
                                    Follow
                                </button>
                            </div>
                            }
                        </div>
                    )}
                </div>
            </div>}

            {/*copyright*/}
            <div className="  max-w-xl w-full max-w-md  rounded-lg mt-1 sm:p-8  dark:bg-gray-800 ">
                <div className="flex-1 min-w-0 text-base">
                    <a href="src/components#" className="font-medium text-gray-900 truncate dark:text-white"> Terms of Service</a><br/>
                    <a href="src/components#" className="font-medium text-gray-900 truncate dark:text-white"> About us</a>
                    <a href="src/components#" className="font-medium text-gray-900 truncate dark:text-white"> Contact us</a><br/>
                    <a href="src/components#" className="font-medium text-gray-900 truncate dark:text-white"> Privacy Policy</a><br/>
                    <a href="src/components#" className="justify-center flex font-medium text-gray-900 truncate dark:text-white"> © 2022 Devco, Inc</a>
                </div>
            </div>
        </div>
        </>
            )
}
export default Activities
