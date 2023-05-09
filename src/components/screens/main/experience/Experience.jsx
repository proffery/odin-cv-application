import React from "react"
import styles from './Experience.module.css'


const Experience = (prop) => {
    return <form className={styles.form}>
        <h3 className={styles.header}>Experience:</h3>

        <div className={styles.company}>
            <label htmlFor="company-name" className={styles.label}>Company:</label>
            <input id="company-name" className={styles.input} type="text" placeholder="company name" value={prop.company}></input>
        </div>

        <div className={styles.position}>
            <label htmlFor="position" className={styles.label}>Position:</label>
            <input id="position" className={styles.input} type="text" placeholder="position" value={prop.position}></input>
        </div>

        <div className={styles.from}>
            <label htmlFor="from" className={styles.label}>From:</label>
            <input id="from" className={styles.input} type="date" placeholder="from" value={prop.from}></input>
        </div>

        <div className={styles.until}>
            <label htmlFor="until" className={styles.label}>Until:</label>
            <input id="until" className={styles.input} type="date" placeholder="until" value={prop.until}></input>
        </div>
        
        <div className={styles.buttons}>
            <button className={styles.submit} type="submit">Submit</button>
        </div>
    </form>
}

export default Experience