import axios from "axios";
import {
    F_FOLLOWING_ME, S_FOLLOWING_ME,
    S_MY_LIKES, F_MY_LIKES,
    S_MY_SAVINGS, F_MY_SAVINGS,
    S_I_FOLLOW, F_I_FOLLOW, S_DELETE_MY_POST, F_DELETE_MY_POST, F_EDIT_MY_POST,S_EDIT_MY_POST,
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

export const editMyPostAction = (id, editedPost) => async (dispatch) =>
{
    try
    {
        // const body = JSON.stringify({editedPost})
        await axios.patch(`/edit-my-post/${id}`, editedPost,config).then(res =>
        {
            dispatch(
                {
                    type: S_EDIT_MY_POST,
                    payload: res.data
                })
            console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_EDIT_MY_POST,
                payload: error
            })
    }
}

export const deleteMyPostAction = (id) => async (dispatch) =>
{
    try
    {
        await axios.delete(`/edit-my-post/${id}`, config).then(res =>
        {
            dispatch(
                {
                    type: S_DELETE_MY_POST,
                    payload: res.data
                })
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_DELETE_MY_POST,
                payload: error
            })
    }
}
