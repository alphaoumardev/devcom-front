import {
    F_GET_FEED, S_GET_FEED, F_GET_FEEDS, S_GET_FEEDS, F_POST_FEED, S_POST_FEED,
    S_POST_LIKES, F_POST_LIKES, S_POST_SAVES, F_POST_SAVES
} from '../Types'


export const getFeedsReducer = (state={feeds: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_FEEDS:
            return{
                feeds: action.payload
            }
        case F_GET_FEEDS:
            return{
                feeds: [],
                error:action.payload
            }
        default:
            return state
    }
}
export const getOneFeedReducer = (state={data: [], comments: [], error: [] }, action)=>
{
    switch (action.type)
    {
        case S_GET_FEED:
            return{
                data: action.payload.data,
                comments: action.payload.comments
            }
        case F_GET_FEED:
            return{
                data: [],
                comments: [],
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
