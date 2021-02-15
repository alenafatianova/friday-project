import {Dispatch} from "redux";
import {setAppErrorAC, setAppStatusAC} from "./app-reducer";
import {cardAPI, cardPostType} from "../../api/card-api";


const initialState: InitialStateType = {

}

export const cardReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET-CARD':
            return {...state,  ...action.data}
        case 'POST-CARD':
            return {...state,  card: action.card}
        case 'UPDATE-CARD':
            return {...state,  id: action.id, question: action.question, comment: action.comment}
        case 'DELETE-CARD':
            return {...state,  id: action.id}
        default:
            return state
    }
}


export type InitialStateType = {

}

//actions
export const getCardAC = (data: any) => ({type: 'GET-CARD', data} as const);
export const postCardAC= (card: cardPostType) => ({type: 'POST-CARD', card} as const);
export const updateCardAC= (id:string, question?: string, comment?: string) =>
    ({type: 'UPDATE-CARD',id, question, comment} as const);
export const deleteCardAC= (id: string) => ({type: 'DELETE-CARD', id} as const);


//thunks
export const getCardTC=(data:getCardType)=>(dispatch: Dispatch)=>{
    dispatch(setAppStatusAC('loading'))
    cardAPI.getCard().then(res => {
            dispatch(getCardAC (res.data))
            dispatch(setAppStatusAC('succeeded'))
        })
   };

export const postCardTC=(card: cardPostType)=>(dispatch: Dispatch)=>{
    dispatch(setAppStatusAC('loading'))
    cardAPI.postCard(card).then(res => {
        dispatch(postCardAC (card))
        dispatch(getCardAC (card))
        dispatch(setAppStatusAC('succeeded'))
    })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ' more details in the console');
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
        })
};

export const deleteCardTC=(id:string)=>(dispatch: Dispatch)=>{
    dispatch(setAppStatusAC('loading'))
    cardAPI.deleteCard(id).then(res => {
        dispatch(deleteCardAC(id))
        dispatch(getCardAC (id))
        dispatch(setAppStatusAC('succeeded'))
    })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ' more details in the console');
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
        })
};

export const updateCardTC=(id:string, question?: string, comment?: string)=>(dispatch: Dispatch)=>{
    dispatch(setAppStatusAC('loading'))
    cardAPI.putCard(id, question, comment).then(res => {
        dispatch(updateCardAC (id))
        dispatch(getCardAC (id))
        dispatch(setAppStatusAC('succeeded'))
    })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ' more details in the console');
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
        })
};

// types
export type ActionsType =
    | ReturnType<typeof getCardAC>
    | ReturnType<typeof postCardAC>
    | ReturnType<typeof updateCardAC>
    | ReturnType<typeof deleteCardAC>


type getCardType = {
    cardAnswer?: string
    cardQuestion?: string
    cardPack_id: string
    min?: number
    max?: number
    sortCards?: string
    page?: string
    pageCount?: number
}


