import React, { useEffect } from "react"
import styles from './Experience.module.css'
import { useState } from "react"

const Experience = ({experience, onSaveExp}) => {
    const [company, setCompany] = useState(experience.company)
    const [position, setPosition] = useState(experience.position)
    const [from, setFrom] = useState(experience.from)
    const [until, setUntil] = useState(experience.until)

    useEffect(() => {
        const formData = {
            id: experience.id,
            company: company,
            position: position,
            from: from,
            until: until
        }
        onSaveExp(formData)
    }, [company, position, from, until])

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

    return <form key={experience.id} className={styles.form}>
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
    </form>
}

export default Experience