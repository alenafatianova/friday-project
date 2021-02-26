import {ApiCardsGrade, ResponseTypeCardsGradeType} from "../../api/cards-grade";
import {RequestStatusType, setAppErrorAC} from "./app-reducer";
import {Dispatch} from 'redux'

type InitialStateType= {
    data: ResponseTypeCardsGradeType | null;
    status: RequestStatusType,
    error?: string | null
}


const initialState: InitialStateType = {
    data: null,
    status: "succeeded",
    error: null

}


export const CardsGradeReducer = (state:  InitialStateType = initialState, action: GradeActionsType):  InitialStateType => {
    switch (action.type) {
        case 'SET_CARDS_GRADE':
            return {...state, data: action.cardsGrade};
        case 'SET_STATUS':
            return {...state, status: action.status};
        case 'SET_ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}


//actions
export const setCardsGradeAC = (cardsGrade: ResponseTypeCardsGradeType) => ({
    type: 'SET_CARDS_GRADE', cardsGrade} as const)

export const setErrorGradeAC = (error: string ) => ({
    type: "SET_ERROR", error} as const)

export const setStatusGradeAC = (status: RequestStatusType) => ({
    type: 'SET_STATUS', status} as const)

//thunks
export const getCardsGrade = (card_id: string, grade?: number) => (dispatch: Dispatch) => {
    dispatch(setStatusGradeAC("loading"))
    ApiCardsGrade.putCardsGrade(card_id, grade)
        .then((res) => {dispatch(setCardsGradeAC(res.data))})
        .catch(e => {
            const error =  e.response ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error))
            dispatch(setStatusGradeAC('failed'))
        })
}


export type GradeActionsType =
    | ReturnType<typeof setCardsGradeAC >
    | ReturnType<typeof setStatusGradeAC>
    | ReturnType<typeof setErrorGradeAC >

