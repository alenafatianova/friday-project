import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CardsPackResponseType } from '../../api/packs-api'
import { Modal } from './Modal'
import '../../styles/deletePack.css'


type deletePackProps = {
    deletePack: (id: string) => void
}

export const DeletePackModalContainer: React.FC<deletePackProps> = ({deletePack}) => {
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const id = useSelector((state: CardsPackResponseType) => state._id)
    const onDeletPack = () => {
        deletePack(id)
    }
    
    return (
        <div>
            <div>
                <button onClick={() => setActiveModal(true)}>Delete</button>
                <Modal active={activeModal} setActive={setActiveModal}>
                   <span className='deletePackSpan'>Delete this pack?</span>
                   <div className='modalButtons'>
                        <button className='deleteHandlerButton' onClick={() => onDeletPack}>Delete</button>
                        <button className='closeHandlerButton' onClick={() => setActiveModal(false)}>Close</button>
                   </div>
                </Modal>
            </div>
        </div>
    )
}
