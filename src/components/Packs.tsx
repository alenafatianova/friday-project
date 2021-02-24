import React, { useEffect } from 'react'
import styles from '../styles/Packs.module.css'
import { TableComponent } from './Table/TableComponent'
import { SearchField } from './Table/SearchField'
import { getPacksThunk } from '../redux/reducers/cards-pack-reducer'
import { useDispatch } from 'react-redux'


export const Packs = () => {
   
    // const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    // if (!isLoggedIn) {
    //     return <Redirect to={'/login'} /> 
    // }
   
    return (
        <div className={styles.packsMainDiv}>
         <div className={styles.tableContainer}>
         <div><input className={styles.packsCheckbox} type="checkbox"/> My Packs </div>
            <SearchField />
            <TableComponent />
         </div>
        </div>
    )
}
