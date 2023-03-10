import axios from "axios";
import {
    F_FOLLOWING_ME, S_FOLLOWING_ME,
    S_MY_LIKES, F_MY_LIKES,
    S_MY_SAVINGS, F_MY_SAVINGS,
    S_I_FOLLOW, F_I_FOLLOW, S_DELETE_MY_POST, F_DELETE_MY_POST, F_EDIT_MY_POST, S_EDIT_MY_POST,
    S_EDIT_MY_PROFILE, F_EDIT_MY_PROFILE, S_HIS_PROFILE, F_HIS_PROFILE, S_USER_INFO, F_USER_INFO,
    S_USER_PROFILE, F_USER_PROFILE
} from "../Types";
import {getFeedAction} from "./feedActions";

const header_config = {
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

const localToken = localStorage.getItem('token')
export const loadMyInfoAction = () => async dispatch =>
{
    if(localToken)
    {
        const header_config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`,
                'Accept': 'application/json'
            }
        }
        try
        {
            await axios.get('/api/my-info/', header_config).then((res)=>
            {
                dispatch(
                    {
                        type: S_USER_INFO,
                        payload: res.data,
                    })
                // console.log(res.data)
            })
        }
        catch (error)
        {
            dispatch({
                type: F_USER_INFO,
                payload: error
            })
            // console.log(error)
        }
    }
}

export const loadMyProfileAction = () => async dispatch =>
{
    if(localToken)
    {
        const header_config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`,
                'Accept': 'application/json'
            }
        }
        try
        {
            await axios.get('/api/my-profile/', header_config).then((res)=>
            {
                dispatch(
                    {
                        type: S_USER_PROFILE,
                        payload: res.data,
                    })
                // console.log(res.data)
            })
        }
        catch (error)
        {
            dispatch({
                type: F_USER_PROFILE,
                payload: error
            })
            // console.log(error)
        }
    }
}

export const editMyPostAction = (id, editedPost) => async (dispatch) =>
{
    try
    {
        await axios.patch(`/api/edit-my-post/${id}`, editedPost,fig).then(res =>
        {
            dispatch(
                {
                    type: S_EDIT_MY_POST,
                    payload: res.data
                })
            // console.log(res.data)
            dispatch(getFeedAction(null, null))
            dispatch(loadMyInfoAction())
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
        await axios.delete(`/api/edit-my-post/${id}`, header_config).then(res =>
        {
            dispatch(
                {
                    type: S_DELETE_MY_POST,
                    payload: res.data
                })
            dispatch(loadMyInfoAction())
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
        await axios.patch(`/api/my-profile/`, editedProfile,fig).then(res =>
        {
            dispatch(
                {
                    type: S_EDIT_MY_PROFILE,
                    payload: res.data
                })
            // console.log(res.data)
            dispatch(loadMyInfoAction())
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
        await axios.get(`/api/his-profile/${id}`, header_config).then(res =>
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

export const profileIFollowAction = () => async (dispatch) =>
{
    try
    {
        await axios.get(`/api/i-follow/`, header_config).then(res =>
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
        await axios.get(`/api/my-likes/`, header_config).then(res =>
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
        await axios.get(`/api/my-savings/`, header_config).then(res =>
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

export const profileFollowingMeAction = () => async (dispatch) =>
{
    try
    {
        await axios.get(`/api/followedby/`, header_config).then(res =>
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
