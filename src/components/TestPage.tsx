import React, {useState} from 'react'
import SuperInputText from './Test/SuperInput'
import styles from '../components/Test/superInput.module.css'


export const TestPage = () => {

    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'
    const showAlert = () => {
        if (error) {
            alert('Введите текст...')
        } else {
            alert(text)
        }
    }

    return (
        <div className={styles.mainDivTest}>
            <SuperInputText 
                value={text}
                onChangeText={setText}
                onEnter={showAlert}
                error={error}
                className={styles.superInput}
            />
        </div>
    )
}
