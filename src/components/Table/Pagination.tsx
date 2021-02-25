import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPageAC } from '../../redux/reducers/cards-pack-reducer'
import { AppRootStateType } from '../../redux/store'
import styles from '../../styles/pagination.module.css'


export const Pagination = () => {
    const totalPacksAmount = useSelector<AppRootStateType, number>(state => state.packs.cardPacksTotalCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page)
    const packsPerPage = useSelector<AppRootStateType, number>(state => state.packs.pageCount)
    const [options, setOptions] = useState([5, 10,25])
    
    const pages = []
    const pagesAmount = Math.ceil(totalPacksAmount / packsPerPage)
    for (let i = 1; i <= pagesAmount; i++ ) {
        pages.push(i)
    }
    const dispatch = useDispatch()
    const onChangePageHandler = (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    }

    return (
        <div>
          <div>
              {
                  pages.map(page => {
                      return <span 
                        className={currentPage === page ? styles.selectedPage : ''} 
                        onClick={() => onChangePageHandler(page)}>{page}</span>
                  })
              }
          </div>
        </div>
    )
}

