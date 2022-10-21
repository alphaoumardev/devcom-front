import {combineReducers} from "redux";
import {getTopicCountReducer, getTopicsReducer, postTopicReducer} from './topicsReducer'
import {getFeedsReducer, getOneFeedReducer, postFeedReducer, postLikeReducer, postRepliesReducer, postSavesReducer}
    from "./feedReducer";
import {authReducer} from "./authReducer";
import {getTrendingReducer} from "./activitiesReducer";

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
            postSavesReducer,
            postTopicReducer,
            getTrendingReducer,

    }
)

