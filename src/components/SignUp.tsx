import React from 'react'
import styles from '../styles/signup.module.css'



export const SignUp = () => {
    return (
        <div>
             <div className={styles.nameInputs}>
                    <div className={styles.firstNameContainer}>
                        <label>First Name</label>
                        <div><input type="text" placeholder='Enter'/></div>
                    </div>
                   <div className={styles.secondNameContainer}>
                       <label>Second Name</label>
                       <div><input type="text" placeholder='Enter'/></div>
                    </div>
                    </div>
        </div>
    )
}
