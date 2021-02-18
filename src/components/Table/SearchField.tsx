import React, { useCallback } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import { useDispatch } from 'react-redux'
import { addCardsThunk } from '../../redux/reducers/cards-pack-reducer'
import styles from '../../styles/Packs.module.css'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search' 
import {makeStyles} from '@material-ui/core'
import { CardsPackType } from '../../api/packs-api'


export const SearchField = React.memo(() => {
    
    const  dispatch = useDispatch()

    const addPackHandler = useCallback((cardsPack: CardsPackType) => {
        dispatch(addCardsThunk(cardsPack))
    }, [])


    return (
        <div>
            <Toolbar>
                <FormControl>
                    <TextField 
                       id='searchingInput'
                       label='Search for the pack'
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                               <Search/>
                               </InputAdornment>
                           ),
                       }}/>
                </FormControl>
                <button className={styles.packsAddButton} onClick={() => addPackHandler}>Add</button>
             </Toolbar> 
        </div>
    )
})
