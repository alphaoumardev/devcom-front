import Sidebar from "../components/Sidebar";
import Activities from "../components/activities/Activities";
import Feeds from "../components/Feeds";

const Home = ({query, my_profile})=>
{
    return(
        <>
            {/*<Header/>*/}
            <div className="flex justify-center items-baseline gap-6  left-5">
                <Sidebar/>
                <Feeds query={query} />
                <Activities />
            </div>
        </>
    )
}
export default Home
