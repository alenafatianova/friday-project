import React, { FC, useState } from 'react'
import { Modal } from './Modal'
import '../../styles/deletePack.css'



type props = {
    deletePack: (id: string) => void
}
export const DeletePackModalContainer: FC<props> = ({deletePack}) => {
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const id = ''
    return (
        <div>
            <div>
                <button onClick={() => setActiveModal(true)}>Delete</button>
                <Modal active={activeModal} setActive={setActiveModal}>
                   <span className='deletePackSpan'>Delete this pack?</span>
                   <div className='modalButtons'>
                        <button className='deleteHandlerButton' onClick={() => deletePack(id)}>Delete</button>
                        <button className='closeHandlerButton' onClick={() => setActiveModal(false)}>Close</button>
                   </div>
                </Modal>
            </div>
        </div>
    )
}
