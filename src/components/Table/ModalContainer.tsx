import React, { useState } from 'react'
import { Modal } from '../Modal'

export const ModalContainer = () => {
    const [modalActive, setModalActive] = useState<boolean>(true)
    return (
        <div> 
           
            <Modal active={modalActive} setActive={setModalActive}>
                
            </Modal>
             <button onClick={() => setModalActive(false)}>Open modal</button> 
        </div>
    )
}
