import styles from '../styles/App.module.css';
import { HashRouter, Redirect, Route } from 'react-router-dom'
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Profile } from './Profile';
import { Page404 } from './Page404';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';
import { TestPage } from './TestPage'; 
import { Header } from './Header';
import React from 'react';
import { Navlink } from './Navlink';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
//import {initializeAppTC} from "../redux/reducers/app-reducer";


export const App = () => {
    const isInitialized=useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    //const  dispatch =useDispatch()


    // useEffect(()=> {
    //
    //     dispatch(initializeAppTC())
    // }, [])
    // //
    // if (!isInitialized) {
    //     return <Redirect to={'/login'} />
    // }

  return (

      <div className={styles.appStyles}>
        <HashRouter>
            <div><Header/></div>
            <Navlink/>
            <div className={styles.navlinkStyle}> 
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/signup'} component={SignUp} />
            <Route exact path={'/profile'} component={Profile}/>
            <Route exact path={'/404'} component={ Page404 }/>
            <Route exact path={'/forgotPassword'} component={ ForgotPassword }/>
            <Route exact path={'/resetPassword/:resetPasswordToken'} component={ ResetPassword }/>
            <Route exact path={'/test'} component={ TestPage }/>
            </div>
            </HashRouter>
      </div>

  )
}


