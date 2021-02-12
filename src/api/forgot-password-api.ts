import { useHistory } from 'react-router';
import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,

})
// const instance = axios.create({
//     baseURL: 'http://localhost:7542/2.0/',
//     withCredentials: true
// })

type forgotPasswordResponseType = {
    info: string
    error: string
}
type setNewPasswordResponseType = {
    info: string
    error: string
}

export const forgotPasswordAPI = {
    forgotPassword(email: string, from?: string, message?: string)  {
       return instance.post<forgotPasswordResponseType>(`auth/forgot`, {email, from, message})   
    },
    setNewPassword(password: string, resetPasswordToken: string) {
       return  instance.post<setNewPasswordResponseType>(`auth/set-new-password/`, {password, resetPasswordToken})
    }
}
