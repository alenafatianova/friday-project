
import { forgotPasswordAPI } from '../../api/forgot-password-api';
import { Dispatch } from "redux";
import { setAppStatusAC } from './app-reducer';


export const initialForgotPasswordState: initialForgotPasswordStateType = {
    email: '',
    newPassword: '',
    requestStatus: '',
}

export type initialForgotPasswordStateType = {
    email: string
    newPassword: string
    requestStatus: string
}

const SEND_EMAIL = 'friday-project/forgot-password-reducer/SEND_EMAIL';
const RESET_PASSWORD = 'friday-project/forgot-password-reducer/RESET_PASSWORD';
const REQUEST_STATUS = 'friday-project/forgot-password-reducer/REQUEST_STATUS';


export const forgotPasswordReducer = (state: initialForgotPasswordStateType = initialForgotPasswordState, action: actionsType) => {
    switch(action.type) {
        case SEND_EMAIL: {
            return {
                ...state,
                email: action.email, 
            }
        }
        case RESET_PASSWORD: {
            return {
                ...state, 
                newPassword: action.newPassword
            }
        }
        default: 
            return state;
    }
}

export type forgotPassRequestStatusType = 'Loading' | 'Success' | ''

//--- Action Creators ------
export const sendEmail = (email: string) => ({type: SEND_EMAIL, email} as const)
export const resetPassword = (newPassword: string) => ({type: RESET_PASSWORD, newPassword} as const)
export const requestStatus = (requestStatus: forgotPassRequestStatusType) => ({type: REQUEST_STATUS, requestStatus} as const)
 
// ------ thunk for dispatching action creator ---------
export const sendEmailThunk = (email: string) => async(dispatch: Dispatch) => {
    try {
        dispatch(requestStatus('Loading'))
        const from = "test-front-admin <alyena.fatianova@gmail.com>"
        const message = `<div style="background-color: lime; padding: 15px">
        password recovery link: 
        <a href='http://localhost:3000/#/resetPassword/$token$'>link</a> </div>`
        await forgotPasswordAPI.forgotPassword(email, from, message)
        dispatch(sendEmail(email)) 
    }
    catch(err) {
        console.log(err)
    }
}

export const setNewPasswordThunk = (newPassword: string, resetPasswordToken: string) => async(dispatch: Dispatch<actionsType>) => { 
    try {
        dispatch(requestStatus('Loading'))
        await forgotPasswordAPI.setNewPassword(newPassword, resetPasswordToken) 
        dispatch(resetPassword(newPassword))
    }
    catch(err) {
        console.log(err)
    }
}


type actionsType =  | ReturnType<typeof sendEmail>
                    | ReturnType<typeof resetPassword>
                    | ReturnType<typeof requestStatus>
                   

