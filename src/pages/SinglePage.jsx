import Activities from "../components/Activities";
import SingleBlog from "../components/SingleBlog";

const SinglePage = ()=>
{
    return(
        <div className="flex w-full justify-center gap-10 left-2 mt-3">
            {/*<SingleLeft/>*/}
            <SingleBlog/>
            <Activities/>
        </div>
    )
}
export default SinglePage
