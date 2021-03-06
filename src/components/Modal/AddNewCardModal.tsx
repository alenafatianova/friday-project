import React, { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import  '../../styles/addModal.css'
import { Modal } from './Modal'

type addModalCardProps= {
    newCard: (question: string) => void
    answer: string
}

export const AddNewCardModal: React.FC<addModalCardProps> = ({newCard, answer}) => {
    const [modalActive, setModalActive] = useState(false)
    const [cardQuestion, setCardQuestion] = useState<string>('')
    const {cardsPack_id} = useParams<{cardsPack_id: string}>()
    
    const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
        setCardQuestion(e.currentTarget.value)
    }
    const onAddCardHandler = () => {
        newCard(cardQuestion)
        setCardQuestion('')
    }
    
    return (
        <div>
            <div>
            <button onClick={() => setModalActive(true)}>+</button>
            <Modal active={modalActive} setActive={setModalActive}>
                
            </Modal>
            </div>
        </div>
    )
}
