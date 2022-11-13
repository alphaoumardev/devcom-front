import {
    S_GET_TOPICS,
    F_GET_TOPICS,
    F_GET_TOPIC_COUNT,
    S_GET_TOPIC_COUNT,
    S_POST_TOPICS,F_POST_TOPICS
} from '../Types'

export const getTopicsReducer = (state={topics: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_TOPICS:
            return{
                ...state,
                topics: action.payload
            }
        case F_GET_TOPICS:
            return{
                ...state,
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
                ...state,
                topics: action.payload
            }
        case F_GET_TOPIC_COUNT:
            return{
                ...state,
                topics: [],
                error:action.payload
            }
        default:
            return state
    }
}
export const postTopicReducer = (state={topic: []}, action)=>
{
    switch (action.type)
    {
        case S_POST_TOPICS:
            return{
                ...state,
                topics: action.payload
            }
        case F_POST_TOPICS:
            return{
                ...state,
                topics: [],
                error:action.payload
            }
        default:
            return state
    }
}
