import axios from "axios";
import {
    F_FOLLOWING_ME, S_FOLLOWING_ME,
    S_MY_LIKES, F_MY_LIKES,
    S_MY_SAVINGS, F_MY_SAVINGS,
    S_I_FOLLOW, F_I_FOLLOW, S_DELETE_MY_POST, F_DELETE_MY_POST, F_EDIT_MY_POST,S_EDIT_MY_POST,
    S_EDIT_MY_PROFILE, F_EDIT_MY_PROFILE, S_HIS_PROFILE,  F_HIS_PROFILE,
} from "../Types";

const config = {
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('token')}`,
        "Accept": "application/json"
    }
}
const fig = {
    headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`,
        "Content-Type": 'multipart/form-data',
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
        await axios.patch(`/edit-my-post/${id}`, editedPost,fig).then(res =>
        {
            dispatch(
                {
                    type: S_EDIT_MY_POST,
                    payload: res.data
                })
            // console.log(res.data)
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

export const editMyProfileAction = (editedProfile) => async (dispatch) =>
{
    try
    {
        await axios.patch(`/my-profile/`, editedProfile,fig).then(res =>
        {
            dispatch(
                {
                    type: S_EDIT_MY_PROFILE,
                    payload: res.data
                })
            // console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_EDIT_MY_PROFILE,
                payload: error
            })
    }
}

export const getHisProfileAction = (id) => async (dispatch) =>
{
    try
    {
        await axios.get(`/his-profile/${id}`, config).then(res =>
        {
            dispatch(
                {
                    type: S_HIS_PROFILE,
                    payload: res.data
                })
            // console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_HIS_PROFILE,
                payload: error
            })
    }
}
