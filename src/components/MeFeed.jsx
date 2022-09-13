import MeTab from "./MeTab";

const MeFeed =() =>
{
    return(
        <div className="flex-col">
            <div className="max-w-2xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center"> </div>
                    </div>
                    <div className="">
                        {/*mine*/}
                        <div className="w-full flex-col">
                            <div className="rounded relative">
                                <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img className="rounded h-72 w-full"  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                                </a>
                                <div className="w-full">
                                    <div className="flex justify-center -mt-16 md:justify-end">
                                        <img className="object-cover mr-3 w-32 h-32 border-2 border-black rounded-full dark:border-blue-400"
                                            alt="Me"
                                            src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg"/>
                                    </div>

                                    <h3 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Alpha Diallo</h3>
                                    <span>@Alphaoumar</span>

                                    <p className="mt-2 text-gray-600 dark:text-gray-200">
                                        被灯光和舞台魔法切割过的不同空间故事，犹如电影画面般展开，家庭关系、亲子关系，关于如何爱以及如何看待生命等议题，一一展开。9月11日，上剧场线上直播40分钟《十三角关系》演出片段。该剧由赖声川执导，谢娜、文章主演，9月16日在上剧场首演，演出持续至9月25日，11月将赴杭州大剧院巡演
                                    </p>
                                    <div className="flex justify-end mt-4">
                                        <a href="#" className="text-xl font-medium hover:bg-blue-300 rounded-full p-2 outline text-blue-500 dark:text-blue-300">Edit Profile</a>
                                    </div>
                                </div>
                                {/*d*/}
                            </div>
                            <MeTab/>
                        </div>
                        {/*end*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MeFeed
