import styles from './Education.module.css'
import { useState, useEffect } from "react"

const Education = ({education, onSaveEdu}) => {
    const [school, setSchool] = useState(education.school)
    const [title, setTitle] = useState(education.title)
    const [from, setFrom] = useState(education.from)
    const [until, setUntil] = useState(education.until)
    
    useEffect(() => {
        const formData = {
            id: education.id,
            school: school,
            title: title,
            from: from,
            until: until
        }
        onSaveEdu(formData)
    }, [school, title, from, until, education.id])
    
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

    return <form key={{education}.id} className={styles.form}>
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
    </form>
}

export default Education