import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})
// const instance = axios.create({
//     baseURL: 'http://localhost:7542/2.0/',
//     withCredentials: true
// })

type cardGetType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    rating: number
    type: string
    user_id: string
    created: string
    updated: string
    _id: string
    __v: number
}

type getCardsResponseType = {
    cardPacks: cardGetType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
type cardPostType = {
    cardsPack_id: string
    question: string
    answer: string
    grade?: number
    shots?: number
    rating?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    type: string
}

export const cardAPI = {
    getCard(cardAnswer?: string, cardQuestion?: string, cardsPack_id?: string, min?: number, max?: number, sortCards?: string, page?: string, pageCount?: number) {
        return instance.get<getCardsResponseType>(`cards/card?cardAnswer=${cardAnswer}&cardQuestion=${cardQuestion}&cardsPack_id=${cardsPack_id}&min=${min}&max=${max}&sortPacks=${sortCards}&page=${page}&pageCount=${pageCount}`)
    },
    postCard(card: cardPostType) {
        return instance.post('cards/card', {card})
    },
    putCard(_id: string, question?: string, comments?: string) {
        return instance.put('cards/card', {card: {_id, question, comments}})
    },
    deleteCard(id: string) {
        return instance.delete(`cards/card?${id}`)
    }
}