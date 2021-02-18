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

type getPackResponseType = {
    cardPacks: Array<CardsPackType>
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

    getCardsPack() {
        return instance.get<getPackResponseType>(`cards/pack`)
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