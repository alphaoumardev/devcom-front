import {
    F_GET_TRENDING, S_GET_TRENDING,
    S_GET_RECOMMENDED_PROFILES,F_GET_RECOMMENDED_PROFILES,
    S_FOLLOW,F_FOLLOW,
} from "../Types";
import axios from "axios";
import {getHisProfileAction, loadMyInfoAction} from "./mineAction";

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
        await axios.get("/api/trending/", config).then(res =>
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
        await axios.get("/api/recommanded-profiles/", config).then(res =>
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

export const followProfileAction = (id, his_id=null) => async (dispatch) =>
{
    const body = JSON.stringify({})
    try
    {
        await axios.post(`/api/follow/${id}`, body, config).then(res =>
        {
            dispatch(
                {
                    type: S_FOLLOW,
                    payload: res.data
                })
            // console.log(res.data)
            dispatch(getRecommadedProfilesAction())
            dispatch(loadMyInfoAction())
            if (his_id)
            {
                dispatch(getHisProfileAction(his_id))
            }
        })

    }
    catch (error)
    {
        dispatch(
            {
                type: F_FOLLOW,
                payload: error
            })
        // console.log(error)
    }
}

