import {
    F_GET_TRENDING, S_GET_TRENDING
} from "../Types";
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
        await axios.get("/trending/").then(res =>
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
                payload: "Something went wrong"
            })
    }
}

