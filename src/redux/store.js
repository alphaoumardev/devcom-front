// import {applyMiddleware,} from "@reduxjs/toolkit";
// import {composeWithDevTools} from "redux-devtools-extension";
// import { legacy_createStore as createStore} from 'redux'
// import rootReducer from './reducers'
//
// const middleware = [thunk]
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
// export default store
import thunk from "redux-thunk";
import {configureStore,} from '@reduxjs/toolkit'
import {authReducer} from "./reducers/authReducer";
import {
    deleteMyPostReducer, editMyPostReducer, editMyProfilleReducer, getHisProfileReducer,
    getlikedPostsReducer,
    getMyInfoReducer, getMyProfileReducer,
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
        getMyProfileReducer:getMyProfileReducer,

        getTopicsReducer:getTopicsReducer,
        getFeedsReducer:getFeedsReducer,
        getOneFeedReducer:getOneFeedReducer,
        getTopicCountReducer:getTopicCountReducer,
        postFeedReducer:postFeedReducer,
        postRepliesReducer:postRepliesReducer,
        postLikeReducer:postLikeReducer,
        postSavesReducer:postSavesReducer,
        postTopicReducer:postTopicReducer,
        getTrendingReducer:getTrendingReducer,
        getRecommendedProfilesReducer:getRecommendedProfilesReducer,
        followProfileReducer:followProfileReducer,
        getprofileFollowingMeReducer:getprofileFollowingMeReducer,
        getlikedPostsReducer:getlikedPostsReducer,
        getsavedPostsReducer:getsavedPostsReducer,
        getprofileIFollowReducer:getprofileIFollowReducer,
        deleteMyPostReducer:deleteMyPostReducer,
        editMyPostReducer:editMyPostReducer,
        editMyProfilleReducer:editMyProfilleReducer,
        getHisProfileReducer:getHisProfileReducer,
        postLikeCommentReducer:postLikeCommentReducer,
        getNotificationsReducer:getNotificationsReducer,
        deleteMyNotificationReducer:deleteMyNotificationReducer,
    },

    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck:false,
    }), thunk]
})
