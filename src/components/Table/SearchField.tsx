import React, { ChangeEvent, useCallback, useState } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { addCardsThunk } from '../../redux/reducers/cards-pack-reducer'
import styles from '../../styles/Packs.module.css'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search' 
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import { CardsPackType } from '../../api/packs-api'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { AppRootStateType } from '../../redux/store'



    


export const SearchField = React.memo(() => {

    const  dispatch = useDispatch();

    const addPackHandler = useCallback((cardsPack: CardsPackType) => { 
        dispatch(addCardsThunk(cardsPack))
    }, [])

    const [searchFn, setSearchFn] = useState('')
    const packList = useSelector<AppRootStateType, Array<CardsPackType>>(state => state.packs.cardPacks)
    
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
       // setSearchFn((packs: CardsPackType[]) => target.value === '' ? packs : packs.filter(p => p.name.includes(target.value)))   
    }

    return (
        <div>
            <Toolbar>
                <FormControl>
                    <InputLabel>Search</InputLabel>
                    <Input 
                       id='searchingInput'
                       onChange={handleSearch}
                        inputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                               <Search/>
                               </InputAdornment>
                           ),
                       }}/>
                       
                </FormControl>
                <button className={styles.searchButton}>Search</button>
                <div className={styles.packsAddButtonDiv}>
                    <button className={styles.packsAddButton} onClick={() => addPackHandler}>Add</button>
                </div>
             </Toolbar> 
        </div>
    )
})
