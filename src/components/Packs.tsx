import React, { useEffect } from 'react'
import styles from '../styles/Packs.module.css'
import { TableComponent } from './Table/TableComponent'
import { SearchField } from './Table/SearchField'
import { ModalContainer } from './Modal/ModalContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getPacksThunk } from '../redux/reducers/cards-pack-reducer'
import { AppRootStateType } from '../redux/store'


export const Packs = () => {
  
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const page = useSelector<AppRootStateType, number>(state => state.packs.page)
    const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount)
    const id = useSelector<AppRootStateType, string>(state => state.profile._id)
    // if (!isLoggedIn) {
    //     return <Redirect to={'/login'} /> 
    // }
    
    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(getPacksThunk(page, pageCount, id))
    }, [dispatch, page, pageCount])

    // const onMyPacksChecked = useCallback(() => {
    //     dispatch(setMyPacksAC(!myPacks))
    // },[dispatch, myPacks])
   
    return (
        <div className={styles.packsMainDiv}>
         <div className={styles.tableContainer}>
         <div>
             <input 
                className={styles.packsCheckbox} type="checkbox"
                // onChange={onMyPacksChecked}
         /> My Packs </div>
            <SearchField />
            <TableComponent />
           
         </div>
        </div>
    )
}
