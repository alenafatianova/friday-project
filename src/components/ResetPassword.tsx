import React, { ChangeEvent, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import { RequestStatusType } from '../redux/reducers/app-reducer'
import { setNewPasswordThunk } from '../redux/reducers/forgot-password-reducer'
import { AppRootStateType } from '../redux/store'
import styles from '../styles/resetPassword.module.css'


export const ResetPassword = React.memo(() => {

    const [newPasswordInput, setNewPasswordInput] = useState<string>('')
    const [newPasswordEmpty, setnewPasswordEmpty] = useState<boolean>(false)
    const newPasswordCheck = () => setnewPasswordEmpty(newPasswordInput.length === 0)
    const passwordValue = (e: ChangeEvent<HTMLInputElement>) => setNewPasswordInput(e.currentTarget.value)
    const [loading, setLoading] = useState<boolean>(false)
    
    const dispatch = useDispatch()

    //---get tokens from the backend----
    const {resetPasswordToken} = useParams<{resetPasswordToken: string}>();
    console.log(resetPasswordToken)


    const setPassword = useCallback((newPassword: string, resetPasswordToken: string) => { 
        dispatch(setNewPasswordThunk(newPassword, resetPasswordToken)) 
        setLoading(true)
    },[])
    
    const isLoading = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    return (
        <div className={styles.mainContainer}>
               <form className={styles.resetForm}>
                    <div className={styles.resetSpan}><span>Reset Password</span></div>
                    <div className={styles.dataContainer}>
                        <div className={styles.newPasswordContainer}>
                            <div>
                            {
                            isLoading === 'loading' 
                            ? <span className={styles.requestMessage}>Loading...</span> 
                            : <label className={styles.newPasswordLabel}>Reset Password</label>
                            } 
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    placeholder='Enter new password' 
                                    className={styles.newPasswordInput} 
                                    value={newPasswordInput}
                                    onChange={passwordValue}
                                    onBlur={newPasswordCheck}
                                />
                                {newPasswordEmpty && <div className={styles.errorCheckStyle}>Required</div>} 
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button 
                            className={styles.buttonReset}
                            disabled={isLoading === 'loading'} 
                            onClick={() => setPassword(newPasswordInput, resetPasswordToken)}
                            > Reset</button>
                    </div> 
               </form>
        </div>
    )
})
