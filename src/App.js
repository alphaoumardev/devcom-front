import Header from "./components/Header";
import Longin from "./components/Longin";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import SinglePage from "./pages/SinglePage";
import Signup from "./components/Signup";

const App = ()=>
{
    return(
        <>
            {window.location.pathname==="/login" ||
             window.location.pathname==="/register"? "": <Header/>}
        <Routes>
            <Route path="/login" element={<Longin/>}/>
            <Route path="/register" element={<Signup/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/:name" element={<Home/>}/>

            {/*<Route path="/ex" element={<Mypage/>}/>*/}

            <Route path="/me" element={<Me/>}/>
            <Route path="/single/:id" element={<SinglePage/>}/>
        </Routes>
        </>
    )
}
export default App
