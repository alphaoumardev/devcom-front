import axios from "axios";
import {F_FOLLOWING_ME, S_FOLLOWING_ME,
    S_MY_LIKES, F_MY_LIKES,
    S_MY_SAVINGS, F_MY_SAVINGS,
    S_I_FOLLOW, F_I_FOLLOW
} from "../Types";

const config = {
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('token')}`,
        "Accept": "application/json"
    }
}

export const profileFollowingMeAction = () => async (dispatch) =>
{
    try
    {
        await axios.get(`/following-me/`, config).then(res =>
        {
            dispatch(
                {
                    type: S_FOLLOWING_ME,
                    payload: res.data
                })
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_FOLLOWING_ME,
                payload: error
            })
    }
}

export const profileIFollowAction = () => async (dispatch) =>
{
    try
    {
        await axios.get(`/i-follow/`, config).then(res =>
        {
            dispatch(
                {
                    type: S_I_FOLLOW,
                    payload: res.data
                })
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_I_FOLLOW,
                payload: error
            })
    }
}
export const likedPostsAction = () => async (dispatch) =>
{
    try
    {
        await axios.get(`/my-likes/`, config).then(res =>
        {
            dispatch(
                {
                    type: S_MY_LIKES,
                    payload: res.data
                })
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_MY_LIKES,
                payload: error
            })
    }
}

export const getSavedPostsAction = () => async (dispatch) =>
{
    try
    {
        await axios.get(`/my-savings/`, config).then(res =>
        {
            dispatch(
                {
                    type: S_MY_SAVINGS,
                    payload: res.data
                })
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_MY_SAVINGS,
                payload: error
            })
    }
}
