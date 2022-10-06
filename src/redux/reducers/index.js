import {combineReducers} from "redux";
import {getTopicCountReducer, getTopicsReducer} from './topicsReducer'
import {getFeedsReducer, getOneFeedReducer} from "./feedReducer";
import {authReducer} from "./authReducer";

export default combineReducers(
    {
        getTopicsReducer,
        getFeedsReducer,
        getOneFeedReducer,
        getTopicCountReducer,

        authReducer
    }
)

