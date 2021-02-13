import styles from '../styles/App.module.css';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Profile } from './Profile';
import { Page404 } from './Page404';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';
import { TestPage } from './TestPage'; 
import { Header } from './Header';
import React, { useEffect } from 'react';
import { Navlink } from './Navlink';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {initializeAppTC} from "../redux/reducers/app-reducer";

//---переделать routes 


export const App = () => {
    const isInitialized=useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const  dispatch =useDispatch()


    // useEffect(()=> {
    
    //     dispatch(initializeAppTC())
    // }, [])
    //
    // if (!isInitialized) {
    //     return <Redirect to={'/login'} />
    // }

  return (

      <div className={styles.appStyles}>
        <Switch>
        <HashRouter>
            <div><Header/></div>
            <Navlink/>
            <div className={styles.navlinkStyle}> 
            <Route exact path={'/'} render={() => <Redirect from={'/'} to={'/profile'} />} />
            <Route exact path={'/login'} render={() => <Login/>} />
            <Route exact path={'/signup'} render={() => <SignUp/>} />
            <Route exact path={'/profile'} render={() => <Profile/>}/>
            <Route exact path={'/404'} render={() => <Page404/> }/>
            <Route exact path={'/forgotPassword'} render={() => <ForgotPassword/> }/>
            <Route exact path={'/resetPassword/:resetPasswordToken'} render={() => <ResetPassword/> }/>
            <Route exact path={'/test'} component={ TestPage }/>
            </div>
            </HashRouter>
          </Switch>
      </div>

  )
}


