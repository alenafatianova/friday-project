import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setCurrentPageAC } from '../../redux/reducers/cards-pack-reducer'
import { AppRootStateType } from '../../redux/store'
import styles from '../../styles/pagination.module.css'


export const Pagination = () => {
    const totalPacksAmount = useSelector<AppRootStateType, number>(state => state.packs.cardPacksTotalCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page)
    const packsPerPage = useSelector<AppRootStateType, number>(state => state.packs.pageCount)
    
    
    const pages = []
    const pagesAmount = Math.ceil(totalPacksAmount / packsPerPage)
    for (let i = 1; i <= pagesAmount; i++ ) {
        pages.push(i)
    }
    const dispatch = useDispatch()
    const onChangePageHandler = useCallback((currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    },[dispatch])

     

    return (
        <div>
        <div className={styles.paginationContainer}>
          <div className={styles.pagination}>
              <div className={styles.prevButton}>previous</div>
              {
                  pages.map(page => { 
                      return <li 
                        className={currentPage === page ? styles.selectedPage : ''} 
                        onClick={() => onChangePageHandler(page)}>
                           <a href="#"> {page} </a> 
                        </li>
                  })
              }
               <div className={styles.nextButton}>next</div>
          </div>
        </div>
        </div>
    )
}

