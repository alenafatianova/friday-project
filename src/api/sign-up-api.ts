
import axios from 'axios'
import { useHistory} from 'react-router'

// const instance = axios.create({
//     baseURL: 'http://localhost:7542/2.0/',
//     withCredentials: true
// })

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

type signUpResponseType = {
    addedUser: {}
    error: string
}

export const signUpAPI = {
    signUp(email: string, password: string) {
   return instance.post<signUpResponseType>('auth/register', {email, password}) 
}}