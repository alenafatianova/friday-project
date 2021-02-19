import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppRootStateType } from '../redux/store'
import styles from '../styles/Packs.module.css'
import { TableComponent } from './Table/TableComponent'
import { SearchField } from './Table/SearchField'

export const Packs = () => {
    
    const [loading, setLoading] = useState<boolean>(false)
   
    // const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    // if (!isLoggedIn) {
    //     return <Redirect to={'/login'} /> 
    // }

    return (
        <div className={styles.packsMainDiv}>
         <div className={styles.tableContainer}>
         <div><input className={styles.packsCheckbox} type="checkbox"/> My Packs </div>
            <SearchField/>
            <TableComponent />
             
         </div>
        </div>
    )
}
