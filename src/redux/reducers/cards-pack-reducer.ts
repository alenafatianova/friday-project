import { AppRootStateType } from './../store';
import {CardsPackResponseType,  packsAPI, PacksResponseType} from "../../api/packs-api";
import { ThunkDispatch } from 'redux-thunk';

export const initialPacksState: initialPacksStateType = {
    cardPacks: [] as Array<CardsPackResponseType>, //-- список всех карточек
    cardPacksTotalCount: 14, //-- количество колод 
    maxCardsCount: 4,
    minCardsCount: 1, //-- минимальное кол-во карточек в колоде
    page: 1, //-- кол-во страниц, currentPage
    pageCount: 10, //--кол-во элементов на странице, perPage/pageSize
    packName: ''
} 
export type initialPacksStateType = {
    cardPacks: Array<CardsPackResponseType> 
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    packName: string
}

const GET_PACKS = 'friday-project/packs-reducer/GET_PACKS'
const ADD_PACK = 'friday-project/packs-reducer/ADD_PACK'
const CHANGE_PACK = 'friday-project/packs-reducer/CHANGE_PACK'
const DELETE_PACK = 'friday-project/packs-reducer/DELETE_PACK'
const SET_CURRENT_PAGE = 'friday-project/packs-reducer/SET_CURRENT_PAGE'
const SEARCH_BY_NAME = 'friday-project/packs-reducer/SEARCH_BY_NAME'
const SET_PACKS_SIZE = 'friday-project/packs-reducer/SET_PACKS_SIZE'

export const PacksReducer = (state: initialPacksStateType = initialPacksState, action: cardsPacksActiontype) => {
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
                cardsPack: [...state.cardPacks, action.cardsPack]
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
        case SET_CURRENT_PAGE: {
            return {
                ...state,
               currentPage: action.currentPage
            }
        }
        case SET_PACKS_SIZE: {
            return {
                ...state,
                pageCount: action.pageCount
            }
        }
        case SEARCH_BY_NAME: {
            return {
                ...state,
                packName: action.packName
            }
        }
        default: 
            return state;
    }
}


//---- actions
export const getCardsPacksAC = (getPacks: Array<CardsPackResponseType>) => ({type: GET_PACKS,  getPacks} as const)
export const addCardsPackAC = (cardsPack: Array<CardsPackResponseType>) => ({type: ADD_PACK, cardsPack} as const)
export const changeCardsPackAC = (_id: string, name: string) => ({type: CHANGE_PACK, _id, name} as const)
export const deleteCardsPackAC = (_id: string) => ({type: DELETE_PACK, _id} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const searchByNameAC = (packName: string) => ({type: SEARCH_BY_NAME, packName} as const)
export const setPacksSizeAC = (pageCount: number) => ({type: SET_PACKS_SIZE, pageCount} as const)


//---- thunks

type thunksType = ThunkDispatch<AppRootStateType, {}, cardsPacksActiontype>

export const getPacksThunk = (page: number, pageCount: number, user_id: string) => async (dispatch: thunksType, getState: () => AppRootStateType) => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    const user_id = getState().profile._id
    await packsAPI.getCardsPack(page, pageCount, user_id)
        .then(res => {
            dispatch(getCardsPacksAC(res.data.cardPacks))
        })
    .catch((err) => {
        alert(err) 
    }) 
}

export const addCardsThunk = (name: string) => async(dispatch: thunksType, getState: () => AppRootStateType) => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    const user_id = getState().profile._id
    await packsAPI.addCardsPack(name)
        .then(res => {
            dispatch(getPacksThunk(page, pageCount, user_id))
        })
        .catch(err =>  alert(err))
}

export const updateCardsThunk = (_id: string, name: string) => async(dispatch: thunksType,  getState: () => AppRootStateType) => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    const user_id = getState().profile._id
    await packsAPI.changeCardsPack(_id, name)
        .then(res => {
            dispatch(changeCardsPackAC(res.data._id, res.data.name))
            dispatch(getPacksThunk(page, pageCount, user_id))
        })
        .catch(err => alert(err))
    
}
export const deleteCardsThunk = (_id: string) => async(dispatch: thunksType,  getState: () => AppRootStateType) => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    const user_id = getState().profile._id
    await packsAPI.deleteCardsPack(_id)
        .then(res => {
            dispatch(deleteCardsPackAC(res.data._id))
            dispatch(getPacksThunk(page, pageCount, user_id))
        })
       .catch(err => alert(err)) 
}


//----action types
export type cardsPacksActiontype = 
    | ReturnType<typeof getCardsPacksAC> 
    | ReturnType<typeof addCardsPackAC>
    | ReturnType<typeof changeCardsPackAC>
    | ReturnType<typeof deleteCardsPackAC>
    | ReturnType<typeof searchByNameAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPacksSizeAC>
    
