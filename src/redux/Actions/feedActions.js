import {
    F_GET_FEED, S_GET_FEED, F_GET_FEEDS, S_GET_FEEDS, S_POST_FEED,
    F_POST_FEED, S_POST_REPLIES, F_POST_REPLIES, S_POST_LIKES,
    F_POST_LIKES, S_POST_SAVES, F_POST_SAVES, S_POST_LIKE_COMMENT, F_POST_LIKE_COMMENT,
} from "../Types";
import axios from "axios";
import {getHisProfileAction, loadMyInfoAction} from "./mineAction";

const config = {
    headers: {
        "Content-Type": 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`,
        "Accept": "application/json"
    }
}
const simpleToken = {
    headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`,
        "Content-Type": 'multipart/form-data',
    }
}
export const getFeedAction = (name, query) => async (dispatch) =>
{
    try
    {
        if(name)
        {
            await axios.get(`/api/feedbytopic/${name}`, config).then(res =>
            {
                dispatch(
                    {
                        type:S_GET_FEEDS,
                        payload:res.data
                    })
            })
        }
        else if(query)
        {
            await axios.get(`/api/feeds/?query=${query}`, config).then(res =>
            {
                dispatch(
                    {
                        type:S_GET_FEEDS,
                        payload:res.data
                    })
            })
        }
        else
        {
            await axios.get(`/api/feeds/`, config).then(res =>
            {
                dispatch(
                    {
                        type:S_GET_FEEDS,
                        payload:res.data
                    })
            })
        }

    }
    catch (error)
    {
        dispatch(
            {
                type:F_GET_FEEDS,
                payload: "Something went wrong"
            })
        // console.log(error)
    }
}

export const getOneFeedAction = (id) => async (dispatch) =>
{
    try
    {
        await axios.get(`/api/feed/${id}`, config ).then(res =>
        {
            dispatch(
                {
                    type:S_GET_FEED,
                    payload: res.data
                })
            // console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch(
            {
                type:F_GET_FEED,
                payload: "Something went wrong"
            })
    }
}

export const postFeedAction = (image) => async (dispatch) =>
{
    try
    {
        await axios.post(`/api/feeds/`, image, simpleToken ).then(res =>
        {
            dispatch(
                {
                    type:S_POST_FEED,
                    payload: res.data
                })
            // console.log(res.data)
            dispatch(getFeedAction(null, null))
        })
    }
    catch (error)
    {
        dispatch(
            {
                type:F_POST_FEED,
                payload: "Something went wrong"
            })
    }
}

export const postRepliesAction = (post, comment, commentator, parent) => async (dispatch) =>
{
    try
    {
        const body = JSON.stringify({ post, comment, commentator, parent})
        await axios.post(`/api/feed/${post}`,body, config ).then(res =>
        {
            dispatch(
                {
                    type:S_POST_REPLIES,
                    payload:res.data
                })
            // console.log(res.data)
            dispatch(getFeedAction(null, null))
            dispatch(getOneFeedAction(post))
        })
    }
    catch (error)
    {
        dispatch(
            {
                type:F_POST_REPLIES,
                payload: "Something went wrong"
            })
    }
}

export const postLikeAction = (id, his_id=null) => async (dispatch) =>
{
    try
    {
        const body = JSON.stringify({})
        await axios.post(`/api/likes/${id}`, body, config ).then(res =>
        {
            dispatch(
                {
                    type:S_POST_LIKES,
                    payload:res.data
                })
            // console.log(res.data)
            dispatch(getFeedAction(null, null))
            dispatch(loadMyInfoAction())
            if(id !==null)
            {
                dispatch(getOneFeedAction(id))
            }
            if(his_id)
            {
                dispatch(getHisProfileAction(his_id))
            }
        })
    }
    catch (error)
    {
        dispatch(
            {
                type:F_POST_LIKES,
                payload: "Something went wrong"
            })
        // console.log(error)
    }
}
export const postSavesAction = (id, his_id=null) => async (dispatch) =>
{
    try
    {
        const body = JSON.stringify({})
        await axios.post(`/api/saves/${id}`, body, config ).then(res =>
        {
            dispatch(
                {
                    type:S_POST_SAVES,
                    payload:res.data
                })
            dispatch(getFeedAction(null, null))
            dispatch(loadMyInfoAction())
            if(id)
            {
                dispatch(getOneFeedAction(id))
            }
            if(his_id !==null)
            {
                dispatch(getHisProfileAction(his_id))
            }

        })
    }
    catch (error)
    {
        dispatch(
            {
                type:F_POST_SAVES,
                payload: "Something went wrong"
            })
    }
}


export const postLikeCommentsAction = (index, id) => async (dispatch) =>
{
    try
    {
        const body = JSON.stringify({})
        await axios.post(`/api/like-comment/${index}`, body, config ).then(res =>
        {
            dispatch(
                {
                    type:S_POST_LIKE_COMMENT,
                    payload:res.data
                })
            dispatch(getOneFeedAction(id))
            dispatch(loadMyInfoAction())
        })
    }
    catch (error)
    {
        dispatch(
            {
                type:F_POST_LIKE_COMMENT,
                payload: "Something went wrong"
            })
        // console.log(error)
    }
}
