import {
    S_GET_REPLIES, F_GET_REPLIES
} from '../Types'


export const getRepliesReducer = (state={replies: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_REPLIES:
            return{
                replies: action.payload
            }
        case F_GET_REPLIES:
            return{
                replies: [],
                error:action.payload
            }
        default:
            return state
    }
}
export const getOneFeedReducer = (state={replies: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_FEED:
            return{
                replies: action.payload
            }
        case F_GET_FEED:
            return{
                replies: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const postFeedReducer = (state={replies: []}, action)=>
{
    switch (action.type)
    {
        case S_POST_FEED:
            return{
                replies: action.payload
            }
        case F_POST_FEED:
            return{
                ...state,
                replies: [],
                error:action.payload
            }
        default:
            return state
    }
}
