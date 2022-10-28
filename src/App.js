import Login from "./components/Login";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import SinglePage from "./pages/SinglePage";
import Signup from "./components/Signup";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {load_myProfile, loadMyInfoAction} from "./redux/Actions/authActions";
import Header from "./components/Header";

const App = ()=>
{
    const dispatch = useDispatch()
    const {my_profile, } = useSelector(state => state.getMyInfoReducer)
    const [query, setQuery] = useState('');

    useEffect(() =>
    {
        if (my_profile)
        {
            dispatch(loadMyInfoAction())
        }
    }, [dispatch]);
    return(
        <>
            {window.location.pathname==="/login" ||
             window.location.pathname==="/register"? "": <Header my_profile={my_profile} setQuery={setQuery}/>}
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Signup/>}/>

            <Route exact path="/" element={<Home query={query}/>}/>
            <Route exact path="/:name" element={<Home query={query}/>}/>
            <Route path="/me" element={<Me/>}/>
            <Route path="/single/:id" element={<SinglePage my_profile={my_profile}/>}/>
        </Routes>
        </>
    )
}
export default App
