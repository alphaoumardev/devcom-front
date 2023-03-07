import {Tabs} from 'antd';
import MyPosts from "../mytabs/MyPosts";
import MyFollowers from "../mytabs/MyFollowers";
import MyFollowing from "../mytabs/MyFollowing";
import MyLikes from "../mytabs/MyLikes";
import MySaved from "../mytabs/MySaved";
import {FaBlogger,FaUsers} from "react-icons/fa";
import {GiSaveArrow, GiShadowFollower,} from "react-icons/gi";
import {AiOutlineLike} from "react-icons/ai";
import {BsPeople} from "react-icons/bs";

const MyTabsMobile = ({my_profile, following, liked_posts, saved_posts, followedby})=>
{
    const tabs = {
        myPosts: <div className={"flex justify-center items-center space-x-1 text-gray-900"}><FaBlogger size={25}/> <span className="text-gray-900 sm:text-xl text-sm">{my_profile?.my_posts_count}</span></div>,
        flow: <div className={"flex justify-center items-center space-x-1 text-gray-900"}><GiShadowFollower size={25}/> <span className="text-gray-900 sm:text-xl text-sm">{my_profile?.followedby_count}</span></div>,
        foll: <div className={"flex justify-center items-center space-x-1 text-gray-900"}> <BsPeople size={25}/> <span className="text-gray-900 sm:text-xl text-sm">{my_profile?.follow_count}</span></div>,
        like: <div className={"flex justify-center items-center space-x-1 text-gray-900"}><AiOutlineLike size={25}/> <span className="text-gray-900 sm:text-xl text-sm">{liked_posts?.length}</span></div>,
        sav: <div className={"flex justify-center items-center space-x-1 text-gray-900"}><GiSaveArrow size={25}/> <span className="text-gray-900 sm:text-xl text-sm">{saved_posts?.length}</span></div>,
    }
    const items = [
        {label: tabs?.myPosts, key:"1", children: <MyPosts />},
        {label: tabs?.flow, key:"2", children: <MyFollowers followedby={followedby} my_profile={my_profile}/>},
        {label: tabs?.foll, key:"3", children: <MyFollowing following={following}/>},
        {label: tabs?.like, key:"4", children: <MyLikes liked_posts={liked_posts}/>},
        {label: tabs?.sav, key:"5", children: <MySaved saved_posts={saved_posts}/>},
    ]
    return(
        <div>
            <Tabs key={items.key} items={items} size="middle" centered animated type="card" />
        </div>
    )
}
export default MyTabsMobile
