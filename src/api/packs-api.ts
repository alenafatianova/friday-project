import axios from 'axios'
import { packsType } from '../components/TableComponent'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})
// const instance = axios.create({
//     baseURL: 'http://localhost:7542/2.0/',
//     withCredentials: true
// })


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
                return response.data;
            }
        }
       catch(err) {
           return alert(err);
       }
    },
    async addCardsPack(cardsPack: packsType) {
        try {
            const response = await instance.post<addCardsPackResponseType>('cards/packs', {cardsPack})
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