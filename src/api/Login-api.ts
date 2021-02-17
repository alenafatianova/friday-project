import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
   })

// api
export const authAPI  = {
    login(data: LoginRequestType) {
        return instance.post<LoginResponseType>('auth/login', data);
    },
    PostMe() {
        return instance.post<LoginResponseType>('auth/me', {});
    },
    PutMe( name: string, avatar: string) {
        return instance.put<{ updatedUser:LoginResponseType, error?: string}>('auth/me', {});
    },
    DeleteMe() {
        return instance.delete<{info: string, error: string}>('auth/me', {});
    }
} 

// types

export type LoginRequestType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginResponseType = {
   _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}

// export type PutMeRequestType = {
//     name: string
//     avatar: string
// }
//
// export type PutMeResponseType = {
//     updatedUser:LoginResponseType
//     error?: string
// }