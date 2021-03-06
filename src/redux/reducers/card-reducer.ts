import {ApiCards, ResponseTypeCardsData} from "../../api/card-api";
import {RequestStatusType, setAppErrorAC} from "./app-reducer";
import { Dispatch } from 'redux';
import { ThunkDispatch } from "redux-thunk";
import { AppRootStateType } from "../store";


export type stateProps = {
    cards: Array<ResponseTypeCardsData> 
    status: RequestStatusType,
    error: string,
    pageSize: number
    pageCurrent: number
}

const initialState: stateProps = {
    cards: [] as  Array<ResponseTypeCardsData>,
    status: "succeeded",
    error: '',
    pageSize: 3,
    pageCurrent:1
}


export const CardsReducer = (state: stateProps = initialState, action: cardsActiontype): stateProps => {
    switch (action.type) {
           case "GET-CARDS":
            return {...state, cards: action.cards}
        case "SET-STATUS":
            return {...state, status: action.status};
        case "SET-ERROR":
            return {...state, error: action.error}
        case "SET-CURRENT-PAGE":
            return {...state, pageCurrent: action.pageCurrent}
        case "SET-PAGE-SIZE":
            return {...state, pageSize:action.pageSize}
        default:
            return state
    }

}

//actions

export const setCardsAC = (cards: ResponseTypeCardsData[]) => ({
    type: "GET-CARDS", cards} as const)
export const setPageSizeAC = (pageSize: number) => ({
    type: "SET-PAGE-SIZE",pageSize }as const)
export const setCurrentPageAC = (pageCurrent: number) => ({
    type: "SET-CURRENT-PAGE", pageCurrent }as const)
export const setStatusAC = (status: RequestStatusType)=> ({
    type: "SET-STATUS", status }as const)
export const getErrorAC = (error: string)=> ({
    type: "SET-ERROR", error}as const)

//thunks type 
type thunkType = ThunkDispatch<AppRootStateType, {}, cardsActiontype> 
//thunks
export const getCardsThunk = (cardsPack_id: string, currentPage?:number, pageSize?:number) => async(dispatch: thunkType, getState: () => AppRootStateType) => {
   
    dispatch(setStatusAC('loading'))
    await ApiCards.getCards(cardsPack_id, currentPage, pageSize)
        .then((res) => {
            //console.log('cards:', res.data.cards)
            dispatch(setCardsAC(res.data.cards))
            dispatch(setStatusAC('succeeded'))
        })
        .catch((e) => {
            const error =  e.response ? e.response.data.error
                : (e.message + ', more details in the console');
                //@ts-ignore
            dispatch(setAppErrorAC(error))
            dispatch(setStatusAC('failed'))
        })
        .finally(() => {
            dispatch(setStatusAC('succeeded'))
        })
};

export const addCardsThunk = (cardsPack_id: string, question: string, answer: string) =>
    async(dispatch: thunkType, getState: () => AppRootStateType) => {
         dispatch(setStatusAC('loading'))
        await ApiCards.addCards(cardsPack_id, question, answer)
            .then(() => {
                dispatch(getCardsThunk(cardsPack_id))
            })
            .catch((e) => {
                const error =  e.response ? e.response.data.error
                    : (e.message + ', more details in the console');
                     //@ts-ignore
                dispatch(setAppErrorAC(error))
                dispatch(setStatusAC('failed'))
            })

    }


export const deleteCardsThunk = (cardsPack_id: string,_id: string) =>
    (dispatch: Dispatch) => {
        dispatch(setStatusAC('loading'))
        ApiCards.deleteCards(_id)
            .then(() => {
                //@ts-ignore
                dispatch(getCardsThunk(pageSize, currentPage, cardsPack_id))
            })
            .catch(e => {
                const error =  e.response ? e.response.data.error
                    : (e.message + ', more details in the console');
                dispatch(setAppErrorAC(error))
                dispatch(setStatusAC('failed'))
            })
    }


export const updateCardsThunk = (cardsPack_id: string,_id: string, question: string)=>
    (dispatch: Dispatch) => {
         dispatch(setStatusAC('loading'))
        ApiCards.putCards(_id, question)
            .then(()=> {
                //@ts-ignore
                dispatch(getCardsThunk(pageSize, currentPage, cardsPack_id))
            })
            .catch(e => {
                const error =  e.response ? e.response.data.error
                    : (e.message + ', more details in the console');
                dispatch(setAppErrorAC(error))
                dispatch(setStatusAC('failed'))
            })
    }

//----action types
export type cardsActiontype =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setPageSizeAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof getErrorAC >
    | ReturnType<typeof setStatusAC>
