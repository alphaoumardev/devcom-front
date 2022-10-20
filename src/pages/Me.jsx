import Activities from "../components/Activities";
import MyFeed from "../components/MyFeed";
import Sidebar from "../components/Sidebar";

const Me = ()=>
{
    return(
        <div className="flex justify-center items-baseline gap-10 min-w-8xl left-5">
            <Sidebar/>
            <MyFeed/>
            <Activities/>
        </div>
    )
}
export default Me
