import {F_GET_REPLIES, S_GET_REPLIES
} from "../Types";
import axios from "axios";

const config = {
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('token')}`,
        "Accept": "application/json"
    }
}
export const getFeedAction = (id) => async (dispatch) =>
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
