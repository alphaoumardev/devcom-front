import Activities from "../components/activities/Activities";
import SingleBlog from "../components/post/SingleBlog";
import Sidebar from "../components/Sidebar";

const SinglePage = ()=>
{
    return(
        <div className="flex w-full justify-center sm:gap-10 left-2 mt-3 ">
            <div className="sticky top-36">
                <Sidebar />
            </div>
            <SingleBlog />
            <div className="sticky top-36">
                <Activities/>
            </div>

        </div>
    )
}
export default SinglePage
