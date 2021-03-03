import { CardsPackResponseType } from "../redux/reducers/cards-pack-reducer"
import { instance } from "./instance"


export type PacksResponseType = {
    cardPacks: CardsPackResponseType[]
    page: number
    pageCount: number
    cardPacksTotalCount: number
}

export const packsAPI = {
    getCardsPack(page?:number, pageCount?: number, user_id?: string,  packName?: string, min?: number, max?: number  ) {
        return instance.get<PacksResponseType>(`cards/pack?`, {params: {page, pageCount, user_id}})
    },
    addCardsPack(name: string) {
        return  instance.post<CardsPackResponseType>('cards/pack', {cardsPack: {name}})
    },       
    changeCardsPack(_id: string, name: string) {
        return instance.put<CardsPackResponseType>('cards/pack', {cardsPack: {_id, name}})
    },
    deleteCardsPack(_id: string) {
      return instance.delete<CardsPackResponseType>(`cards/pack?id=${_id}`) 
    }
}