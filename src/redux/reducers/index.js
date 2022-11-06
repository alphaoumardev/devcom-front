import {combineReducers} from "redux";
import {getTopicCountReducer, getTopicsReducer, postTopicReducer} from './topicsReducer'
import {getFeedsReducer, getOneFeedReducer, postFeedReducer, postLikeReducer, postRepliesReducer, postSavesReducer}
    from "./feedReducer";
import {authReducer, getMyInfoReducer} from "./authReducer";
import {
    followProfileReducer,
    getRecommendedProfilesReducer,
    getTrendingReducer,
} from "./activitiesReducer";
import {
    deleteMyPostReducer, editMyPostReducer,
    getlikedPostsReducer,
    getprofileFollowingMeReducer,
    getprofileIFollowReducer,
    getsavedPostsReducer
} from "./mineReducer";

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
        getRecommendedProfilesReducer,
        followProfileReducer,
        getprofileFollowingMeReducer,
        getlikedPostsReducer,
        getsavedPostsReducer,
        getprofileIFollowReducer,
        deleteMyPostReducer,
        editMyPostReducer,

    }
)

