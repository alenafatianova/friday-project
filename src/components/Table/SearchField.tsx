import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import { useDispatch } from 'react-redux'
import { packsType } from '../../api/packs-api'
import { addCardsThunk } from '../../redux/reducers/cards-pack-reducer'
import styles from '../../styles/Packs.module.css'
 

 
export const SearchField = () => {
    
    const  dispatch = useDispatch()

    const addPackHandler = (pack: packsType) => {
        dispatch(addCardsThunk(pack))
    }

    return (
        <div>
            <Toolbar>
                <form>
                    <TextField id="standard-basic" label="Add new pack"/>
                </form>
                <button className={styles.packsAddButton} onClick={() => addPackHandler}>Add</button>
             </Toolbar> 
        </div>
    )
}
