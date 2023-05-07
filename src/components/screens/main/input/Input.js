import React from "react";
import styles from './Input.module.css'

const Input = ({ name: inputName, type: inputType, id: inputId }) => {
    return (
        <div className={styles.container}>
            <label htmlFor={inputId} className={styles.label}>{inputName}:</label>
            <input id={inputId} className={styles.input} type={inputType} placeholder={inputName.toLowerCase()}></input>
        </div>
    )
}

export default Input