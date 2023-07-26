import React from "react"
import styles from './Experience.module.css'
import { useState } from "react"

const Experience = (prop) => {
    const [company, setCompany] = useState(prop.company)
    const [position, setPosition] = useState(prop.position)
    const [from, setFrom] = useState(prop.from)
    const [until, setUntil] = useState(prop.until)

    const companyChange = (e) => {
        e.preventDefault()
        setCompany(e.target.value)
    }

    const positionChange = (e) => {
        e.preventDefault()
        setPosition(e.target.value)
    }

    const fromChange = (e) => {
        e.preventDefault()
        setFrom(e.target.value)
    }

    const untilChange = (e) => {
        e.preventDefault()
        setUntil(e.target.value)
    }

    const submitExpHandler = (e) => {
        e.preventDefault()
        const formData = {
            id: prop.prop.id,
            company: company,
            position: position,
            from: from,
            until: until
        }
        prop.onSaveExp(formData)
    }
    return <form key={prop.prop.id} className={styles.form}>
        <h3 className={styles.header}>Experience:</h3>
        <div className={styles.group}>
            <label htmlFor="company-name" className={styles.label}>Company:</label>
            <input id="company-name" className={styles.input} type="text" placeholder="company name" value={company} onChange={companyChange}></input>
        </div>

        <div className={styles.group}>
            <label htmlFor="position" className={styles.label}>Position:</label>
            <input id="position" className={styles.input} type="text" placeholder="position" value={position} onChange={positionChange}></input>
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
            <button className={styles.submit} type="button" onClick={submitExpHandler}>Submit</button>
        </div>
    </form>
}

export default Experience