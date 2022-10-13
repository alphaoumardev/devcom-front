import {
    F_GET_FEED, S_GET_FEED, F_GET_FEEDS, S_GET_FEEDS, S_POST_FEED,
    F_POST_FEED, S_POST_REPLIES, F_POST_REPLIES, S_POST_LIKES,
    F_POST_LIKES, S_POST_SAVES, F_POST_SAVES
} from "../Types";
import axios from "axios";

const config = {
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('token')}`,
        "Accept": "application/json"
    }
}
export const getFeedAction = (name) => async (dispatch) =>
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
        else
        {
            await axios.get("/feeds/", ).then(res =>
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

export const postFeedAction = (title, topic, content, user) => async (dispatch) =>
{
    try
    {
        const body = JSON.stringify({title, topic, content, user})
        await axios.post(`feeds/`, body, config ).then(res =>
        {
            dispatch(
                {
                    type:S_POST_FEED,
                    payload: res.data
                })
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
            console.log(res.data)
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
