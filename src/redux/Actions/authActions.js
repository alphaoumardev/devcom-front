import {F_LOGIN, F_LOGOUT, F_REGISTER, F_USER_INFO, S_LOGIN, S_LOGOUT, S_REGISTER, S_USER_INFO,} from '../Types'
import axios from "axios";

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
        // console.log(res.data)

        dispatch(loadMyInfoAction())
        localStorage.setItem('my_profile', JSON.stringify(res.data))
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_LOGIN, error))
    }
}

export const loadMyInfoAction = () => async dispatch =>
{
    if(localStorage.getItem('token'))
    {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`,
                'Accept': 'application/json'
            }
        }
        try
        {
            await axios.get('/my-profile/', config).then((res)=>
            {
                dispatch(
                    {
                        type: S_USER_INFO,
                        payload: res.data,
                    })
            })
        }
        catch (error)
        {
            dispatch({
                type: F_USER_INFO,
                payload: error
            })
        }
    }
}

export const logout = () => dispatch =>
{
    try
    {
        // localStorage.removeItem('profile')
        localStorage.clear()
        dispatch({type:S_LOGOUT})
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_LOGOUT, error))
    }
}
