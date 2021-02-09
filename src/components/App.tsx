import styles from '../styles/App.module.css';
import { HashRouter, Route } from 'react-router-dom'
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

// Redirect на страницу логина, если не авторизован
// NavLink где делать, в header?

export const App = () => {
  return (
    <HashRouter>
      <div className={styles.appStyles}>
            <div><Header/></div>
            <Navlink/>
            <div className={styles.navlinkStyle}> 
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/signup'} component={SignUp} />
            <Route exact path={'/profile'} component={Profile}/>
            <Route exact path={'/404'} component={ Page404 }/>
            <Route exact path={'/forgotPassword'} component={ ForgotPassword }/>
            <Route exact path={'/resetPassword'} component={ ResetPassword }/>
            <Route exact path={'/test'} component={ TestPage }/>
            </div>
      </div>
    </HashRouter>
  )
}


