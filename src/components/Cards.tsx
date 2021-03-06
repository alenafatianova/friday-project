import {useEffect} from 'react'
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
import { TableCardsComponent } from './Table/TableCardsComponent';


export const Cards = () => {
    const pageSize = useSelector((state: AppRootStateType) => state.cards.pageSize)
    const currentPage= useSelector((state: AppRootStateType) => state.cards.pageCurrent)

    // cardsId - params from route for get Id from params
    const {cardId} = useParams<{ cardId: string }>()
    const dispatch = useDispatch()
     
    useEffect(() => {
        dispatch(getCardsThunk( cardId, currentPage, pageSize))
    }, [dispatch, currentPage, pageSize])
  

    return (
        <div className={styles.cardsMainDiv}>
            {/*<div><input className={styles.cardsCheckbox} type="checkbox"/> My Cards </div>*/}
             <TableCardsComponent/>
        </div>
    )
}
