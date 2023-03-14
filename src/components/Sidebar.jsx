import {BiDownArrow,} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getTopicsAction} from "../redux/Actions/topicsActions";
import {GrDiamond} from "react-icons/gr";
import {CgComponents, CgFileDocument} from "react-icons/cg";
import {GiHelp} from "react-icons/gi"
const Sidebar = ()=>
{
    const dispatch = useDispatch()

    const {topics} = useSelector(state => state.getTopicsReducer)
    const [loadmore, setLoadmore] = useState(8);
    useEffect(() =>
    {
        dispatch(getTopicsAction())
    }, [dispatch]);
    // console.log(topics)
    return(

        <aside className="hidden md:block sticky top-0 max-w-xl w-96 hover:shadow-2xl" aria-label="Sidebar">
            <div className=" py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    <li>
                        <a href="/" className="flex justify-center items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3 uppercase px-12 py-3 bg-gray-200 text-center rounded-full">Browse Topics</span>
                        </a>
                    </li>
                    {topics?.slice(0,loadmore)?.map((item, index) =>
                        <li key={index}>
                            <a href={`/${item?.name}`} className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="flex-1 ml-3 whitespace-nowrap capitalize text-xl hover:font-bold">{item?.name}</span>
                                <span className="inline-flex justify-center items-center p-5 ml-3 w-3 h-3 text-sm font-bold  bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
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
        </aside>
    )
}
export default Sidebar
