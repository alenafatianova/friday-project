import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { packsType } from '../api/packs-api'
import { addCardsThunk, getCardsPacks } from '../redux/reducers/cards-pack-reducer'
import { AppRootStateType } from '../redux/store'
import styles from '../styles/Packs.module.css'

export const Packs = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const  dispatch = useDispatch()
    // const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    // if (!isLoggedIn) {
    //     return <Redirect to={'/login'} /> 
    // }

    const addPackHandler = (pack: packsType) => {
        dispatch(addCardsThunk(pack))
        console.log(pack)
    }

    return (
        <div className={styles.packsMainDiv}>
            <div><input className={styles.packsCheckbox} type="checkbox"/> My Packs </div>
            <div className={styles.packsTitle}><span>Cards Pack</span></div>
         <div className={styles.tableContainer}>
             <div>Name</div>
             <div>Cards Count</div>
             <div>Updated</div>
             <div>URL</div>
             <div>
                 <button className={styles.packsAddButton} onClick={() => addPackHandler}>Add</button>
             </div>
         </div>
        </div>
    )
}
