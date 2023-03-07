import axios from "axios";
import {F_GET_NOTIFICATIONS, S_GET_NOTIFICATIONS, S_READ_NOTIFICATIONS, F_READ_NOTIFICATIONS} from "../Types";

const config = {
    headers: {
        "Content-Type": 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`,
        "Accept": "application/json"
    }
}

export const getNotificationsAction = () => async (dispatch) =>
{
    try
    {
        await axios.get("/api/notifications/", config).then(res =>
        {
            dispatch(
                {
                    type: S_GET_NOTIFICATIONS,
                    payload: res.data
                })
            // console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_GET_NOTIFICATIONS,
                payload: error
            })

    }
}
export const deleteMyNotification = (id) => async (dispatch) =>
{
    try
    {
        await axios.delete(`/api/read/${id}`, config).then(res =>
        {
            dispatch(
                {
                    type: S_READ_NOTIFICATIONS,
                    payload: res.data
                })
            dispatch(getNotificationsAction())
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: F_READ_NOTIFICATIONS,
                payload: error
            })

    }
}
