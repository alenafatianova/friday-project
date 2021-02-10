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
    async forgotPassword(email: string, from?: string, message?: string)  {
        try {
        const response = await instance.post<forgotPasswordResponseType>(`auth/forgot`, {email, from, message})
         if (response.status === 200) {
            return alert(response.data.info)
         }
        }
        catch(error) {
            return alert(error);
        }  
    },
    async setNewPassword(password: string, resetPasswordToken: string) {
        try{
            const response = await instance.post<setNewPasswordResponseType>(`auth/set-new-password$token$`, {password, resetPasswordToken})
            return alert(response.data.info);
        }
        catch(error) {
            return alert(error);
        }
    }
}
