import {
    S_GET_TRENDING,
    F_GET_TRENDING,
    S_GET_RECOMMENDED_PROFILES,
    F_GET_RECOMMENDED_PROFILES,
    S_FOLLOW,
    F_FOLLOW,
} from '../Types'

export const getTrendingReducer = (state={trending_feed: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_TRENDING:
            return{
                ...state,
                trending_feed: action.payload
            }
        case F_GET_TRENDING:
            return{
                ...state,
                trending_feed: [],
                error:action.payload
            }
        default:
            return state
    }
}
export const getRecommendedProfilesReducer = (state={recommanded: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_RECOMMENDED_PROFILES:
            return{
                ...state,
                recommanded: action.payload
            }
        case F_GET_RECOMMENDED_PROFILES:
            return{
                ...state,
                recommanded: [],
                error:action.payload
            }
        default:
            return state
    }
}
export const followProfileReducer = (state={follow: []}, action)=>
{
    switch (action.type)
    {
        case S_FOLLOW:
            return{
                ...state,
                follow: action.payload
            }
        case F_FOLLOW:
            return{
                ...state,
                follow: [],
                error:action.payload
            }
        default:
            return state
    }
}
