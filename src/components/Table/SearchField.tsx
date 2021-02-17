import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import { useDispatch } from 'react-redux'
import { packsType } from '../../api/packs-api'
import { addCardsThunk } from '../../redux/reducers/cards-pack-reducer'
import styles from '../../styles/Packs.module.css'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search' 


export const SearchField = ({...other}) => {
    
    const  dispatch = useDispatch()

    const addPackHandler = (pack: packsType) => {
        dispatch(addCardsThunk(pack))
    }

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
