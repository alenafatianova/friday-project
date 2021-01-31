import React, { ChangeEvent, useState } from 'react'
import styles from '../styles/resetPassword.module.css'


export const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState<string>('')
    const [newPasswordEmpty, setnewPasswordEmpty] = useState<boolean>(false)
    const newPasswordCheck = () => setnewPasswordEmpty(newPassword.length === 0)
    const passwordValue = (e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.currentTarget.value)


    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [confirmPasswordEmpty, setconfirmPasswordEmpty] = useState<boolean>(false)
    const confirmPasswordCheck = () => setconfirmPasswordEmpty(confirmPassword.length === 0)
    const confirmPasswordValue = (e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.currentTarget.value)
   

    return (
        <div className={styles.mainContainer}>
               <form className={styles.resetForm}>
               
                    <div className={styles.resetSpan}><span>Reset Password</span></div>
                    <div className={styles.dataContainer}>
                        <div className={styles.newPasswordContainer}>
                             <label className={styles.newPasswordLabel}>Reset Password</label>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder='Enter new password' 
                                    className={styles.newPasswordInput} 
                                    value={newPassword}
                                    onChange={passwordValue}
                                    onBlur={newPasswordCheck}
                                />
                                {newPasswordEmpty && <div className={styles.errorCheckStyle}>Required</div>} 
                            </div>
                        </div>
                        <div className={styles.confirmPasswordContainer}>
                            <label className={styles.confirmPasswordLabel}>Password</label>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder='Enter' 
                                    className={styles.confirmPasswordInput} 
                                    value={confirmPassword}
                                    onChange={confirmPasswordValue}
                                    onBlur={confirmPasswordCheck}
                                />
                            {confirmPasswordEmpty && <div className={styles.errorCheckStyle}>Password is required</div>}    
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.buttonReset}> Reset</button>
                    </div> 
               </form>
        </div>
    )
}
