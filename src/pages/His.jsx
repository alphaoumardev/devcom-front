import Sidebar from "../components/Sidebar";
import Activities from "../components/activities/Activities";
import HisProfile from "../components/hisprofile/HisProfile";

const His = ()=>
{
    return(
        <div className="flex justify-center items-baseline gap-10 min-w-8xl left-5">
            <Sidebar/>
            <HisProfile/>
            <Activities/>
        </div>
    )
}
export default His
