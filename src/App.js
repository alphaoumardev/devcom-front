import Login from "./components/Login";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import SinglePage from "./pages/SinglePage";
import Signup from "./components/Signup";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {loadMyInfoAction} from "./redux/Actions/authActions";
import Header from "./components/Header";
import His from "./pages/His";
import MeSettings from "./components/me/MeSettings";

const App = ()=>
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {my_profile, } = useSelector(state => state.getMyInfoReducer)
    const [query, setQuery] = useState('');

    useEffect(() =>
    {
        if (my_profile)
        {
            dispatch(loadMyInfoAction()).then(() => {})
        }
    }, [dispatch]);
    return(
        <>
            {window.location.pathname==="/login" ||
             window.location.pathname==="/register"? "": <Header my_profile={my_profile} setQuery={setQuery}/>}
            {my_profile &&
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Signup/>}/>

                    <Route exact path="/" element={<Home query={query}/>}/>
                    <Route exact path="/settings" element={<MeSettings/>}/>
                    <Route exact path="hisprofile/:id" element={<His/>}/>
                    <Route exact path="/:name" element={<Home query={query}/>}/>
                    <Route path="/me" element={<Me/>}/>
                    <Route path="/single/:id" element={<SinglePage my_profile={my_profile}/>}/>
                </Routes>
            }
        </>
    )
}
export default App
