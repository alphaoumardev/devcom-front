import {F_FOLLOW, F_GET_RECOMMENDED_PROFILES, F_GET_TRENDING, S_FOLLOW, S_GET_RECOMMENDED_PROFILES, S_GET_TRENDING,} from "../Types";
import axios from "axios";

const config = {
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('token')}`,
        "Accept": "application/json"
    }
}
export const getTrendingAction = () => async (dispatch) =>
{
    try
    {
        await axios.get("/trending/", config).then(res =>
        {
            dispatch(
                {
                    type: S_GET_TRENDING,
                    payload: res.data
                })
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_GET_TRENDING,
                payload: error
            })
    }
}
export const getRecommadedProfilesAction = () => async (dispatch) =>
{
    try
    {
        await axios.get("/recommanded-profiles/", config).then(res =>
        {
            dispatch(
                {
                    type: S_GET_RECOMMENDED_PROFILES,
                    payload: res.data
                })
            // console.log(reds.data)
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_GET_RECOMMENDED_PROFILES,
                payload: error
            })
    }
}

export const followProfileAction = (id) => async (dispatch) =>
{
    const body = JSON.stringify({})
    try
    {
        await axios.post(`/follow/${id}`, body, config).then(res =>
        {
            dispatch(
                {
                    type: S_FOLLOW,
                    payload: res.data
                })
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_FOLLOW,
                payload: error
            })
    }
}
