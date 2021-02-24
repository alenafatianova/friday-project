import { instance } from "./instance"

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
            return console.log(response.data.info)
         }
        }
        catch(error) {
            return alert(error);
        }  
    },
    async setNewPassword(password: string, resetPasswordToken: string) {
        try{
            const response = await instance.post<setNewPasswordResponseType>(`auth/set-new-password/`, {password, resetPasswordToken})
            if(response.status === 200) {
                return console.log(response.data.info);
            } 
        }
        catch(error) {
            return console.log(error);
        }
    }
}
