import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})
// const instance = axios.create({
//     baseURL: 'http://localhost:7542/2.0/',
//     withCredentials: true
// })

export type packsType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
    __v: number
}
type getPackResponseType = {
    cardPacks: packsType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

type addCardsPackResponseType = {
    newCardsPack: {}
}
type updatedCardsPackresponseType = {
    updatedCardsPack: {}
}
type deletedCardsPackResponseType = {
    deletedCardsPack: {}
}
export const packsAPI = {
    async getCardsPack() {
        try {
            const response = await instance.get<getPackResponseType>(`cards/pack`)
            if(response.status === 200) {
                return alert(response.data.cardPacks)
            }
        }
        catch(err) {
            return alert(err);
        }
    },
    async addCardsPack() {
        try {
            const response = await instance.post<addCardsPackResponseType>('cards/packs')
            if(response.status === 200) {
                return alert(response.data.newCardsPack)
            }
        }
        catch(err) {
            return alert(err);
        }
    },
    async changeCardsPack(_id: string, name: string) {
        try {
            const response = await instance.put<updatedCardsPackresponseType>('cards/pack', {cardsPack: {_id, name}})
            if(response.status === 200) {
                return alert(response.data.updatedCardsPack)
            }
        }
        catch(err) {
            return alert(err);
        }
    },
    async deleteCardsPack(id: string) {
        try {
            const response = await instance.delete<deletedCardsPackResponseType>(`cards/pack?${id}`)
            if(response.status === 200) {
                return alert(response.data.deletedCardsPack)
            }
        }
        catch(err) {
            return alert(err);
        }
    }
}