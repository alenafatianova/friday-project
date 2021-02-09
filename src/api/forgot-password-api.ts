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

export const forgotPasswordAPI = {
    async forgotPassword(email: string, from?: string, message?: string)  {
       const response = await instance.post<forgotPasswordResponseType>(`auth/forgot`, {email, from, message})
       return response.data.info
}
}
// const  asyncEmail =  async (email: string, from?: string, message?: string) => {
//     const reply = await instance.post(`auth/forgot`, {email, from, message})
//     console.log(reply.data.info)
// }