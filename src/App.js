import Header from "./components/Header";
import Longin from "./components/Longin";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import SinglePage from "./pages/SinglePage";
import Signup from "./components/Signup";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {load_user} from "./redux/Actions/authActions";

const App = ()=>
{
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.authReducer)

    useEffect(() => {
        if (user)
        {
            dispatch(load_user())
        }
    }, [dispatch]);
    return(
        <>
            {window.location.pathname==="/login" ||
             window.location.pathname==="/register"? "": <Header user={user}/>}
            {/*<Header/>*/}
        <Routes>
            <Route path="/login" element={<Longin/>}/>
            <Route path="/register" element={<Signup/>}/>

            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/:name" element={<Home/>}/>
            <Route path="/me" element={<Me/>}/>
            <Route path="/single/:id" element={<SinglePage user={user}/>}/>
        </Routes>
        </>
    )
}
export default App
