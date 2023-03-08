import {getHisProfileAction, loadMyInfoAction} from "../../redux/Actions/mineAction";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import HisTab from "./HisTab";
import {IoMdPerson} from "react-icons/io";

const HisProfile = ()=>
{
    let {id} = useParams()
    const dispatch = useDispatch()
    const {hisprofile, hisposts, hisfollowers, hisfollowing} = useSelector(state =>state.getHisProfileReducer)
    const {my_profile, } = useSelector(state => state.getMyInfoReducer)

    useEffect(() =>
    {
        return () =>
        {
            dispatch(getHisProfileAction(id))
            dispatch(loadMyInfoAction())
        };
    }, [dispatch, ]);

    return(
        <div className="flex-col">
            <div className="max-w-3xl mb-4 h-auto p-1 sm:px-8 sm:py-4 bg-white  dark:bg-gray-800">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center"> </div>
                    </div>
                    <div className="">
                        {/*his*/}
                        <div className="w-full flex-col">
                            <div className="rounded relative">
                                <img className="rounded-t-lg h-72 w-full object-cover"  src={hisprofile?.cover_image} alt={""}/>
                                <div className="w-full">
                                    <div className="flex justify-center -mt-16 md:justify-end">
                                        <img className="object-cover mr-3 w-20 h-20 sm:w-32 sm:h-32 border-2 border-black rounded-full dark:border-blue-400"
                                             alt=""
                                             src={hisprofile?.avatar}/>
                                    </div>

                                    <h3 className="mt-2 flex justify-center items-center text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl uppercase">{hisprofile?.user?.username}</h3>
                                    <span className="capitalize flex justify-center items-center mt-2 text-blue-600">@{hisprofile?.user?.username}</span>
                                    <p className="indent-6 capitalize lowercase  mt-2 mb-3 text-gray-600 dark:text-gray-200">{hisprofile?.bio}</p>
                                </div>
                                {/*d*/}
                            </div>
                            <HisTab hisprofile={hisprofile}
                                    my_profile={my_profile}
                                    hisposts={hisposts}
                                    hisfollowing={hisfollowing}
                                    hisfollowers={hisfollowers}
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
