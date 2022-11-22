// import thunk from "redux-thunk";
// import {applyMiddleware,} from "@reduxjs/toolkit";
// import {composeWithDevTools} from "redux-devtools-extension";
// import { legacy_createStore as createStore} from 'redux'
// import rootReducer from './reducers'

// const middleware = [thunk]
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
// export default store
// //
import { configureStore } from '@reduxjs/toolkit'
import {authReducer} from "./reducers/authReducer";
import {
    deleteMyPostReducer, editMyPostReducer, editMyProfilleReducer, getHisProfileReducer,
    getlikedPostsReducer,
    getMyInfoReducer,
    getprofileFollowingMeReducer, getprofileIFollowReducer,
    getsavedPostsReducer
} from "./reducers/mineReducer";
import {getTopicCountReducer, getTopicsReducer, postTopicReducer} from "./reducers/topicsReducer";
import {
    getFeedsReducer,
    getOneFeedReducer,
    postFeedReducer, postLikeCommentReducer,
    postLikeReducer,
    postRepliesReducer, postSavesReducer
} from "./reducers/feedReducer";
import {followProfileReducer, getRecommendedProfilesReducer, getTrendingReducer} from "./reducers/activitiesReducer";
import {deleteMyNotificationReducer, getNotificationsReducer} from "./reducers/notificationReducer";

export const store = configureStore({
    reducer: {
        authReducer:authReducer,
        getMyInfoReducer:getMyInfoReducer,

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
})
