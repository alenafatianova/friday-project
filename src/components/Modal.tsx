import React, { useState } from 'react'
import styles from '../styles/modal.module.css'

type modalProps = {
    active: boolean
    setActive: (active: boolean) => void
}

export const Modal: React.FC<modalProps> = ({active, setActive, children}) => {
    return (   
        <>
        <div className={active ? styles.active : styles.modal} onClick={() => setActive(false)}>
            Modal window
        </div>
        <div className={active ? styles.modalContentActive : styles.modalContent} 
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        {children}
        Some text is here
        </div>
        </>
    )
}