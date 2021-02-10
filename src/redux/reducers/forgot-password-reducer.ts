import { forgotPasswordAPI } from '../../api/forgot-password-api';
import { Dispatch } from "redux";
import { useHistory } from 'react-router-dom';


export const initialForgotPasswordState = {
    email: '',
    newPassword: ''
}

const SEND_EMAIL = 'friday-project/forgot-password-reducer/SEND_EMAIL';
const RESET_PASSWORD = 'friday-project/forgot-password-reducer/RESET_PASSWORD' 


export type sendEmailPayloadType = {
    email: string 
}

export type sendEmailType = {
    type: typeof SEND_EMAIL
    payload: sendEmailPayloadType
}

export type resetPasswordType = {
    type: typeof RESET_PASSWORD
    payload: string
}

export const forgotPasswordReducer = (state = initialForgotPasswordState, action: actionsType) => {
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


//--- Action Creators ------
export const sendEmail = (email: string) => ({type: SEND_EMAIL, email} as const)
export const resetPassword = (newPassword: string) => ({type: RESET_PASSWORD, newPassword} as const)

type actionsType =  | ReturnType<typeof sendEmail>
                    | ReturnType<typeof resetPassword>



// ------ thunk for dispatching action creator ---------
export const sendEmailThunk = (email: string) => (dispatch: Dispatch) => {
    const from = "test-front-admin <alyena.fatianova@gmail.com>"
    const message = `<div style="background-color: lime; padding: 15px">
    password recovery link: 
    <a href='http://localhost:3000/#/resetPassword/$token$'>link</a> </div>`
    forgotPasswordAPI.forgotPassword(email, from, message)
    dispatch(sendEmail(email)) 
}

export const setNewPasswordThunk = (newPassword: string, resetPasswordToken: string) => (dispatch: Dispatch) => {
    forgotPasswordAPI.setNewPassword(newPassword, resetPasswordToken) 
    dispatch(resetPassword(newPassword))
}