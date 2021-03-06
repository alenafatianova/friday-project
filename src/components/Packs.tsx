import React, { useEffect } from 'react'
import styles from '../styles/Packs.module.css'
import { TableComponent } from './Table/TableComponent'
import { SearchField } from './Table/SearchField'
import { useDispatch, useSelector } from 'react-redux'
import { getPacksThunk } from '../redux/reducers/cards-pack-reducer'
import { AppRootStateType } from '../redux/store'



export const Packs = () => {

    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(getPacksThunk())
    }, [dispatch])

 
   
    return (
        <div className={styles.packsMainDiv}>
         <div className={styles.tableContainer}>
         <div>
             <input 
                className={styles.packsCheckbox} type="checkbox"
         /> My Packs </div>
            <SearchField />
            <TableComponent />
         </div>
        </div>
    )
}
