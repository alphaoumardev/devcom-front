import {
    S_GET_TOPICS,
    F_GET_TOPICS,
    F_GET_TOPIC_COUNT,
    S_GET_TOPIC_COUNT
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

export const getTopicCountReducer = (state={topic: [], count: 0}, action)=>
{
    switch (action.type)
    {
        case S_GET_TOPIC_COUNT:
            return{
                topics: action.payload
            }
        case F_GET_TOPIC_COUNT:
            return{
                topics: [],
                error:action.payload
            }
        default:
            return state
    }
}
