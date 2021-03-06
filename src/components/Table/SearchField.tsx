import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { searchByNameAC } from '../../redux/reducers/cards-pack-reducer'
import styles from '../../styles/Packs.module.css'


export const SearchField = React.memo(() => {

    const  dispatch = useDispatch();
    
    const searchInputHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault();
        dispatch(searchByNameAC(e.currentTarget.value))
    }

    return (
        <div>
           <form>
                <input placeholder='Search' onClick={() => searchInputHandler} />
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
