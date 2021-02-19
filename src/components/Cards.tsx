import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppRootStateType } from '../redux/store'
import styles from '../styles/Packs.module.css'

export const Cards = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    if (!isLoggedIn) {
        return <Redirect to={'/login'} /> 
    }

    return (
        <div>
           
        </div>
    )
}
