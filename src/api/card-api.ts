import { instance } from "./instance"

export type ResponseTypeCardsData = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: number
    created: string
    updated: Date
    __v: number
    _id: string
}


export type ResponseTypeCardsType = {
    cards: Array<ResponseTypeCardsData> | null
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export const ApiCards = {
    getCards(cardsPack_id: string, pageCount?: number, page?: number,) {
        return instance.get<ResponseTypeCardsType>("cards/card", {params: {cardsPack_id, page, pageCount}})
    },
    addCards(cardsPack_id: string, question: string, answer: string) {
        return instance.post<ResponseTypeCardsData>("cards/card", {card: {cardsPack_id, question, answer}})
    },
    deleteCards(id: string) {
        return instance.delete<ResponseTypeCardsData>("cards/card", {params: {id}})
    },
    putCards(_id: string, question?: string, comments?: string){
        return instance.put<ResponseTypeCardsData>("cards/card", {card: {_id, question, comments}})
    }

}
