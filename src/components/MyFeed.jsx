import MeTab from "./MeTab";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadUserInfoAction} from "../redux/Actions/authActions";

const MyFeed =() =>
{
    const dispatch = useDispatch()
    const {userinfo, mypost} = useSelector(state=> state.getUserInfoReducer)
    const {user} = useSelector(state => state.authReducer)
    useEffect(() =>
    {
        if (user)
        {
            dispatch(loadUserInfoAction())
        }
    }, [dispatch]);
    // console.log(mypost)
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
                                    <img className="rounded h-72 w-full"  src={userinfo?.cover_image} alt=""/>
                                </a>
                                <div className="w-full">
                                    <div className="flex justify-center -mt-16 md:justify-end">
                                        <img className="object-cover mr-3 w-32 h-32 border-2 border-black rounded-full dark:border-blue-400"
                                            alt=""
                                            src={userinfo?.avatar}/>
                                    </div>

                                    <h3 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Alpha Diallo</h3>
                                    <span>@Alphaoumar</span>

                                    <p className="mt-2 text-gray-600 dark:text-gray-200">{userinfo?.bio}</p>
                                    <div className="flex justify-end mt-4">
                                        <a href="#" className="text-xl font-medium hover:bg-blue-300 rounded-full p-2 outline text-blue-500 dark:text-blue-300">Edit Profile</a>
                                    </div>
                                </div>
                                {/*d*/}
                            </div>
                            <MeTab userinfo={userinfo} mypost={mypost}/>
                        </div>
                        {/*end*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyFeed
