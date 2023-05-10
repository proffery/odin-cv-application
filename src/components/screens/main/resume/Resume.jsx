import React from "react"
import styles from './Resume.module.css'

const Resume = ({general, education}) => {
    return <div className={styles.container}>
        <h2 className={styles.header}>Summary:</h2>
        <div className={styles.general}>
            <div>Name: {general.name}</div>
            <div>Email: {general.email}</div>
            <div>Phone: {general.phone}</div>
            <div>About: {general.about}</div>
        </div>
        {education.map(edu => <div>
            <div>School: {edu.school}</div>
            <div>Title: {edu.title}</div>
            <div>From: {edu.from}</div>
            <div>Until: {edu.until}</div>
        </div> )}
    </div>
}

export default Resume