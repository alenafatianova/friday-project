import React, { ChangeEvent, useState } from 'react'
import styles from '../styles/recoverPassword.module.css'


export const RecoveryPassword = () => {
    const [forgotPassword, setForgotPassword] = useState<string>('')
    const [emptyEmail, setEmptyEmail] = useState<boolean>(false)
    const emailValue = (e: ChangeEvent<HTMLInputElement>) => setForgotPassword(e.currentTarget.value)
    const emailCheck = () => setEmptyEmail(forgotPassword.length === 0)

    return (
        <div className={styles.mainContainer}>
        <form className={styles.recoverForm}>
             <div className={styles.recoverSpan}><span>Forgot password?</span></div>
             <div className={styles.dataContainer}>
                 <div className={styles.recoverPasswordContainer}>
                      <span className={styles.enterEmailSpan}>
                          Enter your email to receive password
                      </span>
                     <div className={styles.inputStyle}>
                         <input 
                             type="text" 
                             placeholder='Your email address' 
                             className={styles.recoverInput} 
                             value={forgotPassword}
                             onChange={emailValue}
                             onBlur={emailCheck}
                         />
                         {emptyEmail && <div className={styles.errorCheckStyle}>Required</div>} 
                     </div>
                 </div>
             </div>
             <div className={styles.buttonContainer}>
                 <button className={styles.buttonReset}>Send</button>
             </div> 
        </form>
 </div>
)
}

