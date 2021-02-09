import { forgotPasswordAPI } from './../api/forgot-password-api';
import { Dispatch } from "redux";


const initialState = {
    email: '',
}

const SEND_EMAIL = 'friday-project/forgot-password-reducer/SEND_EMAIL';

export type sendEmailPayloadType = {
    email: string 
}
export type sendEmailType = {
    type: typeof SEND_EMAIL
    payload: sendEmailPayloadType
}

export const forgotPasswordReducer = (state = initialState, action: sendEmailActionType) => {
    switch(action.type) {
        case SEND_EMAIL: {
            return {
                ...state,
                email: action.email, 
            }
        }
        default: 
            return state;
    }
}

export const sendEmail = (email: string) => ({type: SEND_EMAIL, email} as const)

export type sendEmailActionType = ReturnType<typeof sendEmail>

export const sendEmailThunk = (email: string) => async(dispatch: Dispatch) => {
    await forgotPasswordAPI.forgotPassword(email)
    dispatch(sendEmail(email))
}