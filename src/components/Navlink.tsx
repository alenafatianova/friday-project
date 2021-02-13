import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/navlink.module.css'

export const  Navlink = () => {
    return (
        <div className={styles.mainDiv}>
            <div><NavLink to={'/profile'}>Profile</NavLink></div>
            <div><NavLink to={'/cards'}>Cards </NavLink></div>
            {/* <div><NavLink to={'/404'} >404</NavLink></div> */}
            <div><NavLink to={'/forgotPassword'}>Forgot Password</NavLink></div>
            <div> <NavLink to={'/resetPassword'}>Reset Password</NavLink></div>
            <NavLink to={'/test'}>Test</NavLink>
        </div>
    )
}
