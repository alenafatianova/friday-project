import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { isLoading, sendEmailThunk } from '../redux/reducers/forgot-password-reducer'
import styles from '../styles/forgotPassword.module.css'


export const ForgotPassword = () => {
    const [emailInput, setEmailInput] = useState<string>('')
    const emailValue = (e: ChangeEvent<HTMLInputElement>) => setEmailInput(e.currentTarget.value)
    const dispatch = useDispatch()
    const history = useHistory()

    const onSendEmail = (email: string) => {
        dispatch(sendEmailThunk(email))
        history.push('/resetPassword')
    }
   

    return (
        <div className={styles.mainContainer}>
        <form className={styles.recoverForm}>
             <div className={styles.recoverSpan}><span>Forgot password?</span></div>
             <div className={styles.dataContainer}>
                 <div className={styles.recoverPasswordContainer}>
                      <span className={styles.enterEmailSpan}>
                          Enter your email to receive password
                      </span>
                      {/* {loading ? <div>Loading...</div> : <div>Not Loading...</div> } */}
                     <div className={styles.inputStyle}>
                         <input 
                            type="email" 
                            placeholder='Your email address' 
                            className={styles.recoverInput} 
                            value={emailInput}
                            onChange={emailValue}
                         />
                     </div>
                 </div>
             </div>
             <div className={styles.buttonContainer}>
                <button 
                    className={styles.buttonReset} 
                    disabled={!emailInput}
                    onClick={() => onSendEmail(emailInput)}
                    > Send
                </button>
             </div> 
        </form>
 </div>
)
}


