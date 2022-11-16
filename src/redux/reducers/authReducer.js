import {
    S_LOGIN,
    F_LOGIN,
    F_REGISTER,
    S_REGISTER,
    S_LOGOUT,
    F_LOGOUT,
    S_UPDATE_PROFILE,
} from '../Types'

const accessToken = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const profileStorage = localStorage.getItem('profile')? JSON.parse(localStorage.getItem('profile')):null

export const authReducer = (state= {error:null, my_profile: profileStorage, token: accessToken}, action)=>
{
    switch (action.type)
    {
        case S_REGISTER:
            return{
                ...state,
                error: action.payload
            }
        case S_LOGIN:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                token: action.payload.token,
                my_profile: action.payload,
            }
        case S_UPDATE_PROFILE:
            return{
                ...state,
                my_profile:{
                    ...action.payload,
                    ...state.my_profile
                }
            }
        case F_LOGIN:
        case F_LOGOUT:
        case F_REGISTER:
            return {
                ...state,
                error: action.payload,
                my_profile:null,
                token: null,
            };

        case S_LOGOUT:
            localStorage.clear()
            sessionStorage.clear()
            return{
                ...state,
                my_profile: null,
                token: null,
                error: action.payload
            }
        default:
            return state
    }
}

