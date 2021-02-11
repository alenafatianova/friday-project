import React, { ChangeEvent, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setNewPasswordThunk } from '../redux/reducers/forgot-password-reducer'
import styles from '../styles/resetPassword.module.css'

type resetPasswordProps = {
    isLoggedIn: false
}

export const ResetPassword = React.memo((props: resetPasswordProps) => {

    const [newPasswordInput, setNewPasswordInput] = useState<string>('')
    const [newPasswordEmpty, setnewPasswordEmpty] = useState<boolean>(false)
    const newPasswordCheck = () => setnewPasswordEmpty(newPasswordInput.length === 0)
    const passwordValue = (e: ChangeEvent<HTMLInputElement>) => setNewPasswordInput(e.currentTarget.value)
  
    const dispatch = useDispatch()

    const setPassword = useCallback((newPassword: string, resetPasswordToken: string) => {
        dispatch(setNewPasswordThunk(newPassword, resetPasswordToken)) 
    },[])

    //---- plug by now, remove after merge-----
    if(!props.isLoggedIn) {
        return <Redirect to={'/login'} />
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
                            disabled={!newPasswordInput} 
                            onClick={() => setPassword}
                            > Reset</button>
                    </div> 
               </form>
        </div>
    )
})
