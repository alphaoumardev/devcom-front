import {F_GET_TOPICS, F_POST_TOPICS, S_GET_TOPICS, S_POST_TOPICS} from "../Types";
import axios from "axios";

const config = {
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('token')}`,
        "Accept": "application/json"
    }
}
export const getTopicsAction = () => async (dispatch) =>
{
    try
    {
        await axios.get("/topics/").then(res =>
        {
            dispatch(
                {
                    type:S_GET_TOPICS,
                    payload:res.data
                })
        })
    }
    catch (error)
    {
        dispatch(
            {
                type:F_GET_TOPICS,
                payload: "Something went wrong"
            })
    }
}
export const postTopicAction = (name) => async (dispatch) =>
{
    const body = JSON.stringify({name})
    try
    {
        await axios.post(`/topics/`, body, config).then(res =>
        {
            dispatch(
                {
                    type:S_POST_TOPICS,
                    payload:res.data
                })
            // console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch(
            {
                type:F_POST_TOPICS,
                payload: "Something went wrong"
            })
    }
}
