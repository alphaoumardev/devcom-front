import {combineReducers} from "redux";
import {getTopicCountReducer, getTopicsReducer} from './topicsReducer'
import {getFeedsReducer, getOneFeedReducer} from "./feedReducer";

export default combineReducers(
    {
        getTopicsReducer,
        getFeedsReducer,
        getOneFeedReducer,
        getTopicCountReducer,
    }
)
 
