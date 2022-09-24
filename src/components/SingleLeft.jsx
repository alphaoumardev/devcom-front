import {MdOutlineQuickreply} from "react-icons/md";
import {AiOutlineRetweet, } from "react-icons/ai";
import {BsFacebook, BsHeart, BsReddit, BsTwitter} from "react-icons/bs";
import {RiShareForwardLine, } from "react-icons/ri";
import {FaDiscord} from "react-icons/fa";

const SingleLeft = ()=>
{
    return(
        <div className="flex-col items-center justify-between mt-12">
            <div className="mb-12 items-center hover:text-blue-500 cursor-pointer">
                <MdOutlineQuickreply size={25} className="mr-2"/>89
            </div>
            <div className="mb-12 items-center hover:text-green-500 cursor-pointer">
                <AiOutlineRetweet size={25} className="mr-2"/>90
            </div>
            <div className="mb-12 items-center hover:text-red-700 cursor-pointer">
                <BsHeart size={25} className="mr-2"/>67
            </div>

            <div className=" relative block">
                <div className="peer relative items-center hover:text-blue-700 cursor-pointer">
                    <RiShareForwardLine size={25} className="mr-2"/> 43
                </div>
                {/*<-- Dropdown menu -->*/}
                <div
                    className="hidden peer-hover:flex absolute hover:flex  m-auto w-56 py-5 mt-2 right-0  bg-white rounded-md shadow-2xl dark:bg-gray-800">

                    <a href="#"
                       className="flex cursor-pointer items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 hover:rounded-full dark:hover:bg-gray-700 dark:hover:text-white">
                        <BsTwitter size={25} className="text-blue-500"/>
                    </a>
                    <a href="#"
                       className="flex cursor-pointer items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 hover:rounded-full dark:hover:bg-gray-700 dark:hover:text-white">
                        <BsFacebook size={25} className="text-blue-500"/>
                    </a>
                    <a href="#"
                       className="flex cursor-pointer items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 hover:rounded-full dark:hover:bg-gray-700 dark:hover:text-white">
                        <FaDiscord size={25} className="text-black"/>
                    </a>
                    <a href="#"
                       className="flex cursor-pointer items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 hover:rounded-full dark:hover:bg-gray-700 dark:hover:text-white">
                        <BsReddit size={25} className="text-orange-400"/>
                    </a>

                </div>
            </div>

        </div>
    )
}
export default SingleLeft
