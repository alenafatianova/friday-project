import styles from '../styles/App.module.css';
import { Redirect, Route, Switch } from 'react-router-dom'
import { Login } from './Login';
import { SignIn } from './SignUp';
import { Profile } from './Profile';
import { Page404 } from './Page404'; 
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';
import { TestPage } from './TestPage'; 
import { Header } from './Header';
import React from 'react';
import { Navlink } from './Navlink';
import { Cards } from './Cards';
import { Packs } from './Packs';


export const App = () => {
    //const isInitialized=useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    //const  dispatch =useDispatch()

    // useEffect(()=> {
    
    //     dispatch(initializeAppTC())
    // }, [])
    //
    // if (!isInitialized) {
    //     return <Redirect to={'/login'} />
    // }

  return (
      <div className={styles.appStyles}>
            <div><Header/></div>
            <Navlink/>
            <div className={styles.navlinkStyle}> 
            <Switch>
            <Route exact path={'/'} render={() => <Redirect from={'/'} to={'/profile'} />} />
            <Route exact path={'/login'} render={() => <Login/>} />
            <Route exact path={'/signup'} render={() => <SignIn/>} />
            <Route exact path={'/profile'} render={() => <Profile/>}/>
            <Route exact path={'/cards'} render={() => <Cards/>} />
            <Route exact path={'/packs'} render={() => <Packs />} />
            <Route exact path={'/forgotPassword'} render={() => <ForgotPassword/> }/>
            <Route exact path={'/resetPassword/:resetPasswordToken'} render={() => <ResetPassword/> }/>
            <Route exact path={'/test'} component={ TestPage }/>
            <Route render={() => <Page404/> }/>
            </Switch>
            </div> 
      </div>

  )
}


