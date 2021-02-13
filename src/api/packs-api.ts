import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})
// const instance = axios.create({
//     baseURL: 'http://localhost:7542/2.0/',
//     withCredentials: true
// })

type cardPacksType = {
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
    cardPacks: cardPacksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}
type cardsPackType = {
    name: string
    path: string
    grade: number
    shots: number
    rating: number
    deckCover: string
    private: boolean
    type: string
}

export const packsAPI = {
    getCardsPack(packName?: string, min?: number, max?: number, sortPacks?: number, page?: number, pageCount?: number, user_id?: string) {
        return instance.get<getPackResponseType>(`cards/pack?packName=${packName}&min=${min}&max=${max}&sortPacks=${sortPacks}&page=${page}&pageCount=${pageCount}&user_id=${user_id}`)
    },
    chooseCardsPack(cardsPack: cardsPackType) {
        return instance.post('cards/packs', {cardsPack})
    },
    changeCardsPack(_id: string, name: string) {
        return instance.put('cards/pack', {cardsPack: {_id, name}})
    },
    deleteCardsPack(id: string) {
        return instance.delete(`cards/pack?${id}`)
    }
}