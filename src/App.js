import Header from "./components/Header";
import {Button} from "@material-tailwind/react";
import Example from "./components/Exemple";
import Login from "./components/Login";
import Longin_ from "./components/Longin_";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./components/Activities";
import Mypage from "./components/Mypage";
import Me from "./components/Me";

const App = ()=>
{
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/login" element={<Longin_/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/me" element={<Me/>}/>
            {/*<Example/>*/}
            {/*<Longin_/>*/}
        </Routes>
        </>
    )
}
export default App
