import {
    S_GET_TOPICS,
    F_GET_TOPICS,
} from '../Types'


export const getTopicsReducer = (state={topics: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_TOPICS:
            return{
                topics: action.payload
            }
        case F_GET_TOPICS:
            return{
                topics: [],
                error:action.payload
            }
        default:
            return state
    }
}
