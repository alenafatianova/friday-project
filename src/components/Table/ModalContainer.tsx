import React, { useState } from 'react'
import { Modal } from '../Modal'


export const ModalContainer = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div> 
            <div>
                <button onClick={() => setModalActive(true)}>open modal</button>
                <Modal active={modalActive} setActive={setModalActive}>
                   
                </Modal>
            </div> 
        </div>
    )
}
