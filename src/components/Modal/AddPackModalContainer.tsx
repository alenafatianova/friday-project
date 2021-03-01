import React, { ChangeEvent, useState } from 'react'
import  '../../styles/addModal.css'
import { Modal } from './Modal'
 

type addModalProps = {
    newCardsPack: (name: string) => void
}

export const AddPackModalContainer: React.FC<addModalProps> = ({newCardsPack}) => {
    const [modalActive, setModalActive] = useState(false)
    const [packName, setPackName] = useState<string>('')
   
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setPackName(e.currentTarget.value)
    }
    const onAddPackHandler = () => {
        newCardsPack(packName)
        setPackName('')  
    }
    
    return (
        <div>
            <div>
                <button onClick={() => setModalActive(true)}>+</button>
                <Modal active={modalActive} setActive={setModalActive}>
                    <input 
                        type="text" 
                        placeholder='New pack'
                        className={'newPackName'}
                        onChange={onChangeName}
                        value={packName}
                        />
                    <div className='modalButtons'>
                        <button className='addHandlerButton' onClick={onAddPackHandler}>Add</button> 
                        <button className='closeHandlerButton' onClick={() => setModalActive(false)}>Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}
                