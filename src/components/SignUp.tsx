import React from 'react'
import styles from '../styles/signup.module.css'



export const SignUp = () => {
    return (
        <div className={styles.mainSignupContainer}>
           
             <div className={styles.signupForm}>
             <div className={styles.spanDiv}>
             <span>Login</span>
             <span className={styles.signupSpan}>Sign Up</span>
             </div>
             <div className={styles.signupContainer}>
                 
             <div className={styles.nameInputs}>
                    <div className={styles.firstNameContainer}>
                        <label className={styles.nameLabel}>First Name</label>
                        <div><input type="text" placeholder='Enter' className={styles.nameInput} /></div>
                    </div>
                   <div className={styles.secondNameContainer}>
                       <label className={styles.surnameLabel}>Second Name</label>
                       <div><input type="text" placeholder='Enter' className={styles.surnameInput} /></div>
                    </div>
                </div>
                <div className={styles.emailContainer}>
                        <label className={styles.emailLabel}>Email</label>
                    <div>
                        <input type="text" placeholder='Enter' className={styles.emailInput} />
                    </div>
                </div>
                <div>
                    <div className={styles.passwordContainer}>
                            <label className={styles.passwordLabel}>Password</label>
                        <div><input type="text" placeholder='Enter' className={styles.passwordInput} /></div>
                    </div>
                </div>
             </div>
                <div className={styles.buttonContainer}>
                        <button className={styles.buttonSignup}> Sign Up</button>
                </div>
             </div>
        </div>
    )
}
