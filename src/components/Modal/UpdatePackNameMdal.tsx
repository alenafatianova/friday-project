import React, { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Modal } from './Modal'
import  '../../styles/addModal.css'

type updatePackModal = {
    updatedPack: (id: string) => void
    
} 
export const UpdatePackNameModal: React.FC<updatePackModal> = ({updatedPack}) => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    const [newName, setNewName] = useState<string>('')
    const {_id} = useParams<{_id: string}>()
    
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.currentTarget.value)
    }
    console.log(onChangeName)
    const onUpdatePack = () => {
        updatedPack(_id)
        setNewName('')
    }

    return (
        <div>
            <div>
                <button onClick={() => setModalActive(true)}>Update</button>
                <Modal active={modalActive} setActive={setModalActive}>
                   <input 
                        className={'newPackName'}
                        type="text"
                        placeholder='Enter New Name'
                        onChange={onChangeName}
                        value={newName}
                        />
                    <div><button onClick={onUpdatePack} className='addHandlerButton'>Change Name</button></div>
                   <div> <button onClick={() => setModalActive(false)} className='closeHandlerButton'>Close</button></div>
                </Modal>
            </div>
        </div>
    )
}
