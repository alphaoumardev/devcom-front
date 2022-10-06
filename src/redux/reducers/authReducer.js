import {
    LOGIN_REQUEST,
    S_LOGIN,
    F_LOGIN,

    REGISTER_REQUEST,
    F_REGISTER,
    S_REGISTER,

    REFRESH_TOKEN,

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

    LOGOUT_REQUEST,
    S_LOGOUT,
    F_LOGOUT, F_REFRESH,
    S_UPDATE_PROFILE,
    F_UPDATE_PROFILE,
    USER_PROFILE,
} from '../Types'

const accessToken = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const userStorage = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')):null

export const authReducer = (state={

    error:null,
    isLoading:false,
    isAuthenticated: false,
    user: userStorage,
    token: accessToken,
    profile: [],}, action)=>
{
    switch (action.type)
    {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return{
                isLoading: true,
            }
        case USER_PROFILE:
            return {
                ...state,
                profile: action.payload
            }

        case S_AUTHENTICATED:
        case S_LOGIN:
        case S_GOOGLE_AUTH:
        case S_FACEBOOK_AUTH:
            localStorage.setItem('token', action.payload.token)

            return{
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                user: action.payload,
                isLoading: false,
            }
        case S_UPDATE_PROFILE:
        case S_LOAD_PROFILE:
            return{
                ...state,
                user:{
                    ...action.payload,
                    ...state.user
                }
            }
        case REFRESH_TOKEN:
            localStorage.setItem('token', payload.token)
            return{
                ...state,
                token: action.payload.token,
            }
        case F_AUTHENTICATED:
        case S_REGISTER:
            return{
                ...state,
                isAuthenticated: false,
            }
        case F_LOAD_PROFILE:
        case F_UPDATE_PROFILE:
            return{
                ...state,
                user: null,
            }
        case F_LOGIN:
        case F_LOGOUT:
        case F_REFRESH:
        case F_REGISTER:
            return {
                isLoading: false,
                error: action.payload,
                user:null,
                token: null,
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case S_LOGOUT:
        case F_FACEBOOK_AUTH:
        case F_GOOGLE_AUTH:

            localStorage.clear()
            sessionStorage.clear()

            return{
                ...state,
                user: null,
                token: null,
                isLoading: false,
                isAuthenticated: false,
            }
        case F_ACTIVATION:
        case S_ACTIVATION:
        case F_PASSWORD_RESET:
        case S_PASSWORD_RESET:
        case F_PASSWORD_RESET_CONFIRM:
        case S_PASSWORD_RESET_CONFIRM:
            return{
                ...state
            }
        default:
            return state
    }
}

