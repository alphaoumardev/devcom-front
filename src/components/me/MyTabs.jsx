import {Tabs} from 'antd';
import MyPosts from "../mytabs/MyPosts";
import MyFollowers from "../mytabs/MyFollowers";
import MyFollowing from "../mytabs/MyFollowing";
import MyLikes from "../mytabs/MyLikes";
import MySaved from "../mytabs/MySaved";
const MyTabs = ({my_profile, following, liked_posts, saved_posts, followedby})=>
{
    const tabs = {
        myPosts: <div>Posts (<span className="text-blue-500">{my_profile?.my_posts_count}</span>)</div>,
        flow: <div>Followers (<span className="text-blue-500">{my_profile?.followedby_count}</span>)</div>,
        foll: <div> Following (<span className="text-blue-500">{my_profile?.follow_count}</span>)</div>,
        like: <div>Liked (<span className="text-blue-500">{liked_posts?.length}</span>)</div>,
        sav: <div>Saved (<span className="text-blue-500">{saved_posts?.length}</span>)</div>,
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
            <Tabs key={items.key} items={items} centered size="large" animated/>
        </div>
    )
}
export default MyTabs
