import { packsAPI } from './../../api/packs-api';
import { Dispatch } from 'redux';
import React from 'react'




export const initialPacksState = {
    cardsPack: [],
    cardsPackTotalCount: 14,
    maxCardsCount: 4,
    minCardsCount: 0,
    page: 0,
    pageCount: 4
}
export type initialPacksStateType = {
    cardsPack: CardsPackType[]
    cardsPackTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number 
}

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


const GET_PACKS = 'friday-project/packs-reducer/GET_PACKS'
const ADD_PACK = 'friday-project/packs-reducer/ADD_PACK'
const CHANGE_PACK = 'friday-project/packs-reducer/CHANGE_PACK'
const DELETE_PACK = 'friday-project/packs-reducer/DELETE_PACK'


export const PacksReducer = (state: initialPacksStateType = initialPacksState, action: cardsPacksActiontype) => {
    switch(action.type) {
        case GET_PACKS: {
            return {
                ...state.cardsPack,
            }
        }
        case ADD_PACK: {
            return {
                ...state,
                packs: [...state.cardsPack, action.cardsPack]
            }
        }
        case CHANGE_PACK: {
            return {
                ...state, 
                packs: state.cardsPack.map(pack => pack._id === action._id ? {...pack, name: action.name} : pack)
            }
        }
        case DELETE_PACK: {
            return {
                ...state,
                packs: state.cardsPack.filter(pack => pack._id != action._id)
            }
        }
        default: 
            return state;
    }
}


//---- actions
export const getCardsPacks = () => ({type: GET_PACKS} as const)
export const addCardsPack = (cardsPack: CardsPackType) => ({type: ADD_PACK, cardsPack} as const)
export const changeCardsPack = (_id: string, name: string) => ({type: CHANGE_PACK, _id, name} as const)
export const deleteCardsPack = (_id: string) => ({type: DELETE_PACK, _id} as const)

//---- thunks
export const getPacksThunk = () => (dispatch: Dispatch) => {
    packsAPI.getCardsPack();
    dispatch(getCardsPacks())
}
export const addCardsThunk = (cardsPack: CardsPackType) => (dispatch: Dispatch) => {
    packsAPI.addCardsPack(cardsPack);
    dispatch(addCardsPack(cardsPack))
    dispatch(getCardsPacks())
}
export const updateCardsThunk = (_id: string, name: string) => (dispatch: Dispatch) => {
    packsAPI.changeCardsPack(_id, name)
    dispatch(changeCardsPack(_id, name))
    dispatch(getCardsPacks())
}
export const deleteCardsThunk = (_id: string) => (dispatch: Dispatch) => {
    packsAPI.deleteCardsPack(_id)
    dispatch(deleteCardsPack(_id))
    dispatch(getCardsPacks())
}
//----action types
export type cardsPacksActiontype = 
    | ReturnType<typeof getCardsPacks> 
    | ReturnType<typeof addCardsPack>
    | ReturnType<typeof changeCardsPack>
    | ReturnType<typeof deleteCardsPack>