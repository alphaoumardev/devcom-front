import {BiLoader} from "react-icons/bi";

const Loader = ({loadingFeeds})=>
{
    return(
        <div>
            {loadingFeeds &&
                <div role="status" className="flex item-center justify-center">
                    <BiLoader className="flex items-center justify-center w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"/>
                </div>
            }

        </div>
    )
}
export default Loader
