import { instance } from "./instance"

export type CardsPackType = {
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

export type getPackResponseType = {
    cardPacks: Array<CardsPackType>
    page: number
    pageCount: number
    cardPacksTotalCount: number
}
type addCardsPackResponseType = {
    newCardsPack: CardsPackType
}
type updatedCardsPackresponseType = {
    updatedCardsPack: CardsPackType
}
type deletedCardsPackResponseType = {
    deletedCardsPack: {}
}
export const packsAPI = {

    getCardsPack(page: number, pageCount: number) {
        return instance.get<getPackResponseType>(`cards/pack`, {params: {page, pageCount}})
    },
    addCardsPack(cardsPack: CardsPackType) {
        return  instance.post<addCardsPackResponseType>('cards/pack', {cardsPack})
    },       
    changeCardsPack(_id: string, name: string) {
        return instance.put<updatedCardsPackresponseType>('cards/pack', {cardsPack: {_id, name}})
    },
    deleteCardsPack(id: string) {
      return instance.delete<deletedCardsPackResponseType>(`cards/pack?${id}`)
    }
}