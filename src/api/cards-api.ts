import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/cards/card',
    withCredentials: true
})

// api
export const cardsAPI = {
    getCard(data: GetCardRequestType) {
        return instance.get<GetCardTotalResponseType>('', {});
    },
   postCard(data: PostCardRequestType) {
        return instance.post('', {});
    },
   putCard(card:{_id: string, question?: string, comments?:string}) {
        return instance.put('', {});
    },
    deleteCard(id: string) {
        return instance.delete('', {});
    }
}

// types

export type GetCardRequestType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id: string
    min?: string
    max?: string
    sortsCard?: string
    page?: number
    pageCount: number
}

export type GetCardResponseType = [
  {
      answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: number
    created: string
    update:string
    _v: number
    _id: string
  }
]

export type GetCardTotalResponseType = {
    cards: GetCardResponseType
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export type PostCardRequestType = {
    card : {
        cardsPack_id: string
        answer: string
        question: string
        grade?: number
        rating?: number
        shots?: number
        type: string
        answerImg?: string
        questionImg?: string
        questionVideo?: string
        answerVideo?: string

    }
}