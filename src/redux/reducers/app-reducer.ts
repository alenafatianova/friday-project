import {Dispatch} from "redux";
import {authAPI} from "../../api/Login-api";
import {setIsLoggedInAC} from "./login-reducer";


const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-INITIALIZED':
            return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}

export type RequestStatusType =  'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    isInitialized: boolean
}

export const setInitializedAC=(isInitialized: boolean) =>({ type: 'APP/SET-INITIALIZED', isInitialized} as const)
export const setAppErrorAC = (error: string | null) => ({ type: 'APP/SET-ERROR', error } as const)
export const setAppStatusAC = (status:  RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const)


//tnunk

export const initializeAppTC = () => (dispatch: Dispatch) => {

    authAPI.PostMe().then(res => {
      dispatch(setIsLoggedInAC(true));

    }).catch((e)=> {
       console.log(e)
    })
}


export type SetInitializedActionType = ReturnType<typeof setInitializedAC>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>

type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | SetInitializedActionType
