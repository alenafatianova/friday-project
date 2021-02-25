import React, { useState } from 'react'
import styles from '../styles/Packs.module.css'
import { TableComponent } from './Table/TableComponent'
import { SearchField } from './Table/SearchField'
import { Modal } from './Modal'
import { ModalContainer } from './Table/ModalContainer'


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
           <ModalContainer/>
         </div>
        </div>
    )
}
