import {instance} from "./instance";


export interface ResponseTypeCardsGradeType {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: number
    shots: number

}


export const ApiCardsGrade = {
    putCardsGrade(card_id: string, grade?: number) {
        return instance.put <ResponseTypeCardsGradeType>(`cards/grade`, {updatedGrade: {grade,card_id}})
    }
}
