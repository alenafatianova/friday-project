import React, { FC, useState } from 'react'
import { Modal } from './Modal'
import '../../styles/deletePack.css'
import { useParams } from 'react-router-dom'
import { CardsPackResponseType, initialPacksStateType } from '../../redux/reducers/cards-pack-reducer'
import { AppRootStateType } from '../../redux/store'
import { useSelector } from 'react-redux'



type props = {
    deletePack: (id: string) => void
}
export const DeletePackModalContainer: FC<props> = ({deletePack}) => {
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const {_id} = useParams<{_id: string}>()

    return (
        <div>
            <div>
                <button onClick={() => setActiveModal(true)}>Delete</button>
                <Modal active={activeModal} setActive={setActiveModal}>
                   <span className='deletePackSpan'>Delete this pack?</span>
                   <div className='modalButtons'>
                        <button className='deleteHandlerButton' onClick={() => deletePack(_id)}>Delete</button>
                        <button className='closeHandlerButton' onClick={() => setActiveModal(false)}>Close</button>
                   </div>
                </Modal>
            </div>
        </div>
    )
}
