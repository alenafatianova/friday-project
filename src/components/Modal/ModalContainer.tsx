import React, { useState } from 'react'
import { Modal } from './Modal'
import styles from '../../styles/modalContainer.module.css'

export const ModalContainer = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div> 
            <div>
                <button onClick={() => setModalActive(true)}>open modal</button>
                <Modal active={modalActive} setActive={setModalActive}>
                   <span> Questions are supposed to be here</span>
                   <div className={styles.modalButtons}>
                    <button className={styles.skipModalButton} onClick={() =>setModalActive(false) }>skip</button>
                    <button  className={styles.answerModalButton}>answer</button>
                   </div>
                </Modal>
            </div> 
        </div>
    )
}
