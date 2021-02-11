import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { isRequestLoading, RequestLoadingType, sendEmailThunk } from '../redux/reducers/forgot-password-reducer'
import { appStateType } from '../redux/store'
import styles from '../styles/forgotPassword.module.css'



export const ForgotPassword = React.memo(() => {
    
    const [emailInput, setEmailInput] = useState<string>('')
    const emailValue = (e: ChangeEvent<HTMLInputElement>) => setEmailInput(e.currentTarget.value)
    const [inputEmpty, setInputEmpty] = useState<boolean>(false)
    const inputCheck = () => setInputEmpty(emailInput.length === 0)

    const dispatch = useDispatch()
    const history = useHistory()
    const loading = useSelector<appStateType, RequestLoadingType>(state => state.forgotPassword.isRequestLoading) 

    const onSendEmail = (email: string) => {
        dispatch(sendEmailThunk(email))
        history.push('/resetPassword')
    }
   
  
    return (
        <div className={styles.mainContainer}>
        <form className={styles.recoverForm}>
             <div className={styles.recoverSpan}>
            {loading === 'Loading' ? <div>Loading...</div>  :  <span>Forgot password?</span>}
                
                </div>
             <div className={styles.dataContainer}>
                 <div className={styles.recoverPasswordContainer}>
                      <span className={styles.enterEmailSpan}>
                          Enter you email to receive password
                      </span>
                      
                     <div className={styles.inputStyle}>
                         <input 
                            type="email" 
                            placeholder='Your email address' 
                            className={styles.recoverInput} 
                            value={emailInput}
                            onChange={emailValue}
                            onBlur={inputCheck}
                         />
                         {inputEmpty && <div className={styles.errorCheckStyle}>Required</div>}
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
})


