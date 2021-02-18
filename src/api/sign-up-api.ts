import { instance } from "./instance";


type signUpResponseType = {
    addedUser: {}
    error: string
}

export const signUpAPI = {
    async signUp(email: string, password: string) {
        try{
            const response = await instance.post<signUpResponseType>('auth/register', {email, password})
            if (response.status === 200) {
               return alert(response.data.addedUser)
            }
        }
        catch(error) {
            return alert(error);
        }
    }

}