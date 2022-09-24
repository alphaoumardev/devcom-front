import Activities from "../components/Activities";
import SingleBlog from "../components/SingleBlog";
import SingleLeft from "../components/SingleLeft";

const SinglePage = ()=>
{
    return(
        <div className="flex w-full justify-center gap-6 left-2 mt-3">
            {/*<MeSettings/>MeSettings*/}
            <SingleLeft/>
            <SingleBlog />
            <Activities/>
        </div>
    )
}
export default SinglePage
