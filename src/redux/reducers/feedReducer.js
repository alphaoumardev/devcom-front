import {
    F_GET_FEED, S_GET_FEED, F_GET_FEEDS, S_GET_FEEDS, F_POST_FEED, S_POST_FEED,
    S_POST_LIKES, F_POST_LIKES, S_POST_SAVES, F_POST_SAVES, F_POST_LIKE_COMMENT, S_POST_LIKE_COMMENT
} from '../Types'

export const getFeedsReducer = (state={feeds: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_FEEDS:
            return{
                ...state,
                feeds: [...state.feeds, ...action.payload]
            }
        case F_GET_FEEDS:
            return{
                ...state,
                feeds: [],
                error:action.payload
            }
        default:
            return state
    }
}
export const getOneFeedReducer = (state={data: [], recent_posts: [], error: [] }, action)=>
{
    switch (action.type)
    {
        case S_GET_FEED:
            return{
                ...state,
                data: action.payload.data,
                recent_posts: action.payload.recent_posts
            }
        case F_GET_FEED:
            return{
                ...state,
                data: [],
                recent_posts: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const postFeedReducer = (state={feed: []}, action)=>
{
    switch (action.type)
    {
        case S_POST_FEED:
            return{
                ...state,
                feed: action.payload
            }
        case F_POST_FEED:
            return{
                ...state,
                feed: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const postRepliesReducer = (state={comment: []}, action)=>
{
    switch (action.type)
    {
        case S_POST_FEED:
            return{
                ...state,
                comment: action.payload
            }
        case F_POST_FEED:
            return{
                ...state,
                comment: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const postLikeReducer = (state={liked:false}, action)=>
{
    switch (action.type)
    {
        case S_POST_LIKES:
            return{
                ...state,
                liked: action.payload
            }
        case F_POST_LIKES:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}
export const postSavesReducer = (state={saved:false}, action)=>
{
    switch (action.type)
    {
        case S_POST_SAVES:
            return{
                ...state,
                saved: action.payload
            }
        case F_POST_SAVES:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}

export const postLikeCommentReducer = (state={comment_like:false}, action)=>
{
    switch (action.type)
    {
        case S_POST_LIKE_COMMENT:
            return{
                ...state,
                comment_like: action.payload
            }
        case F_POST_LIKE_COMMENT:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}
