import React from "react"
import styles from './Education.module.css'
import { useState } from "react"

const Education = (prop) => {
    const [school, setSchool] = useState(prop.school)
    const [title, setTitle] = useState(prop.title)
    const [from, setFrom] = useState(prop.from)
    const [until, setUntil] = useState(prop.until)
    const schoolChange = (e) => {
        e.preventDefault()
        setSchool(e.target.value)
    }

    const titleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    const fromChange = (e) => {
        e.preventDefault()
        setFrom(e.target.value)
    }

    const untilChange = (e) => {
        e.preventDefault()
        setUntil(e.target.value)
    }
    
    const submitEduHandler = (e) => {
        e.preventDefault()
        const formData = {
            id: prop.prop.id,
            school: school,
            title: title,
            from: from,
            until: until
        }
        prop.onSaveEdu(formData)
    }

    return <form key={prop.prop.id} className={styles.form}>
        <h3 className={styles.header}>Education:</h3>
        <div className={styles.group}>
            <label htmlFor="school-name" className={styles.label}>School:</label>
            <input id="school-name" className={styles.input} type="text" placeholder="school name" value={school} onChange={schoolChange}></input>
        </div>

        <div className={styles.group}>
            <label htmlFor="title" className={styles.label}>Title:</label>
            <input id="title" className={styles.input} type="text" placeholder="title" value={title} onChange={titleChange}></input>
        </div>

        <div className={styles.group}>
            <label htmlFor="from" className={styles.label}>From:</label>
            <input id="from" className={styles.input} type="date" placeholder="from" value={from} onChange={fromChange}></input>
        </div>

        <div className={styles.group}>
            <label htmlFor="until" className={styles.label}>Until:</label>
            <input id="until" className={styles.input} type="date" placeholder="until" value={until} onChange={untilChange}></input>
        </div>

        <div className={styles.group}>
            <button className={styles.submit} type="button" onClick={submitEduHandler}>Submit</button>
        </div>
    </form>
}

export default Education