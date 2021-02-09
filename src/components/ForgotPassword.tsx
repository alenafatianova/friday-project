import React, { ChangeEvent, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { sendEmailThunk } from '../redux/forgot-password-reducer'
import { appStateType } from '../redux/store'
import styles from '../styles/forgotPassword.module.css'
import { instance } from './../api/forgot-password-api';

export const ForgotPassword = () => {
    const [forgotPassword, setForgotPassword] = useState<string>('')
    const emailValue = (e: ChangeEvent<HTMLInputElement>) => setForgotPassword(e.currentTarget.value)
   
    const dispatch = useDispatch()

    const onSendEmail = () => {
        dispatch(sendEmailThunk(forgotPassword))
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
                      <div>Loading...</div> 
                     <div className={styles.inputStyle}>
                         <input 
                            type="email" 
                            placeholder='Your email address' 
                            className={styles.recoverInput} 
                            value={forgotPassword}
                            onChange={emailValue}
                         />
                     </div>
                 </div>
             </div>
             <div className={styles.buttonContainer}>
                <button 
                    className={styles.buttonReset} 
                    disabled={!forgotPassword}
                    onClick={() => onSendEmail()}
                    > Send
                </button>
             </div> 
        </form>
 </div>
)
}
const mapStateToProps = (state: appStateType) => ({
    email: state.forgotPassword.email
})
export default connect(mapStateToProps, {sendEmailThunk})(ForgotPassword)

