import React, { ChangeEvent, useState } from 'react'
import styles from '../styles/signup.module.css'



export const SignUp = () => {

    const [name, setName] = useState<string>('')
    const [emptyName, setEmptyName] = useState<boolean>(false)
    const nameValue = (e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)
    const nameCheck = () => setEmptyName(name.length === 0)

    const [surname, setSurname] = useState<string>('')
    const [emptySurname, setEmptySurname] = useState<boolean>(false)
    const surnameValue = (e: ChangeEvent<HTMLInputElement>) => setSurname(e.currentTarget.value)
    const surnameCheck = () => setEmptySurname(surname.length === 0)

    const [email, setEmail] = useState<string>('')
    const [emptyEmail, setEmptyEmail] = useState<boolean>(false)
    const emailValue = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const emailCheck = () => setEmptyEmail(email.length === 0)

    const [password, setPassword] = useState<string>('')
    const [emptyPassword, setEmptyPassword] = useState<boolean>(false)
    const passwordValue = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const passwordCheck = () => setEmptyPassword(password.length === 0)
    
   
    
    return (
        <div className={styles.mainSignupContainer}>
           
             <form className={styles.signupForm}>
             <div className={styles.spanDiv}>
             <span className={styles.loginSpan}>Login</span>
             <span className={styles.signupSpan}>Sign Up</span>
             </div>
             <div className={styles.signupContainer}>
                 
             <div className={styles.nameInputs}>
                    <div className={styles.firstNameContainer}>
                        <label className={styles.nameLabel}>First Name</label>
                        <div>
                            <input 
                                type="text" 
                                placeholder='Enter' 
                                className={styles.nameInput} 
                                value={name}
                                onChange={nameValue}
                                onBlur={nameCheck}
                            />
                        {emptyName && <span className={styles.errorCheckStyle}>Name is required</span>}
                        </div>
                    </div>
                   <div className={styles.secondNameContainer}>
                       <label className={styles.surnameLabel}>Second Name</label>
                       <div>
                           <input 
                            type="text" 
                            placeholder='Enter' 
                            className={styles.surnameInput} 
                            value={surname}
                            onChange={surnameValue}
                            onBlur={surnameCheck}
                        />
                        {emptySurname && <div className={styles.errorCheckStyle}>Surname is required</div>}
                        </div>
                    </div>
                </div>
                <div className={styles.emailContainer}>
                        <label className={styles.emailLabel}>Email</label>
                    <div>
                        <input 
                            type="text" 
                            placeholder='Enter' 
                            className={styles.emailInput} 
                            value={email}
                            onChange={emailValue}
                            onBlur={emailCheck}
                        />
                        {emptyEmail && <div className={styles.errorCheckStyle}>Email is required</div>}
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
                                value={password}
                                onChange={passwordValue}
                                onBlur={passwordCheck}
                            />
                        {emptyPassword && <div className={styles.errorCheckStyle}>Password is required</div>}
                        </div>
                    </div>
                </div>
             </div>
                <div className={styles.buttonContainer}>
                    <button 
                        className={styles.buttonSignup}> Sign Up</button>
                </div>
             </form>
        </div>
    )
}
