import {FiLink, FiSettings} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";
import {BsCodeSlash, BsEmojiHeartEyes, BsHeart, BsImage} from "react-icons/bs";
import {MdOutlineQuickreply} from "react-icons/md";
import {AiOutlineRetweet} from "react-icons/ai";
import {RiShareForwardLine} from "react-icons/ri";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { getOneFeedAction} from "../redux/Actions/feedActions";
import SingleLeft from "./SingleLeft";

const SingleBlog = ()=>
{
    const {id} =useParams()
    const dispatch = useDispatch()
    const {feed} = useSelector(state => state.getOneFeedReducer)

    useEffect(() =>
    {
        dispatch(getOneFeedAction(id))
    }, [dispatch, id]);
    return(
        <div>
        <div className="flex w-full justify-center gap-4 left-2 mt-3">
            <SingleLeft feed={feed}/>
            <div className="flex-col ">

            <div className="max-w-3xl mb-4 p-5 h-auto rounded border">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center"> </div>
                    </div>
                    <div className="">
                        {/*single post*/}
                        <div className="w-full flex">
                            <div className="">
                                <div className="flex-col mt-5 ">
                                    <div className="py-3 flex">
                                        <div className="flex">
                                            <img src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="host"
                                                 className="h-10 w-10 rounded-full object-cover"/>
                                            <span className="ml-5">Alpha Diallo <br/><b className="text-blue-700">6 days ago</b></span>
                                        </div>
                                    </div>
                                    <h1 className="mt-4 font-bold text-3xl text-gray-800 dark:text-white md:mt-0 md:text-3xl">{feed?.title}</h1>

                                    <p className="mt-2 ">
                                        {feed?.content}
                                        <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                            <img className="rounded h-72 w-full"  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                                        </a>
                                    </p>

                                    <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800 ">
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                                         src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="host"/>
                                                    <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Alpha Oumar <span className="font-thin">@Alphaoumar</span></a>
                                                </div>
                                                <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
                                                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Design</a>
                                            </div>

                                            <div className="mt-2">
                                                <a href="/single"
                                                   className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Accessibility
                                                    tools for designers and developers</a>
                                                <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing
                                                    elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                                    reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">

                                                <div className="flex items-center hover:text-blue-500">
                                                    <MdOutlineQuickreply size={25} className="mr-2"/>89
                                                </div>
                                                <div className="flex items-center hover:text-green-500">
                                                    <AiOutlineRetweet size={25} className="mr-2"/>90
                                                </div>
                                                <div className="flex items-center hover:text-red-700">
                                                    <BsHeart size={25} className="mr-2"/>67
                                                </div>
                                                <div className="flex items-center hover:text-blue-700">
                                                    <RiShareForwardLine size={25} className="mr-2"/> 43
                                                </div>
                                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/*d*/}
                            </div>
                        </div>
                        {/*end*/}
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>

    )
}
export default SingleBlog
