import {
    LOGIN_REQUEST,
    S_LOGIN,
    F_LOGIN,

    REGISTER_REQUEST,
    F_REGISTER,
    S_REGISTER,

    REFRESH_TOKEN,
    F_REFRESH,

    S_LOAD_PROFILE,
    F_LOAD_PROFILE,
    S_AUTHENTICATED,
    F_AUTHENTICATED,
    S_PASSWORD_RESET,
    F_PASSWORD_RESET,
    S_PASSWORD_RESET_CONFIRM,
    F_PASSWORD_RESET_CONFIRM,
    S_ACTIVATION,
    F_ACTIVATION,
    S_GOOGLE_AUTH,
    F_GOOGLE_AUTH,
    S_FACEBOOK_AUTH,
    F_FACEBOOK_AUTH,

    S_LOGOUT,
    F_LOGOUT,
    S_UPDATE_PROFILE,
    F_UPDATE_PROFILE,
    USER_PROFILE, S_USER_INFO, F_USER_INFO
} from '../Types'
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
        dispatch({type:REGISTER_REQUEST})

        const res = await axios.post('register/', body, config)
        dispatch({
            type:S_REGISTER,
            payload: res.data,
        })
        console.log(res.data)
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
        dispatch({ type: LOGIN_REQUEST });

        const res = await axios.post('login/', body, config)

        dispatch({type:S_LOGIN, payload: res.data,})
        dispatch(load_user())
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_LOGIN, error))
    }
}

export const load_user = () => async dispatch =>
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
            const res = await axios.get('/loaduser/', config)
            dispatch({
                type: S_LOAD_PROFILE,
                payload: res.data,
            })
            // console.log(res.data)
        }
        catch (error)
        {
            dispatch({
                type: F_LOAD_PROFILE,
                payload: error
            })
        }
    }else
    {
        dispatch({type: S_LOAD_PROFILE,})
    }
}

export const loadUserInfoAction = () => async dispatch =>
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
            const res = await axios.get('/profile/', config)
            dispatch({
                type: S_USER_INFO,
                payload: res.data,
            })
            // console.log(res.data)
        }
        catch (error)
        {
            dispatch({
                type: F_USER_INFO,
                payload: error
            })
        }
    }else
    {
        dispatch({type: S_LOAD_PROFILE,})
    }
}

export const logout = () => dispatch =>
{
    try
    {
        localStorage.removeItem('user')
        localStorage.clear()
        dispatch({type:S_LOGOUT})
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_LOGOUT, error))
    }
}

export const checkIfAuthenticated = () => async dispatch =>
{
    if(localStorage.getItem('token'))
    {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        const body = JSON.stringify(localStorage.getItem('token'))
        try
        {
            await axios.post('/auth/jwt/verify/',body, config).then((res)=>
                {
                    console.log(res.data)
                    // console.log(20)

                    if(res.data.code !== 'token_not_valid')
                    {
                        dispatch({type:S_AUTHENTICATED})
                    }
                    else if(body)
                    {
                        dispatch({type:S_AUTHENTICATED})
                    }

                    else
                    {
                        dispatch({type:F_AUTHENTICATED})
                    }
                }
            )
        }
        catch (error)
        {
            dispatch({type: F_AUTHENTICATED,})
        }
    }else
    {
        dispatch({type: F_AUTHENTICATED,})
    }
}

export const updateUserProfile = (first_name, last_name, email, password)=> async dispatch =>
{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`,
            'Accept': 'application/json'
        }
    }
    const body = JSON.stringify({first_name, last_name, email, password})
    try
    {
        await axios.put('/auth/users/me/', body, config).then((res)=>
        {
            dispatch({type:S_UPDATE_PROFILE, payload: res.data,})
            console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_UPDATE_PROFILE, error))
    }
}

export const refreshToken = (refresh)=> async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({refresh})
    try
    {
        await axios.post('/auth/jwt/refresh/', body, config)
        dispatch({type:REFRESH_TOKEN,})
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_REFRESH, error))
    }
}

export const verify = (uid, token)=> async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({uid, token})
    try
    {
        await axios.post('/auth/users/activation/', body, config)
        dispatch({type:S_ACTIVATION,})
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_ACTIVATION, error))
    }
}

export const reset_password = (email,)=> async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({email,})
    try
    {
        await axios.post('/auth/users/reset_password/', body, config)
        dispatch({type:S_PASSWORD_RESET,})
    }
    catch (error)
    {
        dispatch({type: F_PASSWORD_RESET,})
    }
}

export const reset_password_confirm = (uid, token, new_password, re_password) => async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({uid, token, new_password, re_password})
    try
    {
        await axios.post('/auth/users/reset_password_confirm/', body, config)
        dispatch({type:S_PASSWORD_RESET_CONFIRM,})
    }
    catch (error)
    {
        dispatch({type: F_PASSWORD_RESET_CONFIRM,})
    }
}

export const googleAuthenticate = (state, code) => async dispatch =>
{
    try
    {
        if(state && code && !localStorage.getItem('token'))
        {
            const config ={ headers: {'Content-Type': 'application/x-form-urlencoded'}}
        }
        const details = {'state': state, 'code': code}
        const formBody = Object.keys(details).map(key =>
            encodeURIComponent(key) + '=' +
            encodeURIComponent(details[key])).join('&')

        const res = await axios.post(`/auth/o/google-oauth2/?${formBody}`, config)
        dispatch({type:S_GOOGLE_AUTH, payload: res.data})
        dispatch(load_user())
    }
    catch (error)
    {
        dispatch({type: F_GOOGLE_AUTH,})
    }
}

export const facebookAuthenticate = (state, code) => async dispatch =>
{
    if(state && code && !localStorage.getItem('token'))
    {
        const config ={ headers: {'Content-Type': 'application/x-form-urlencoded'}}
    }
    const details = {'state': state, 'code': code}
    const formBody = Object.keys(details).map(key =>
        encodeURIComponent(key) + '=' +
        encodeURIComponent(details[key])).join('&')
    try
    {
        const res = await axios.post(`/auth/o/facebook/?${formBody}`, config)
        dispatch({type:S_FACEBOOK_AUTH, payload: res.data})
        dispatch(load_user())
    }
    catch (error)
    {
        dispatch({type: F_FACEBOOK_AUTH,})
    }
}

// The user profile info
export const getUserProfile = ()=> async dispatch =>
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
        await axios.get('/profile/', config).then((res)=>
        {
            dispatch(
                {
                    type: USER_PROFILE,
                    payload: res.data,
                })
        })
    }
    catch (error)
    {
    }
}

export const updateProfile = (user, contact, gender, avatar)=> async dispatch =>
{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`,
            'Accept': 'application/json'
        }
    }
    const body = JSON.stringify({user, contact, gender, avatar})
    try
    {
        await axios.put('/profile/', body, config).then((res)=>
        {
            dispatch(
                {
                    type: USER_PROFILE,
                    payload: res.data,
                })
            console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_ACTIVATION, error))
    }
}
