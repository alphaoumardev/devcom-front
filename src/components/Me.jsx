import Activities from "./Activities";
import MeSettings from "./MeSettings";
import MeFeed from "./MeFeed";

const Me = ()=>
{
    return(
        <div className="flex justify-center items-baseline gap-10 min-w-8xl left-5">
            <MeSettings/>
            <MeFeed/>
            <Activities/>
        </div>
    )
}
export default Me
