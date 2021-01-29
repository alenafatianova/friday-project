import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/header.module.css'


export const Header = () => {
    return (
        <div className={styles.mainDiv}>
           <div className={styles.linksContainer}>
           <div className={styles.login}>
                <NavLink to={'/login'}> Login </NavLink>
            </div>
            <div className={styles.signup}>
              <NavLink to={'/signup'}>Sign Up</NavLink>  
            </div>
           </div>
        </div>
    )
}
