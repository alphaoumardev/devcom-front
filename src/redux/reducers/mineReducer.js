import {
     F_FOLLOWING_ME,S_FOLLOWING_ME, S_MY_LIKES, F_MY_LIKES,
    S_MY_SAVINGS, F_MY_SAVINGS,
    S_I_FOLLOW, F_I_FOLLOW
} from '../Types'

export const getprofileFollowingMeReducer = (state={following: []}, action)=>
{
    switch (action.type)
    {
        case S_FOLLOWING_ME:
            return{
                following: action.payload
            }
        case F_FOLLOWING_ME:
            return{
                following: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const getprofileIFollowReducer = (state={followers: []}, action)=>
{
    switch (action.type)
    {
        case S_I_FOLLOW:
            return{
                followers: action.payload
            }
        case F_I_FOLLOW:
            return{
                followers: [],
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
