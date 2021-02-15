import {LoginResponseType} from "../../api/Login-api";

const initialState: InitialStateType = {

        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,
        created: '',
        updated: '',
        isAdmin: false,
        verified: false,
        rememberMe: false,
        error: ''

}

export const profileReducer = (state: InitialStateType = initialState, action: SetUserActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER':
            return {...state,  ...action.data}

        default:
            return {...state}
    }
}


export type InitialStateType = {

        _id: string,
        email: string,
        name: string,
        avatar?: string,
        publicCardPacksCount: number,
        created: string,
        updated: string,
        isAdmin: boolean,
        verified: boolean,
        rememberMe: boolean,
        error?: string

}

export const setUserAC = (data: LoginResponseType) => ({type: 'SET-USER', data} as const)

    // types
export type SetUserActionsType = ReturnType<typeof setUserAC >


