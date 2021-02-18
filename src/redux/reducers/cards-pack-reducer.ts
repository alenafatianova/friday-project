import { CardsPackType, packsAPI } from './../../api/packs-api';
import { Dispatch } from 'redux';
import React from 'react'


export const initialPacksState = {
    cardsPack: [],
  
}
export type initialPacksStateType = {
    cardsPack: CardsPackType[]
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
                cardsPack: action.packs
            }
        }
        case ADD_PACK: {
            return {
                ...state,
                cardsPack: [...state.cardsPack, action.cardsPack]
            }
        }
        case CHANGE_PACK: {
            return {
                ...state, 
                cardsPack: state.cardsPack.map(pack => pack._id === action._id ? {...pack, name: action.name} : pack)
            }
        }
        case DELETE_PACK: {
            return {
                ...state,
                cardsPack: state.cardsPack.filter(pack => pack._id != action._id)
            }
        }
        default: 
            return state;
    }
}


//---- actions
export const getCardsPacksAC = (packs: CardsPackType[]) => ({type: GET_PACKS, packs} as const)
export const addCardsPackAC = (cardsPack: CardsPackType) => ({type: ADD_PACK, cardsPack} as const)
export const changeCardsPackAC = (_id: string, name: string) => ({type: CHANGE_PACK, _id, name} as const)
export const deleteCardsPackAC = (_id: string) => ({type: DELETE_PACK, _id} as const)

//---- thunks
export const getPacksThunk = () => async (dispatch: Dispatch) => {
    const packs = await packsAPI.getCardsPack()
    .then(res => res.data.cardPacks)
    dispatch(getCardsPacksAC(packs))
}
export const addCardsThunk = (cardsPack: CardsPackType) => async(dispatch: Dispatch) => {
    await packsAPI.addCardsPack(cardsPack);
    dispatch(addCardsPackAC(cardsPack))
    //dispatch(getCardsPacks(packs))
}
export const updateCardsThunk = (_id: string, name: string) => (dispatch: Dispatch) => {
    packsAPI.changeCardsPack(_id, name)
    dispatch(changeCardsPackAC(_id, name))
    //dispatch(getCardsPacks())
}
export const deleteCardsThunk = (_id: string) => (dispatch: Dispatch) => {
    packsAPI.deleteCardsPack(_id)
    dispatch(deleteCardsPackAC(_id))
    //dispatch(getCardsPacks())
}


//----action types
export type cardsPacksActiontype = 
    | ReturnType<typeof getCardsPacksAC> 
    | ReturnType<typeof addCardsPackAC>
    | ReturnType<typeof changeCardsPackAC>
    | ReturnType<typeof deleteCardsPackAC>