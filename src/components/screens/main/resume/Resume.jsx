import React from "react"
import styles from './Resume.module.css'
import uniqid from "uniqid"

const Resume = ({general, education, experience}) => {
    return <div className={styles.container}>
        <h2 className={styles.header}>Summary:</h2>
        <div className={styles.general}>
        <h3>General:</h3>
            <div>Name: {general.name}</div>
            <div>Email: {general.email}</div>
            <div>Phone: {general.phone}</div>
            <div>About: {general.about}</div>
            <hr></hr>
        </div>
        {education.map(edu => <div key={uniqid()} className={styles.education}>
            <h3>Education:</h3>
            <div>School: {edu.school}</div>
            <div>Title: {edu.title}</div>
            <div>From: {edu.from}</div>
            <div>Until: {edu.until}</div>
            <hr></hr>
        </div> )}
        {experience.map(exp => <div key={uniqid()} className={styles.experience}>
            <h3>Experience:</h3>
            <div>Company: {exp.company}</div>
            <div>Position: {exp.position}</div>
            <div>From: {exp.from}</div>
            <div>Until: {exp.until}</div>
            <hr></hr>
        </div> )}
    </div>
}

export default Resume