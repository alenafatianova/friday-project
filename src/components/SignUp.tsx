import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signUpThunk } from '../redux/reducers/sign-up-reducer'
import styles from '../styles/signup.module.css'



export const SignUp = () => {

    const [email, setEmail] = useState<string>('')
    const [emptyEmail, setEmptyEmail] = useState<boolean>(false)
    const emailValue = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const emailCheck = () => setEmptyEmail(email.length === 0)

    const [password, setPassword] = useState<string>('')
    const [emptyPassword, setEmptyPassword] = useState<boolean>(false)
    const passwordValue = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const passwordCheck = () => setEmptyPassword(password.length === 0)
    
   const dispatch = useDispatch()
   const history = useHistory()
   
   const signUpNahdler = (email: string, password: string) => {
       dispatch(signUpThunk(email, password))
       history.push('/login')
   }
    
    return (
        <div className={styles.mainSignupContainer}>
           
             <form className={styles.signupForm}>
             <div className={styles.spanDiv}>
             <span className={styles.loginSpan}>Login</span>
             <span className={styles.signupSpan}>Sign Up</span>
             </div>
             <div className={styles.signupContainer}>
                <div className={styles.emailContainer}>
                        <label className={styles.emailLabel}>Email</label>
                    <div>
                        <input 
                            type="text" 
                            placeholder='Enter' 
                            className={styles.emailInput} 
                            value={email}
                            onChange={emailValue}
                            onBlur={emailCheck}
                        />
                        {emptyEmail && <div className={styles.errorCheckStyle}>Email is required</div>}
                    </div>
                </div>
                <div>
                    <div className={styles.passwordContainer}>
                            <label className={styles.passwordLabel}>Password</label>
                        <div>
                            <input 
                                type="password" 
                                placeholder='Enter' 
                                className={styles.passwordInput} 
                                value={password}
                                onChange={passwordValue}
                                onBlur={passwordCheck}
                            />
                        {emptyPassword && <div className={styles.errorCheckStyle}>Password is required</div>}
                        </div>
                    </div>
                </div>
             </div>
                <div className={styles.buttonContainer}>
                    <button 
                        className={styles.buttonSignup}
                        onClick={() => signUpNahdler(email, password)}
                        > Sign Up</button>
                </div>
             </form>
        </div>
    )
}
