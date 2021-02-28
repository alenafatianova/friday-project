import { AppRootStateType } from './../store';
import {CardsPackResponseType,  packsAPI} from "../../api/packs-api";
import { ThunkDispatch } from 'redux-thunk';

export const initialPacksState: initialPacksStateType = {
    cardPacks: [], //-- список всех карточек
    cardPacksTotalCount: 50, //-- количество колод 
    maxCardsCount: 10,
    minCardsCount: 1, //-- минимальное кол-во карточек в колоде
    page: 1, //-- кол-во страниц, currentPage
    pageCount: 10, //--кол-во элементов на странице, perPage/pageSize
    packName: '',
    myPacks: false
} 
export type initialPacksStateType = {
    cardPacks: CardsPackResponseType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    packName: string
    myPacks: boolean
}

const GET_PACKS = 'friday-project/packs-reducer/GET_PACKS'
const SET_MY_PACKS = 'friday-project/packs-reducer/SET_MY_PACKS'
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
                cardPacks: action.cardPacks  
            }
        }
        case SET_MY_PACKS: {
            return {
                ...state,
                myPacks: action.myPacks
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
               page: action.page
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
export const getCardsPacksAC = (cardPacks: CardsPackResponseType[]) => ({type: GET_PACKS,  cardPacks} as const)
export const addPackAC = (cardPacks: CardsPackResponseType[]) => ({type: ADD_PACK, cardPacks} as const)
export const changePackAC = (_id: string, name: string) => ({type: CHANGE_PACK, _id, name} as const)
export const deletePackAC = (_id: string) => ({type: DELETE_PACK, _id} as const)
export const setCurrentPageAC = (page: number) => ({type: SET_CURRENT_PAGE, page} as const)
export const searchByNameAC = (packName: string) => ({type: SEARCH_BY_NAME, packName} as const)
export const setPacksSizeAC = (pageCount: number) => ({type: SET_PACKS_SIZE, pageCount} as const)
export const setMyPacksAC = (myPacks: boolean) => ({type: SET_MY_PACKS, myPacks} as const)

//---- thunks

type thunksType = ThunkDispatch<AppRootStateType, {}, cardsPacksActiontype>

export const getPacksThunk = (page: number, pageCount: number) =>  async(dispatch: thunksType, getState: () => AppRootStateType) => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    await packsAPI.getCardsPack(page, pageCount)
        .then(res => {
            dispatch(getCardsPacksAC(res.data.cardPacks))
        })
    .catch((err) => {
        alert(err) 
    }) 
}

export const addPackThunk = (name: string) => async(dispatch: thunksType, getState: () => AppRootStateType) => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    const user_id = getState().profile._id
    await packsAPI.addCardsPack(name)
        .then(res => {
            dispatch(getPacksThunk(page, pageCount))
        })
        .catch(err =>  alert(err))
}

export const updatePackThunk = (_id: string, name: string) => async(dispatch: thunksType,  getState: () => AppRootStateType) => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    const _id = getState().profile._id
    await packsAPI.changeCardsPack(_id, name)
        .then(res => {
            dispatch(changePackAC(res.data._id, res.data.name))
            dispatch(getPacksThunk(page, pageCount))
        })
        .catch(err => alert(err))
    
}
export const deletePackThunk = (_id: string) => async(dispatch: thunksType,  getState: () => AppRootStateType) => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    await packsAPI.deleteCardsPack(_id)
        .then(res => {
            dispatch(deletePackAC(res.data._id))
            dispatch(getPacksThunk(page, pageCount))
        })
       .catch(err => alert(err)) 
}


//----action types
export type cardsPacksActiontype = 
    | ReturnType<typeof getCardsPacksAC> 
    | ReturnType<typeof addPackAC>
    | ReturnType<typeof changePackAC>
    | ReturnType<typeof deletePackAC>
    | ReturnType<typeof searchByNameAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPacksSizeAC>
    | ReturnType <typeof setMyPacksAC>
    
