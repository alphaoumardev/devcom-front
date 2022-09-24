import Activities from "../components/Activities";
import MeSettings from "../components/MeSettings";
import MeFeed from "../components/MeFeed";
import Sidebar from "../components/Sidebar";

const Me = ()=>
{
    return(
        <div className="flex justify-center items-baseline gap-10 min-w-8xl left-5">
            <Sidebar/>
            <MeFeed/>
            <Activities/>
        </div>
    )
}
export default Me
