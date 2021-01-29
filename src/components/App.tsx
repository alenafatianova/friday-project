import styles from '../styles/App.module.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Profile } from './Profile';
import { Page404 } from './Page404';
import { RecoveryPassword } from './RecoveryPassword';
import { ResetPassword } from './ResetPassword';
import { TestPage } from './TestPage'; 

// Redirect на страницу логина, если не авторизован

export const App = () => {
  return (
      <div className={styles.appStyles}>
        <HashRouter>
          <Switch>
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/signup'} component={SignUp}/>
            <Route exact path={'/profile'} component={Profile}/>
            <Route exact path={'/404'} component={Page404}/>
            <Route exact path={'/recoveryPassword'} component={RecoveryPassword}/>
            <Route exact path={'/resetPassword'} component={ResetPassword}/>
            <Route exact path={'/testPage'} component={TestPage}/>
          </Switch>
        </HashRouter>
      </div>
  )
}


