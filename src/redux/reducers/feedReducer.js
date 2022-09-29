import {
     F_GET_FEED, S_GET_FEED,  F_GET_FEEDS, S_GET_FEEDS
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
export const getOneFeedReducer = (state={feed: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_FEED:
            return{
                feed: action.payload
            }
        case F_GET_FEED:
            return{
                feed: [],
                error:action.payload
            }
        default:
            return state
    }
}

export const getFeedByTopicReducer = (state={feed: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_FEED:
            return{
                feed: action.payload
            }
        case F_GET_FEED:
            return{
                feed: [],
                error:action.payload
            }
        default:
            return state
    }
}
