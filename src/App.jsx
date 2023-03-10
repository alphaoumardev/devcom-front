import Login from "./components/Login";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import SinglePage from "./pages/SinglePage";
import Signup from "./components/Signup";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import His from "./pages/His";
import MeSettings from "./pages/MeSettings";
import {loadMyInfoAction} from "./redux/Actions/mineAction";
import MainHeader from "./components/feeds/MainHeader";
import BottomNavigation from "./components/feeds/BottomNavigation";
import ActivitiesMobile from "./components/activities/ActivitiesMobile";
import NotificationsMobile from "./components/notifications/NotificationsMobile";

const App = ()=>
{
    const dispatch = useDispatch()
    const {my_info, } = useSelector(state => state.getMyInfoReducer)
    const [query, setQuery] = useState('');

    useEffect(() =>
    {
        if (my_info)
        {
            dispatch(loadMyInfoAction())
        }
    }, [dispatch]);
    // console.log(my_info)
    return(
        <>
            {window.location.pathname==="/login" ||
             window.location.pathname==="/register"? "": <MainHeader setQuery={setQuery}/>}
            {my_info &&
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Signup/>}/>

                    <Route exact path="/" element={<Home query={query} />}/>
                    <Route exact path="/:name" element={<Home query={query}/>}/>

                    <Route path="/me" element={<Me/>}/>

                    <Route exact path="/settings" element={<MeSettings/>}/>
                    <Route exact path="hisprofile/:id" element={<His />}/>
                    <Route path="/single/:id" element={<SinglePage/>}/>

                    <Route path="/activities" element={<ActivitiesMobile/>}/>
                    <Route path="/notifications" element={<NotificationsMobile/>}/>

                </Routes>
            }
            {window.location.pathname==="/login" ||
            window.location.pathname==="/register"? "": <BottomNavigation/>}

        </>
    )
}
export default App
