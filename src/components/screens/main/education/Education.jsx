import React from "react"
import Input from "../input/Input"
import styles from './Education.module.css'
import uniqid from "uniqid"


const Education = (prop) => {
    return <form className={styles.form}>
        <h3 className={styles.header}>Education:</h3>
        <Input name={"School name"} type={"text"} id={uniqid()} value={prop.school}/>
        <Input name={"Title of study"} type={"text"} id={uniqid()} value={prop.title}/>
        <Input name={"From"} type={"date"} id={uniqid()} value={prop.from}/>
        <Input name={"Until"} type={"date"} id={uniqid()} value={prop.until}/>
        <div className={styles.buttons}>
            <button className={styles.submit} type="submit">Submit</button>
        </div>
    </form>
}

export default Education