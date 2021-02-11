import { forgotPasswordAPI } from '../../api/forgot-password-api';
import { Dispatch } from "redux";

export const initialForgotPasswordState: initialForgotPasswordStateType = {
    email: '',
    newPassword: '',
    isRequestLoading: ''
}

export type initialForgotPasswordStateType = {
    email: string
    newPassword: string
    isRequestLoading: RequestLoadingType
}

const SEND_EMAIL = 'friday-project/forgot-password-reducer/SEND_EMAIL';
const RESET_PASSWORD = 'friday-project/forgot-password-reducer/RESET_PASSWORD' 
const IS_REQUEST_LOADING = 'friday-project/forgot-password-reducer/IS_REQUEST_LOADING'


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
        case IS_REQUEST_LOADING: {
            return {
                ...state,
                isRequestLoading: action.isRequestLoading
            }
        }
        default: 
            return state;
    }
}


export type RequestLoadingType = 'Loading' | 'Succeeded' | ''


//--- Action Creators ------
export const sendEmail = (email: string) => ({type: SEND_EMAIL, email} as const)
export const resetPassword = (newPassword: string) => ({type: RESET_PASSWORD, newPassword} as const)
export const isRequestLoading = (isRequestLoading: RequestLoadingType) => ({type: IS_REQUEST_LOADING, isRequestLoading} as const)



// ------ thunk for dispatching action creator ---------
export const sendEmailThunk = (email: string) => (dispatch: Dispatch) => {
    dispatch(isRequestLoading('Loading'))
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


type actionsType =  | ReturnType<typeof sendEmail>
                    | ReturnType<typeof resetPassword>
                    | ReturnType<typeof isRequestLoading>

