import { instance } from "./instance"

export type CardsPackResponseType = {
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

export type PacksResponseType = {
    cardPacks: CardsPackResponseType[]
    page: number
    pageCount: number
    cardPacksTotalCount: number
}

export const packsAPI = {
    getCardsPack(page?:number, pageCount?: number, packName?: string, min?: number, max?: number,  user_id?: string  ) {
        return instance.get<PacksResponseType>(`cards/pack?`, {params: {page, pageCount, user_id, packName}})
    },
    addCardsPack(name: string) {
        return  instance.post<CardsPackResponseType>('cards/pack', {cardsPack: {name}})
    },       
    changeCardsPack(_id: string, name: string) {
        return instance.put<CardsPackResponseType>('cards/pack', {cardsPack: {_id, name}})
    },
    deleteCardsPack(id: string) {
      return instance.delete<CardsPackResponseType>(`cards/pack`, {params: {id}})
    }
}