import React from 'react'
import { NavLink} from 'react-router-dom'
import styles from '../styles/header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {logoutTC} from "../redux/reducers/login-reducer";
import {RequestStatusType} from "../redux/reducers/app-reducer";


export const Header = () => {
    const isLoggedIn=useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const isStatus=useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const  dispatch =useDispatch()

    // Обработчк кнопки вылогиниться
    const logoutHandler=()=> {
        dispatch(logoutTC())
    }

    // useEffect(()=> {
    //     dispatch(initializeAppTC())
    // }, [])
    //
    // if (!isInitialized) {
    //     return <Redirect to={'/login'}/>
    // }

    return (
        <div className={styles.mainDiv}>
           <div className={styles.linksContainer}>
           <div className={styles.login}>
               {isStatus === 'loading' ? <div >Loading...</div> : ''}
               {
               isLoggedIn 
               ? <button 
                    disabled={isStatus === 'loading'} 
                    onClick={logoutHandler}
                    className={styles.logoutButton}>
                        Log Out
                </button> 
               : <NavLink to={'/login'}> Login </NavLink>
               }
            </div>
            <div className={styles.signup}>
              <NavLink to={'/signup'}>Sign In</NavLink>  
            </div>
           </div>
        </div>
    )
}
