import React from "react"
import Input from "../input/Input"
import styles from './Experience.module.css'
import uniqid from "uniqid"


const Experience = (prop) => {
    return <form className={styles.form}>
        <h3 className={styles.header}>Experience:</h3>
        <Input name={"Company name"} type={"text"} id={uniqid()} value={prop.name}/>
        <Input name={"Position"} type={"text"} id={uniqid()} value={prop.position}/>
        <Input name={"From"} type={"date"} id={uniqid()} value={prop.from}/>
        <Input name={"Until"} type={"date"} id={uniqid()} value={prop.until}/>
        <div className={styles.buttons}>
            <button className={styles.submit} type="submit">Submit</button>
        </div>
    </form>
}

export default Experience