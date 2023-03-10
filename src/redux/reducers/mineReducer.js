import {
    F_FOLLOWING_ME, S_FOLLOWING_ME, S_MY_LIKES, F_MY_LIKES,
    S_MY_SAVINGS, F_MY_SAVINGS,
    S_I_FOLLOW, F_I_FOLLOW, F_DELETE_MY_POST, S_DELETE_MY_POST, S_EDIT_MY_POST, F_EDIT_MY_POST,
    F_EDIT_MY_PROFILE, S_EDIT_MY_PROFILE, S_HIS_PROFILE, F_HIS_PROFILE, S_USER_INFO, F_USER_INFO,
    S_USER_PROFILE, F_USER_PROFILE
} from '../Types'
export const getMyInfoReducer = (state={my_info: []}, action)=>
{
    switch (action.type)
    {
        case S_USER_INFO:
            return{
                ...state,
                my_info: action.payload
            }
        case F_USER_INFO:
            return{
                ...state,
                my_info: [],
                error:action.payload
            }
        default:
            return state
    }
}
export const getMyProfileReducer = (state={
    my_posts:[],
    followedby: [],
    following: [],
    liked_posts: [],
    saved_posts: [],}, action)=>
{
    switch (action.type)
    {
        case S_USER_PROFILE:
            return{
                ...state,
                my_posts: action.payload.my_posts,
                following: action.payload.following,
                followedby: action.payload.followedby,
                saved_posts: action.payload.saved_posts,
                liked_posts: action.payload.liked_posts,
            }
        case F_USER_PROFILE:
            return{
                ...state,
                my_posts: [],
                following: [],
                followedby: [],
                saved_posts: [],
                liked_posts: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const getprofileFollowingMeReducer = (state={followedby: []}, action)=>
{
    switch (action.type)
    {
        case S_FOLLOWING_ME:
            return{
                followedby: action.payload
            }
        case F_FOLLOWING_ME:
            return{
                followedby: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const getprofileIFollowReducer = (state={following: []}, action)=>
{
    switch (action.type)
    {
        case S_I_FOLLOW:
            return{
                following: action.payload
            }
        case F_I_FOLLOW:
            return{
                following: [],
                error:action.payload
            }
        default:
            return state
    }
}
export const getlikedPostsReducer = (state={liked_posts: []}, action)=>
{
    switch (action.type)
    {
        case S_MY_LIKES:
            return{
                liked_posts: action.payload
            }
        case F_MY_LIKES:
            return{
                liked_posts: [],
                error:action.payload
            }
        default:
            return state
    }
}


export const getsavedPostsReducer = (state={saved_posts: []}, action)=>
{
    switch (action.type)
    {
        case S_MY_SAVINGS:
            return{
                saved_posts: action.payload
            }
        case F_MY_SAVINGS:
            return{
                saved_posts: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const deleteMyPostReducer = (state={deleted: []}, action)=>
{
    switch (action.type)
    {
        case S_DELETE_MY_POST:
            return{
                deleted: action.payload
            }
        case F_DELETE_MY_POST:
            return{
                deleted: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const editMyPostReducer = (state={editedPost: []}, action)=>
{
    switch (action.type)
    {
        case S_EDIT_MY_POST:
            return{
                editedPost: action.payload
            }
        case F_EDIT_MY_POST:
            return{
                editedPost: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const editMyProfilleReducer = (state={editedProfile: []}, action)=>
{
    switch (action.type)
    {
        case S_EDIT_MY_PROFILE:
            return{
                editedProfile: action.payload
            }
        case F_EDIT_MY_PROFILE:
            return{
                editedProfile: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const getHisProfileReducer = (state={hisprofile: [], hisposts: [],
                                         hisfollowers: [], hisfollowing: []}, action)=>

{
    switch (action.type)
    {
        case S_HIS_PROFILE:
            return{
                ...state,
                hisprofile: action.payload.data,
                hisposts: action.payload.hisposts,
                hisfollowers: action.payload.hisfollowers,
                hisfollowing: action.payload.hisfollowing,
            }
        case F_HIS_PROFILE:
            return{
                ...state,
                hisProfile: [],
                hisposts: [],
                hisfollowers: [],
                hisfollowing: [],
                error:action.payload
            }
        default:
            return state
    }
}
