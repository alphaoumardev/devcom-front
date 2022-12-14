import {getHisProfileAction} from "../../redux/Actions/mineAction";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import HisTab from "./HisTab";

const HisProfile = ()=>
{
    let {id} = useParams()
    const dispatch = useDispatch()
    const {hisprofile, hisposts} = useSelector(state =>state.getHisProfileReducer)
    useEffect(() =>
    {
        return () =>
        {
            dispatch(getHisProfileAction(id))
        };
    }, [dispatch]);
    // console.log(hisprofile)
    return(
        <div className="flex-col">
            <div className="max-w-3xl mb-4 h-auto px-8 py-4 bg-white rounded-lg  dark:bg-gray-800">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center"> </div>
                    </div>
                    <div className="">
                        {/*his*/}
                        <div className="w-full flex-col">
                            <div className="rounded relative">
                                <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img className="rounded h-72 w-full object-cover"  src={hisprofile?.cover_image} alt=""/>
                                </a>
                                <div className="w-full">
                                    <div className="flex justify-center -mt-16 md:justify-end">
                                        <img className="object-cover mr-3 w-32 h-32 border-2 border-black rounded-full dark:border-blue-400"
                                             alt=""
                                             src={hisprofile?.avatar}/>
                                    </div>

                                    <h3 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl uppercase">{hisprofile?.user?.username}</h3>
                                    <span className="capitalize">@{hisprofile?.user?.username}</span>
                                    <p className="mt-2 mb-3 text-gray-600 dark:text-gray-200">{hisprofile?.bio}</p>
                                </div>
                                {/*d*/}
                            </div>
                            <HisTab hisprofile={hisprofile} hisposts={hisposts}
                                   //  following={following}
                                   // liked_posts={liked_posts} saved_posts={saved_posts}
                                   // followers={followers}
                            />
                        </div>
                        {/*end*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HisProfile
