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
import {useNavigate} from "react-router-dom";

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
        const res = await axios.post('/api/signup/', body, config)
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
        await axios.post('/api/signin/', body, config).then(res=>
        {
            dispatch({
                type:S_LOGIN,
                payload: res.data,
            })
            dispatch(loadMyInfoAction())
            localStorage.setItem('my_profile', JSON.stringify(res.data))
        })
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_LOGIN, error))
    }
}

export const logout = () => async dispatch =>
{
    // const navigate = useNavigate()

    try
    {
        const config = {
            headers: {
                "Content-Type": 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`,
                "Accept": "application/json"
            }
        }

        const body = JSON.stringify({})

        await axios.post('/api/logout/', body, config).then(() =>
        {
            dispatch({type: S_LOGOUT})
            localStorage.clear()
            // navigate('/login')
            window.location.pathname="/login"
            // window.location.replace("", "/login")
        })
    } catch (error)
    {
        dispatch(postActionPayloadError(F_LOGOUT, error))
        // console.log(error)
    }
}
