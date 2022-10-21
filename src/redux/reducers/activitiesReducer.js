import {
    S_GET_TRENDING,
    F_GET_TRENDING,
} from '../Types'


export const getTrendingReducer = (state={trending_feed: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_TRENDING:
            return{
                trending_feed: action.payload
            }
        case F_GET_TRENDING:
            return{
                trending_feed: [],
                error:action.payload
            }
        default:
            return state
    }
}
