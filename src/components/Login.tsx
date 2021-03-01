import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from '../styles/login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from "../redux/store";
import {loginTC} from "../redux/reducers/login-reducer";
import {RequestStatusType} from "../redux/reducers/app-reducer";


export const Login = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const isStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    //--проверка email, password forms
    const [emailValue, setEmailValue] = useState<string>('alyena.fatianova@gmail.com')
    const [passwordValue, setPasswordValue] = useState<string>('123456789')
    const [emailEmpty, setEmailEmpty] = useState<boolean>(false)
    const [passwordEmpty, setPasswordEmpty] = useState<boolean>(false)
    const [rememberMeValue, setRememberMeValue] = useState<boolean>(false)
    const [dis, setDis] = useState(false)

    // Обработчк кнопки залогиниться
    const loginHandler = () => {
        dispatch(loginTC({email: emailValue, password: passwordValue, rememberMe: rememberMeValue}))
       }


    const emailCheck = () => {
        setEmailEmpty(emailValue.length === 0)
    }
    const passwordCheck = () => {
        setPasswordEmpty(passwordValue.length === 0)
    }

    const updateEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }
    const updatePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.currentTarget.value)
    }

    const updateRememberMeValue = () => {
        setRememberMeValue(!rememberMeValue)
    }
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         return <Redirect to={'/profile'}/>
    //     }, 1000)
    // }, [])

    if (isLoggedIn) {

            return <Redirect to={'/profile'}/>

    }
    return (
        <div className={styles.mainContainer}>

            <form className={styles.loginForm}>

                <div className={styles.spanDiv}>
                    <div className={styles.loginSpan}><span>Login</span></div>
                    <div className={styles.signupSpan}><span>Sign Up</span></div>
                </div>
                <div className={styles.dataContainer}>
                    <div className={styles.emailContainer}>
                        <label className={styles.emailLabel}>Email</label>
                        <div>
                            <input
                                type="text"
                                placeholder='Email'
                                className={styles.emailInput}
                                value={emailValue}
                                onChange={updateEmailValue}
                                onBlur={emailCheck}
                            />
                            {emailEmpty && <div className={styles.errorCheckStyle}>Email is required</div>}
                        </div>
                    </div>
                    <div>
                        <div className={styles.passwordContainer}>
                            <label className={styles.passwordLabel}>Password</label>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Password'
                                    className={styles.passwordInput}
                                    value={passwordValue}
                                    onChange={updatePasswordValue}
                                    onBlur={passwordCheck}
                                />
                                {passwordEmpty && <div className={styles.errorCheckStyle}>Password is required</div>}
                            </div>
                        </div>
                    </div>
                    <div className={styles.rememberMeContainer}>
                        <label className={styles.rememberMeLabel}>Remember me</label>
                        <div>
                            <input
                                type="checkbox"
                                className={styles.rememberMeInput}
                                checked={rememberMeValue}
                                onChange={updateRememberMeValue}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    {/*<div className={styles.loadingStatus} aria-disabled={dis}>{isStatus === 'succeeded' ?*/}
                    {/*    <div>Success!</div> : ''}</div>*/}
                    <div className={styles.loadingStatus}>{isStatus === 'loading' ? <div>Loading...</div> : ''}</div>
                    <div className={styles.failedStatus}>{isStatus === 'failed' ?
                        <div>Not valid email or password</div> : ''}</div>
                </div>
                <div className={styles.buttonContainer}>
                    <button disabled={isStatus === 'loading'} className={styles.buttonLogin} onClick={loginHandler}> Log
                        In
                    </button>
                </div>


            </form>

        </div>
    )
}
