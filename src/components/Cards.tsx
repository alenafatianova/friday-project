import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styles from "../styles/Cards.module.css";
import {cardType} from "../api/card-api";
import {addCardTC} from "../redux/reducers/card-reducer";
import {AppRootStateType} from "../redux/store";


export const Cards = () => {
    const {cardsTotalCount, maxGrade, minGrade, page, pageCount, packUserId} = useSelector<AppRootStateType, any>(state => state.card)
    const dispatch = useDispatch()
    // const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    //
    // if (!isLoggedIn) {
    //     return <Redirect to={'/login'} />
    // }

    const addCardHandler = (card: cardType) => {
        dispatch(addCardTC(card))
        console.log(card)
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
            {/*<div>*/}
            {/*    <div>cardsTotalCount: {cardsTotalCount}</div>*/}
            {/*    <div> maxGrade: {maxGrade}</div>*/}
            {/*    <div>minGrade: {minGrade}</div>*/}
            {/*    <div>page: {page}*/}
            {/*    <div>pageCount: {pageCount}</div>*/}
            {/*        <div>packUserId: {packUserId}</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
