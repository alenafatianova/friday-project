import { forgotPasswordAPI } from '../../api/forgot-password-api';
import { Dispatch } from "redux";




export const initialForgotPasswordState = {
    email: '',
    loading: false
}

const SEND_EMAIL = 'friday-project/forgot-password-reducer/SEND_EMAIL';
const IS_LOADING = 'friday-project/forgot-password-reducer/IS_LOADING'

export type sendEmailPayloadType = {
    email: string 
}

export type sendEmailType = {
    type: typeof SEND_EMAIL
    payload: sendEmailPayloadType
}
export type isLoadingType = {
    type: typeof IS_LOADING
    payload: boolean
}



export const forgotPasswordReducer = (state = initialForgotPasswordState, action: actionsType) => {
    switch(action.type) {
        case SEND_EMAIL: {
            return {
                ...state,
                email: action.email, 
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                loading: !state.loading
            }
        }
        default: 
            return state;
    }
}


//--- Action Creator for sending email ------
export const sendEmail = (email: string) => ({type: SEND_EMAIL, email} as const)
export const isLoading = () => ({type: IS_LOADING} as const)

type actionsType = | ReturnType<typeof isLoading> | ReturnType<typeof sendEmail>


// ------ thunk for dispatching action creator ---------
export const sendEmailThunk = (email: string) => async(dispatch: Dispatch) => {
    await forgotPasswordAPI.forgotPassword(email)
    dispatch(sendEmail(email)) 
}