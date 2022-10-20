import Longin from "./components/Longin";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import SinglePage from "./pages/SinglePage";
import Signup from "./components/Signup";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {load_user} from "./redux/Actions/authActions";
import Header from "./components/Header";

const App = ()=>
{
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.authReducer)
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (user)
        {
            // const timeout = setTimeout(() => {
            //     console.log('This will be called after 2 seconds');
            // }, 2000);
            dispatch(load_user())
        }
    }, [dispatch]);
    return(
        <>
            {window.location.pathname==="/login" ||
             window.location.pathname==="/register"? "": <Header user={user} setQuery={setQuery}/>}
        <Routes>
            <Route path="/login" element={<Longin/>}/>
            <Route path="/register" element={<Signup/>}/>


            <Route exact path="/" element={<Home query={query}/>}/>
            <Route exact path="/:name" element={<Home query={query}/>}/>
            <Route path="/me" element={<Me/>}/>
            <Route path="/single/:id" element={<SinglePage user={user}/>}/>
        </Routes>
        </>
    )
}
export default App
