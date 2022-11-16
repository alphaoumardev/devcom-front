import {
    F_GET_FEED, S_GET_FEED, F_GET_FEEDS, S_GET_FEEDS, S_POST_FEED,
    F_POST_FEED, S_POST_REPLIES, F_POST_REPLIES, S_POST_LIKES,
    F_POST_LIKES, S_POST_SAVES, F_POST_SAVES
} from "../Types";
import axios from "axios";
import {loadMyInfoAction} from "./mineAction";

const config = {
    headers: {
        "Content-Type": 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`,
        "Accept": "application/json"
    }
}
const fe = {
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
            await axios.get(`/feedbytopic/${name}`, ).then(res =>
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
            await axios.get(`/feeds/?query=${query}`, ).then(res =>
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
            await axios.get(`/feeds/`, ).then(res =>
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
    }
}

export const getOneFeedAction = (id) => async (dispatch) =>
{
    try
    {
        await axios.get(`/feed/${id}` ).then(res =>
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
        await axios.post(`feeds/`, image, fe ).then(res =>
        {
            dispatch(
                {
                    type:S_POST_FEED,
                    payload: res.data
                })
            // console.log(res.data)
        })
        getFeedAction(null, null)
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

export const postRepliesAction = (post, comment, commentator) => async (dispatch) =>
{
    try
    {
        const body = JSON.stringify({ post, comment, commentator})
        await axios.post(`/feed/${post}`,body, config ).then(res =>
        {
            dispatch(
                {
                    type:S_POST_REPLIES,
                    payload:res.data
                })
            // console.log(res.data)

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

export const postLikeAction = (id) => async (dispatch) =>
{
    try
    {
        const body = JSON.stringify({})
        await axios.post(`/likes/${id}`, body, config ).then(res =>
        {
            dispatch(
                {
                    type:S_POST_LIKES,
                    payload:res.data
                })
            dispatch(getFeedAction(null, null))
            dispatch(getOneFeedAction(id))
            dispatch(loadMyInfoAction())
        })
    }
    catch (error)
    {
        dispatch(
            {
                type:F_POST_LIKES,
                payload: "Something went wrong"
            })
    }
}
export const postSavesAction = (id) => async (dispatch) =>
{
    try
    {
        const body = JSON.stringify({})
        await axios.post(`/saves/${id}`, body, config ).then(res =>
        {
            dispatch(
                {
                    type:S_POST_SAVES,
                    payload:res.data
                })
            dispatch(getFeedAction(null, null))
            dispatch(getOneFeedAction(id))
            dispatch(loadMyInfoAction())

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
