import {F_FOLLOW, F_GET_RECOMMENDED_PROFILES, F_GET_TRENDING, S_FOLLOW, S_GET_RECOMMENDED_PROFILES, S_GET_TRENDING} from '../Types'

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
export const getRecommendedProfilesReducer = (state={recommanded: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_RECOMMENDED_PROFILES:
            return{
                recommanded: action.payload
            }
        case F_GET_RECOMMENDED_PROFILES:
            return{
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
                follow: action.payload
            }
        case F_FOLLOW:
            return{
                follow: [],
                error:action.payload
            }
        default:
            return state
    }
}
