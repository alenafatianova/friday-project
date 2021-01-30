import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './Test/SuperInput'
import styles from '../components/Test/superInput.module.css'
import { SuperButton } from './Test/SuperButton'
import { SuperCheckbox } from './Test/SuperCheckbox'


export const TestPage = () => {

    const [text, setText] = useState<string>('')
    
    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

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
                className={styles.superInput} />
            <SuperButton red onClick={showAlert}>Delete</SuperButton>
            <SuperCheckbox checked={checked} onChangeChecked={setChecked}> Some text... </SuperCheckbox>
            <SuperCheckbox checked={checked} onChange={testOnChange}> Is it working? </SuperCheckbox>
        </div>
    )
}
