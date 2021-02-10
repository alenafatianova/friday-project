import {Dispatch} from 'redux'
import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";
import {authAPI, LoginRequestType} from "../api/Login-api";
import {setUserAC, SetUserActionsType} from "./profile-reducer";

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
export const loginTC = (data: LoginRequestType) => async (dispatch: Dispatch<ActionsType>) => {

    dispatch(setAppStatusAC('loading'))
    await authAPI.login(data).then((res) => {
        debugger
        dispatch(setIsLoggedInAC(true))
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setUserAC(res.data))
    })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ' more details in the console');
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
            console.log(error.error)
        })
}

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.DeleteMe()
        .then(res => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ' more details in the console');
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
        })
}


// types
type ActionsType = ReturnType<typeof setIsLoggedInAC> | SetAppStatusActionType | SetAppErrorActionType | SetUserActionsType



