import React from "react"
import Input from "../input/Input"
import styles from './Experience.module.css'
import uniqid from "uniqid"


const Experience = () => {
    return <form className={styles.form}>
        <h3 className={styles.header}>Experience:</h3>
        <Input name={"Company name"} type={"text"} id={uniqid()}/>
        <Input name={"Position"} type={"text"} id={uniqid()}/>
        <Input name={"Date from"} type={"text"} id={uniqid()}/>
        <Input name={"Date until"} type={"text"} id={uniqid()}/>
        <button className={styles.submit} type="submit">Submit</button>
    </form>
}

export default Experience