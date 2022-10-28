import {combineReducers} from "redux";
import {getTopicCountReducer, getTopicsReducer, postTopicReducer} from './topicsReducer'
import {getFeedsReducer, getOneFeedReducer, postFeedReducer, postLikeReducer, postRepliesReducer, postSavesReducer}
    from "./feedReducer";
import {authReducer, getMyInfoReducer} from "./authReducer";
import {getRecommandedProfilesReducer, getTrendingReducer} from "./activitiesReducer";

export default combineReducers(
    {
            authReducer,
            getMyInfoReducer,

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
            getRecommandedProfilesReducer,


    }
)

