import axios from 'axios'

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