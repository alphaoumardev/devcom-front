import {combineReducers} from "redux";
import {getTopicCountReducer, getTopicsReducer} from './topicsReducer'
import {getFeedsReducer, getOneFeedReducer,postFeedReducer} from "./feedReducer";
import {authReducer} from "./authReducer";
import {getRepliesReducer} from "./repliesReducer";

export default combineReducers(
    {
        getTopicsReducer,
        getFeedsReducer,
        getOneFeedReducer,
        getTopicCountReducer,
        postFeedReducer,
        getRepliesReducer,

        authReducer,
    }
)

