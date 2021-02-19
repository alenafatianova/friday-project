import { setAppStatusAC } from './app-reducer';
import { signUpAPI } from './../../api/sign-up-api';
import { Dispatch } from 'redux'


const initialSignUpState = {
    email: '',
    password: ''
}

const SIGNUP_DATA = 'SIGNUP_DATA'

export type signUpPayloadType = {
    email: string
    password: string
}

export const signUpReducer = (state =  initialSignUpState, action: SignUpActionsType) => {
    switch(action.type) {
        case SIGNUP_DATA: {
            return {
                ...state, 
                email: action.email,
                password: action.password
            }
        }
        default: {
            return state;
        }
    }
}

export const signUp = (email: string, password: string) => ({type: SIGNUP_DATA, email, password})

type SignUpActionsType = ReturnType<typeof signUp> 

export const signUpThunk = (email: string, password: string) => async(dispatch: Dispatch) => {
   try {
        dispatch(setAppStatusAC('loading'))
        await signUpAPI.signUp(email, password)
            dispatch(signUp(email, password))
    }
    catch(err) {
        console.log(err)
    }
}   
