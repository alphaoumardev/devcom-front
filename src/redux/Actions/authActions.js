import {
    S_LOGIN,
    F_LOGIN,
    F_REGISTER,
    S_REGISTER,
    S_LOGOUT,
    F_LOGOUT,
} from '../Types'
import axios from "axios";
import {loadMyInfoAction} from "./mineAction";

export const postActionPayloadError = (type, error) => ({
    type: type,
    payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
});

export const register = (username, email, password)=> async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({username, email, password})
    try
    {
        const res = await axios.post('register/', body, config)
        dispatch({
            type:S_REGISTER,
            payload: res.data,
        })
        // console.log(res.data)
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_REGISTER, error))
    }
}

export const login = (username, password) => async dispatch =>
{

    const config ={ headers:{'Content-Type': 'application/json'} }
    const body = JSON.stringify({username, password})
    try
    {
        const res = await axios.post('login/', body, config)

        dispatch({
            type:S_LOGIN,
            payload: res.data,
        })
        dispatch(loadMyInfoAction())
        localStorage.setItem('my_profile', JSON.stringify(res.data))
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_LOGIN, error))
    }
}

export const logout = () => dispatch =>
{
    try
    {
        localStorage.clear()
        dispatch({type:S_LOGOUT})
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_LOGOUT, error))
    }
}
