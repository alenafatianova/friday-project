import React from 'react'
import styles from '../styles/login.module.css'


export const Login = () => {
    return (
        <div className={styles.mainContainer}>
    
               <div className={styles.loginForm}>
                    <div className={styles.dataContainer}>
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
                        <button className={styles.buttonLogin}> Log In</button>
                    </div>
               </div>
           
        </div>
    )
}
