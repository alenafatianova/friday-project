import React, { useState } from 'react'
import '../styles/modal.css'

type modalProps = {
    active: boolean
    setActive: (active: boolean) => void
}

export const Modal: React.FC<modalProps> = ({active, setActive, children}) => {
    return (   
        <>
        <div className={active ? 'modal active' : 'modal' } onClick={() => setActive(false)} >
        <div className={active ? 'modalContent active' : 'modalContent'} 
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
              
            {children}
        </div>
        </div>
        </>
    )
}