import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})
// const instance = axios.create({
//     baseURL: 'http://localhost:7542/2.0/',
//     withCredentials: true
// })

export type cardType = {
   answer: string
    question: string
    cardsPack_id: string
    grade: string
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}
type getCardResponseType = {
    card: cardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId:string
}

type addCardResponseType = {
    newCard: {}
}
type updatedCardResponseType = {
    updatedCard: {}
}
type deletedCardResponseType = {
    deletedCard: {}
}
export const cardAPI = {
    async getCard() {
        try {
            const response = await instance.get<getCardResponseType>(`cards/card`)
            if(response.status === 200) {
                return alert(response.data.card)
            }
        }
        catch(err) {
            return alert(err);
        }
    },
    async addCard() {
        try {
            const response = await instance.post<addCardResponseType>('cards/card')
            if(response.status === 200) {
                return alert(response.data.newCard)
            }
        }
        catch(err) {
            return alert(err);
        }
    },
    async changeCard(_id: string, question?: string, comments?: string) {
        try {
            const response = await instance.put<updatedCardResponseType>
            ('cards/card', {updatedCard: {_id, question, comments}})
            if(response.status === 200) {
                return alert(response.data.updatedCard)
            }
        }
        catch(err) {
            return alert(err);
        }
    },
    async deleteCard(id: string) {
        try {
            const response = await instance.delete<deletedCardResponseType>(`cards/card?${id}`)
            if(response.status === 200) {
                return alert(response.data.deletedCard)
            }
        }
        catch(err) {
            return alert(err);
        }
    }
}