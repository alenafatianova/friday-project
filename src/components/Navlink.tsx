import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/navlink.module.css'

export const  Navlink = () => {
    return (
        <div className={styles.mainDiv}>
          <div className={styles.linksContainer}>
            <NavLink to={'/profile'} className={styles.profileLink}>Profile</NavLink>
            <NavLink to={'/404'} className={styles.pageNotFoundLink} >404</NavLink>
            <NavLink to={'/recoveryPassword'} className={styles.recoveryLink}>Recovery Password</NavLink>
            <NavLink to={'/resetPassword'} className={styles.resetLink}>Reset Password</NavLink>
            <NavLink to={'/test'} className={styles.testLink}>Test</NavLink>
          </div>
        </div>
    )
}
