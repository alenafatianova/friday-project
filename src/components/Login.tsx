import React, { ChangeEvent } from 'react'
import styles from '../styles/login.module.css'
import { useState } from 'react'
import { spawn } from 'child_process'

/*
    1. create inividual state for email and password
    2. create func for updating the  states (input (e))
    3.  {email.length === 0 && <span></span>}
    4. input value = {email} in email && input value={password} in password
*/

export const Login = () => {
    
    //--проверка email, password forms 

    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')

    const updateEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }
    const updatePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.currentTarget.value)
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
                                    placeholder='Enter' 
                                    className={styles.emailInput} 
                                    onChange={updateEmailValue}
                                    value={emailValue}
                                />
                                {emailValue.length === 0 && <div className={styles.errorCheckStyle}>Email is required</div>} 
                            </div>
                        </div>
                        <div>
                        <div className={styles.passwordContainer}>
                            <label className={styles.passwordLabel}>Password</label>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder='Enter' 
                                    className={styles.passwordInput} 
                                    value={passwordValue}
                                    onChange={updatePasswordValue}
                                />
                            {passwordValue.length === 0 && <div className={styles.errorCheckStyle}>Password is required</div>}    
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.buttonLogin}> Log In</button>
                    </div>
                    
               </form>
           
        </div>
    )
}
