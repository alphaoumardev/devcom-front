import Activities from "../components/activities/Activities";
import SingleBlog from "../components/post/SingleBlog";
import Sidebar from "../components/Sidebar";

const SinglePage = ({my_profile})=>
{
    return(
        <div className="flex w-full justify-center sm:gap-10 left-2 mt-3 ">
            <div className="sticky top-36">
                <Sidebar />
            </div>
            <SingleBlog my_profile={my_profile} />
            <div className="sticky top-36">
                <Activities/>
            </div>

        </div>
    )
}
export default SinglePage
