import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from "../styles/cards.module.css";
import {AppRootStateType} from "../redux/store";
import {RequestStatusType} from "../redux/reducers/app-reducer";
import {ResponseTypeCardsData} from "../api/card-api";
import {
    addCardsThunk,
    deleteCardsThunk,
    getCardsThunk,
    setCurrentPageAC,
    setPageSizeAC,
} from "../redux/reducers/card-reducer";
import { useParams } from 'react-router-dom';


export const Cards = () => {
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.cards.status)
    const cards = useSelector<AppRootStateType, ResponseTypeCardsData[] | null>(state => state.cards.cards)
    const error = useSelector<AppRootStateType, string | null> (state => state.cards.error)
    const pageSize = useSelector((state: AppRootStateType) => state.cards.pageSize)
    const currentPage= useSelector((state: AppRootStateType) => state.cards.pageCurrent)

    // cardsId - params from route for get Id from params
    const {cardId} = useParams<{ cardId: string }>()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCardsThunk(pageSize, currentPage, cardId))
    }, [pageSize, currentPage])
    const addCardHandler = () => {

    }
    const onAddCardHandler = (question: string, answer: string) => {
        dispatch(addCardsThunk(cardId, question, answer))
    }
    const onDeleteCardHandler = (id: string) => {
        dispatch(deleteCardsThunk(cardId,id))
    }

    const onChangeOptionHandler = (option: string) => {
        dispatch(setPageSizeAC(+option))
    }
    const onPageChangeHandler = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
    }

    return (<div className={styles.cardsMainDiv}>
            {/*<div><input className={styles.cardsCheckbox} type="checkbox"/> My Cards </div>*/}
            <div className={styles.cardsTitle}><span>Cards</span></div>
            <div className={styles.tableContainer}>
                <div>Question</div>
                <div>Answer</div>
                <div>Grade</div>
                <div>Updated</div>
                <div>URL</div>
                <div>
                    <button className={styles.cardsAddButton} onClick={() => addCardHandler}>Add</button>
                </div>
            </div>

        </div>
    )
}
