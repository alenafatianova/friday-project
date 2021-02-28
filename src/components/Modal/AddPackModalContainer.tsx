import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../../styles/addModalContainer.module.css'
import { addPackThunk } from '../../redux/reducers/cards-pack-reducer'
import { Modal } from './Modal'
 



export const AddPackModalContainer = () => {
    const [modalActive, setModalActive] = useState(false)
    const dispatch = useDispatch()
    const onAddPackHandler = (name: string) => {
        dispatch(addPackThunk(name)) 
    }
    return (
        <div>
            <div>
                <button onClick={() => setModalActive(true)}>+</button>
                <Modal active={modalActive} setActive={setModalActive}>
                    <input 
                        type="text" 
                        placeholder='New pack'
                        className={styles.newPackName}
                        />
                    <div>
                        <button onChange={() => onAddPackHandler}>Add</button> 
                        <button onClick={() => setModalActive(false)}>Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}
                