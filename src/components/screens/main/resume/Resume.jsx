import React from "react"
import styles from './Resume.module.css'
import uniqid from "uniqid"


const Resume = ({general, education, experience}) => {
    

    return <div className={styles.container}>
        <h2 className={styles.header}>Resume:</h2>
        <div className={styles.section}>
        <h3 className={styles.headerLight} >General:</h3>
            <div>Name: {general.name}</div>
            <div>Email: {general.email}</div>
            <div>Phone: {general.phone}</div>
            <div>About: {general.about}</div>
            <hr></hr>
        </div>
        {education.map(edu => <div key={uniqid()} className={styles.section}>
            <h3 className={styles.headerLight} >Education:</h3>
            <div>School: {edu.school}</div>
            <div>Title: {edu.title}</div>
            <div>From: {edu.from}</div>
            <div>Until: {edu.until}</div>
            <hr></hr>
        </div> )}
        {experience.map(exp => <div key={uniqid()} className={styles.section}>
            <h3 className={styles.headerLight}>Experience:</h3>
            <div>Company: {exp.company}</div>
            <div>Position: {exp.position}</div>
            <div>From: {exp.from}</div>
            <div>Until: {exp.until}</div>
            <hr></hr>
        </div> )}
    </div>
}

export default Resume