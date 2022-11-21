import {combineReducers} from "redux";
import {getTopicCountReducer, getTopicsReducer, postTopicReducer} from './topicsReducer'
import {
    getFeedsReducer,
    getOneFeedReducer,
    postFeedReducer,
    postLikeCommentReducer,
    postLikeReducer,
    postRepliesReducer,
    postSavesReducer
}
    from "./feedReducer";
import {authReducer,} from "./authReducer";
import {
    followProfileReducer,
    getRecommendedProfilesReducer,
    getTrendingReducer,
} from "./activitiesReducer";
import {
    deleteMyPostReducer, editMyPostReducer, editMyProfilleReducer, getHisProfileReducer,
    getlikedPostsReducer,
    getprofileFollowingMeReducer,
    getprofileIFollowReducer,
    getsavedPostsReducer,
    getMyInfoReducer,
} from "./mineReducer";
import {deleteMyNotificationReducer, getNotificationsReducer} from "./notificationReducer";

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
        editMyProfilleReducer,
        getHisProfileReducer,
        postLikeCommentReducer,

        getNotificationsReducer,
        deleteMyNotificationReducer,

    }
)

