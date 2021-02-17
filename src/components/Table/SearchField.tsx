import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import { useDispatch } from 'react-redux'
import { addCardsThunk, CardsPackType } from '../../redux/reducers/cards-pack-reducer'
import styles from '../../styles/Packs.module.css'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search' 
import {makeStyles} from '@material-ui/core'


export const SearchField = () => {
    
    const  dispatch = useDispatch()

    const addPackHandler = (cardsPack: CardsPackType) => {
        dispatch(addCardsThunk(cardsPack))
    }

    const useStyles = makeStyles((theme => {

    }))

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
}
