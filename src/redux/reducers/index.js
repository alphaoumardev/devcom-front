import {combineReducers} from "redux";
import {getTopicCountReducer, getTopicsReducer} from './topicsReducer'
import {getFeedsReducer, getOneFeedReducer, postFeedReducer, postLikeReducer, postRepliesReducer, postSavesReducer}
    from "./feedReducer";
import {authReducer} from "./authReducer";

export default combineReducers(
    {
            authReducer,

            getTopicsReducer,
            getFeedsReducer,
            getOneFeedReducer,
            getTopicCountReducer,
            postFeedReducer,
            postRepliesReducer,
            postLikeReducer,
            postSavesReducer
    }
)

