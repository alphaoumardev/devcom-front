import {F_GET_NOTIFICATIONS, S_GET_NOTIFICATIONS, S_READ_NOTIFICATIONS, F_READ_NOTIFICATIONS} from "../Types";

export const getNotificationsReducer = (state={notification: []}, action)=>
{
    switch (action.type)
    {
        case S_GET_NOTIFICATIONS:
            return{
                ...state,
                notification: action.payload
            }
        case F_GET_NOTIFICATIONS:
            return{
                ...state,
                notification: [],
                error:action.payload
            }
        default:
            return state
    }
}
export const deleteMyNotificationReducer = (state={read: []}, action)=>
{
    switch (action.type)
    {
        case S_READ_NOTIFICATIONS:
            return{
                ...state,
                read: [...action.payload]
            }
        case F_READ_NOTIFICATIONS:
            return{
                ...state,
                read: [],
                error:action.payload
            }
        default:
            return state
    }
}
