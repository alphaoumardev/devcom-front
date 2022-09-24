import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Activities from "../components/Activities";
import Longin_ from "../components/Longin_";
import Feed from "../components/Feed";

const Home = ()=>
{
    return(
        <>
            {/*<Header/>*/}
            <div className="flex justify-center items-baseline gap-12 min-w-8xl left-5">
                <Sidebar/>
                <Feed/>
                <Activities/>
            </div>
        </>
    )
}
export default Home
