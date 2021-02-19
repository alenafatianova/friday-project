import { CardsPackType, packsAPI, getPackResponseType } from './../../api/packs-api';
import { Dispatch } from 'redux';
import React from 'react'


export const initialPacksState = {
    cardPacks: [],
    cardPacksTotalCount: 14,
    maxCardsCount: 5,
    minCardsCount: 0,
    page: 1,
    pageCount: 5
}
export type initialPacksStateType = {
    cardPacks: CardsPackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}


const GET_PACKS = 'friday-project/packs-reducer/GET_PACKS'
const ADD_PACK = 'friday-project/packs-reducer/ADD_PACK'
const CHANGE_PACK = 'friday-project/packs-reducer/CHANGE_PACK'
const DELETE_PACK = 'friday-project/packs-reducer/DELETE_PACK'


export const PacksReducer = (state: initialPacksStateType = initialPacksState, action: cardsPacksActiontype): initialPacksStateType => {
    switch(action.type) {
        case GET_PACKS: {
            return {
                ...state,
                ...action.getPacks
            }
        }
        case ADD_PACK: {
            return {
                ...state,
                //cardsPack: [...state.cardsPack, action.cardsPack]
            }
        }
        case CHANGE_PACK: {
            return {
                ...state, 
                cardPacks: state.cardPacks.map(pack => pack._id === action._id ? {...pack, name: action.name} : pack)
            }
        }
        case DELETE_PACK: {
            return {
                ...state,
                cardPacks: state.cardPacks.filter(pack => pack._id != action._id)
            }
        }
        default: 
            return state;
    }
}


//---- actions
export const getCardsPacksAC = (getPacks: getPackResponseType) => ({type: GET_PACKS, getPacks} as const)
export const addCardsPackAC = (cardsPack: CardsPackType) => ({type: ADD_PACK, cardsPack} as const)
export const changeCardsPackAC = (_id: string, name: string) => ({type: CHANGE_PACK, _id, name} as const)
export const deleteCardsPackAC = (_id: string) => ({type: DELETE_PACK, _id} as const)

//---- thunks
export const getPacksThunk = (page: number, pageCount: number) => async (dispatch: Dispatch) => {
    // const packs = await packsAPI.getCardsPack(page, pageCount)
    // .then(res => res.data.cardPacks)
    // dispatch(getCardsPacksAC(packs))
    await packsAPI.getCardsPack(page, pageCount)
        .then(res => dispatch(getCardsPacksAC(res.data)))
        .catch(err => alert(err))
}
export const addCardsThunk = (cardsPack: CardsPackType) => async(dispatch: Dispatch) => {
    await packsAPI.addCardsPack(cardsPack)
        .then(res => {
            dispatch(addCardsPackAC(res.data.newCardsPack))
            getPacksThunk(1, 20)
        })
        .catch(err =>  alert(err))
}

export const updateCardsThunk = (_id: string, name: string) => async(dispatch: Dispatch) => {
    // const packs = await packsAPI.changeCardsPack(_id, name)
    // .then(res => res.data.updatedCardsPack)
    // dispatch(changeCardsPackAC(_id, name))
    // //dispatch(getCardsPacksAC(packs))
    await packsAPI.changeCardsPack(_id, name)
        .then(res => res.data.updatedCardsPack)
        .then(updatedCardsPack => {
            dispatch(changeCardsPackAC(updatedCardsPack._id, updatedCardsPack.name))
            getPacksThunk(1, 20)
        })
        .catch(err => alert(err))
    
}
export const deleteCardsThunk = (_id: string) => async(dispatch: Dispatch) => {
    // const packs = await packsAPI.deleteCardsPack(_id)
    // .then(res => res.data.deletedCardsPack)
    // dispatch(deleteCardsPackAC(_id))
    // //dispatch(getCardsPacksAC(packs))
    await packsAPI.deleteCardsPack(_id)
        .then(res => {
            deleteCardsPackAC(res.data.deletedCardsPack._id)
            getPacksThunk(1, 20)
        })
       .catch(err => alert(err)) 
}


//----action types
export type cardsPacksActiontype = 
    | ReturnType<typeof getCardsPacksAC> 
    | ReturnType<typeof addCardsPackAC>
    | ReturnType<typeof changeCardsPackAC>
    | ReturnType<typeof deleteCardsPackAC>