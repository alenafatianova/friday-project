import { instance } from "./instance";


type signUpResponseType = {
    addedUser: {}
    error: string
}

export const signUpAPI = {
    signUp(email: string, password: string) {
   return instance.post<signUpResponseType>('auth/register', {email, password}) 
}}