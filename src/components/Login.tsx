import React, { ChangeEvent } from 'react'
import styles from '../styles/login.module.css'
import { useState } from 'react'




export const Login = () => {
    
    //--проверка email, password forms 

    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [emailEmpty, setEmailEmpty] = useState<boolean>(false)
    const [passwordEmpty, setPasswordEmpty] = useState<boolean>(false)
    
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
                                    placeholder='Enter' 
                                    className={styles.passwordInput} 
                                    value={passwordValue}
                                    onChange={updatePasswordValue}
                                    onBlur={passwordCheck}
                                />
                            {passwordEmpty && <div className={styles.errorCheckStyle}>Password is required</div>}    
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
