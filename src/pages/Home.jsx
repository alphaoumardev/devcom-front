import Sidebar from "../components/Sidebar";
import Activities from "../components/Activities";
import Feed from "../components/Feed";

const Home = ()=>
{
    return(
        <>
            {/*<Header/>*/}
            <div className="flex justify-center items-baseline gap-6  left-5">
                <Sidebar/>
                <Feed/>
                <Activities/>
            </div>
        </>
    )
}
export default Home
