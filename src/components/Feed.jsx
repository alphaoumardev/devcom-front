import {MdOutlineQuickreply, MdPeopleOutline} from "react-icons/md";
import {RiShareForwardLine} from "react-icons/ri";
import {BsCodeSlash, BsEmojiHeartEyes, BsHeart, BsImage} from "react-icons/bs";
import {AiOutlineFullscreen, AiOutlineRetweet} from "react-icons/ai";
import {FiLink, FiSettings} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";

const Feed = ()=>
{
    return(
        <div className="flex-col mt-5 overflow-y-scroll">

            <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800">
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                             src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="host"/>
                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Alpha Oumar <span className="font-thin">@Alphaoumar</span></a>
                    </div>
                </div>

                <div className="mt-2">
                    {/*new article edit*/}
                    <form>
                        <div className="mb-4 relative w-full bg-gray-50 rounded-lg hover:shadow-lg dark:bg-gray-700 dark:border-gray-600">
                            <div className="py-2 px-4 rounded-full dark:bg-gray-800">
                                <label htmlFor="editor" className="sr-only">Publish</label>
                                <textarea id="editor" rows="4"
                                          className="block px-0 w-full text-norma text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                          placeholder="Write an article..." required=""></textarea>
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                    <div className="flex items-center space-x-1 sm:pr-4">
                                        <button type="button" className="p-2 text-gray-500 font-bold rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <FiLink/>
                                        </button>
                                        <button type="button"  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <GrLocation/>
                                        </button>
                                        <button type="button"  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <BsImage/>
                                        </button>
                                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <BsCodeSlash/>
                                        </button>
                                        <button type="button"
                                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <BsEmojiHeartEyes/>
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                                        <button type="button"
                                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <FiSettings/>
                                        </button>

                                    </div>
                                </div>
                                <button type="submit" className="inline-flex float-right mt-1 items-center px-6 py-2 text-sm rounded-full font-bold text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    Post
                                </button>

                            </div>
                        </div>

                    </form>
                    {/*    end*/}
                </div>
            </div>
        </div>

            <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
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
                        <a href="#"
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
            <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                        <a href="#"
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
            <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                        <a href="#"
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
            <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                        <a href="#"
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
            <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                        <a href="#"
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
            <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                        <a href="#"
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
            <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                        <a href="#"
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
            <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                        <a href="#"
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
    )
}
export default Feed
