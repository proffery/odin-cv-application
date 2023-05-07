import React from "react"
import Input from "../input/Input"
import styles from './Education.module.css'
import uniqid from "uniqid"


const Education = () => {
    return <form className={styles.form}>
        <h3 className={styles.header}>Education:</h3>
        
        <Input name={"School name"} type={"text"} id={uniqid()}/>
        <Input name={"Title of study"} type={"text"} id={uniqid()}/>
        <Input name={"Date from"} type={"text"} id={uniqid()}/>
        <Input name={"Date until"} type={"text"} id={uniqid()}/>
        <button className={styles.submit} type="submit">Submit</button>
    </form>
}

export default Education