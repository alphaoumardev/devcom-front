import {F_GET_FEED, S_GET_FEED, F_GET_FEEDS, S_GET_FEEDS,
    S_GET_FEED_BY_TOPIC, F_GET_FEED_BY_TOPIC
} from "../Types";
import axios from "axios";

const config = {
    // "Content-Type": "application/json",
    // 'Authorization': ``,
    // "Accept": "application/json"
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

export const getFeedByTopicAction = (id) => async (dispatch) =>
{
    try
    {
        await axios.get(`/feedbytopic/${id}` ).then(res =>
        {
            dispatch(
                {
                    type:S_GET_FEED_BY_TOPIC,
                    payload: res.data
                })
        })
    }
    catch (error)
    {
        dispatch(
            {
                type:F_GET_FEED_BY_TOPIC,
                payload: "Something went wrong"
            })
    }
}
