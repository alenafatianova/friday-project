import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchByNameAC } from '../../redux/reducers/cards-pack-reducer'
import styles from '../../styles/Packs.module.css'


export const SearchField = React.memo(() => {

    const  dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('')
    
    const searchInputHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault();
        setSearchInput(e.currentTarget.value)
    }

    return (
        <div>
           <form>
                <input placeholder='Search' onChange={searchInputHandler} value={searchInput} />
                <button 
                    type='submit'
                    className={styles.searchButton}
                    onClick={() => searchInputHandler}>
                        Search
                </button>
            </form>
        </div>
    )
})
