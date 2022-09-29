import {F_GET_TOPICS, S_GET_TOPICS} from "../Types";
import axios from "axios";

const config = {
    "Content-Type": "application/json",
    // 'Authorization': ``,
    "Accept": "application/json"
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
