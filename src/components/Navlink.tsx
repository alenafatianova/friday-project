import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/navlink.module.css'

export const  Navlink = () => {
    return (
        <div className={styles.mainDiv}>
          
           <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/404'}>404</NavLink>
            <NavLink to={'/recoveryPassword'}>Recovery Password</NavLink>
            <NavLink to={'/resetPassword'}>Reset Password</NavLink>
            <NavLink to={'/test'}>Test</NavLink>
           
        </div>
    )
}
