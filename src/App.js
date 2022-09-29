import Header from "./components/Header";
import Longin_ from "./components/Longin_";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import SinglePage from "./pages/SinglePage";

const App = ()=>
{
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/login" element={<Longin_/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/me" element={<Me/>}/>
            <Route path="/single/:id" element={<SinglePage/>}/>
        </Routes>
        </>
    )
}
export default App
