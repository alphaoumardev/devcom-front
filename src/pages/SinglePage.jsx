import Activities from "../components/Activities";
import SingleBlog from "../components/SingleBlog";
import Sidebar from "../components/Sidebar";

const SinglePage = ({my_profile})=>
{
    return(
        <div className="flex w-full justify-center gap-10 left-2 mt-3 ">
            <Sidebar />
            <SingleBlog my_profile={my_profile}/>
            <Activities/>
        </div>
    )
}
export default SinglePage
