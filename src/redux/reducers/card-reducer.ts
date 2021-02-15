import { Dispatch } from 'redux';
import { packsType } from '../../api/packs-api'
import {cardAPI, cardType} from "../../api/card-api";


export const initialCardState = {
    cards: [],
    cardsTotalCount: 3,
    maxGrade: 4,
    minGrade: 2,
    page: 1,
    pageCount: 4,
    packUserId: ''
}

export type initialCardStateType = {
    cards: cardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId:string
}

export type CardsType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: string
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}



export const CardReducer = (state:  initialCardStateType = initialCardState, action: cardActiontype) => {
    switch(action.type) {
        case 'GET_CARD': {
            return {
                ...state.cards,
            }
        }
        case 'ADD_CARD': {
            return {
                ...state,
                cards: [...state.cards, action.card]
            }
        }
        case "CHANGE_CARD": {
            return {
                ...state, 
                cards: state.cards.map(card => card._id === action._id ?
                    {...card, question: action.question, comments: action.comments} : card)
            }
        }
        case "DELETE_CARD": {
            return {
                ...state,
                cards: state.cards.filter(card=> card._id != action._id)
            }
        }
        default: 
            return state;
    }
}


//---- actions
export const getCard = () => ({type:'GET_CARD'} as const)
export const addCard = (card: cardType) => ({type: 'ADD_CARD', card} as const)
export const changeCard = (_id: string, question?: string, comments?: string) =>
    ({type:'CHANGE_CARD', _id,  question, comments} as const)
export const deleteCard = (_id: string) => ({type: 'DELETE_CARD', _id} as const)

//---- thunks
export const getCardTC = () => (dispatch: Dispatch) => {
   cardAPI.getCard();
    dispatch(getCard())
}
export const addCardTC = (card: cardType) => (dispatch: Dispatch) => {
    cardAPI.addCard();
    dispatch(addCard(card))
    dispatch(getCard())
}
export const updateCardTC = (_id: string, question?: string, comments?: string) => (dispatch: Dispatch) => {
    cardAPI.changeCard(_id, question, comments)
    dispatch(changeCard(_id,  question, comments))
    dispatch(getCard())
}
export const deleteCardTC = (_id: string) => (dispatch: Dispatch) => {
    cardAPI.deleteCard(_id)
    dispatch(deleteCard(_id))
    dispatch(getCard())
}
//----action types
export type cardActiontype =
    | ReturnType<typeof getCard>
    | ReturnType<typeof addCard>
    | ReturnType<typeof changeCard>
    | ReturnType<typeof deleteCard>