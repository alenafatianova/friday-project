import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNewPasswordThunk } from '../redux/reducers/forgot-password-reducer'
import styles from '../styles/resetPassword.module.css'


export const ResetPassword = () => {

    const [newPasswordInput, setNewPasswordInput] = useState<string>('')
    const [newPasswordEmpty, setnewPasswordEmpty] = useState<boolean>(false)
    const newPasswordCheck = () => setnewPasswordEmpty(newPasswordInput.length === 0)
    const passwordValue = (e: ChangeEvent<HTMLInputElement>) => setNewPasswordInput(e.currentTarget.value)


    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [confirmPasswordEmpty, setconfirmPasswordEmpty] = useState<boolean>(false)
    const confirmPasswordCheck = () => setconfirmPasswordEmpty(confirmPassword.length === 0)
    const confirmPasswordValue = (e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.currentTarget.value)
   
    const dispatch = useDispatch()

    const setPassword = (newPassword: string, resetPasswordToken: string) => {
        dispatch(setNewPasswordThunk(newPassword, resetPasswordToken))
    }

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
                                    value={newPasswordInput}
                                    onChange={passwordValue}
                                    onBlur={newPasswordCheck}
                                />
                                {newPasswordEmpty && <div className={styles.errorCheckStyle}>Required</div>} 
                            </div>
                        </div>
                        {/* <div className={styles.confirmPasswordContainer}>
                            <label className={styles.confirmPasswordLabel}>Confirm Password</label>
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
                        </div> */}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button 
                            className={styles.buttonReset}
                            disabled={!newPasswordInput} 
                            onClick={() => setPassword}
                            > Reset</button>
                    </div> 
               </form>
        </div>
    )
}
