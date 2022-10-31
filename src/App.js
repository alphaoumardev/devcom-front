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

const App = ()=>
{
    let date = new Date();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {my_profile, } = useSelector(state => state.getMyInfoReducer)
    const [query, setQuery] = useState('');

    let [month, setMonth] = useState(date.getMonth()+1);
    let [day, setDay] = useState(date.getDate());
    let [hour, setHour] = useState(date.getHours());
    let [minutes, setMunites] = useState(date.getMinutes());

    let token_ = localStorage.getItem('token')
    let storage_profile = JSON.parse(localStorage.getItem('my_profile'));
    let expiration_date = storage_profile?.expiry?.slice(0,17).replaceAll("-","").replaceAll(":",'').replace('T','')
    month = month < 10 ? '0'+month : month;
    day = day < 10 ? '0'+day : day;
    hour = hour < 10 ? '0'+hour : hour;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    let current_date = date.getFullYear()+""+month+""+ day+""+hour+""+minutes
    useEffect(() =>
    {
        if((parseInt(current_date)>=parseInt(expiration_date)) || (token_===null))
        {
            console.log('expired')
            localStorage.clear()
            navigate('/login')
        }
        if (my_profile)
        {
            dispatch(loadMyInfoAction())
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
                    <Route exact path="/:name" element={<Home query={query}/>}/>
                    <Route path="/me" element={<Me/>}/>
                    <Route path="/single/:id" element={<SinglePage my_profile={my_profile}/>}/>
                </Routes>
            }
        </>
    )
}
export default App
