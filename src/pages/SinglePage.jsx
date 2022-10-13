import Activities from "../components/Activities";
import SingleBlog from "../components/SingleBlog";
import Sidebar from "../components/Sidebar";

const SinglePage = ({user})=>
{
    return(
        <div className="flex w-full justify-center gap-10 left-2 mt-3 ">
            <div className="sticky">
                <Sidebar />
            </div>
            <SingleBlog user={user}/>
            <div className="sticky">
                <Activities className=""/>
            </div>
        </div>
    )
}
export default SinglePage
