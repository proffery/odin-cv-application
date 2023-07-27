import { useEffect, useState } from 'react'
import styles from './General.module.css'


const General = ({general, onSaveGen}) => {
      const [name, setName] = useState(general.name)
      const [email, setEmail] = useState(general.email)
      const [phone, setPhone] = useState(general.phone)
      const [about, setAbout] = useState(general.about)
      
      useEffect(() => {
            const formData = {
                  name: name,
                  email: email,
                  phone: phone,
                  about: about
            }
           onSaveGen(formData)
      }, [name, email, phone, about, general.id])

      const nameChange = (e) => {
            e.preventDefault()
            setName(e.target.value)
      }

      const emailChange = (e) => {
            e.preventDefault()
            setEmail(e.target.value)
      }

      const phoneChange = (e) => {
            e.preventDefault()
            setPhone(e.target.value)
      }

      const aboutChange = (e) => {
            e.preventDefault()
            setAbout(e.target.value)
      }   

    return <form className={styles.form}>
      <h3 className={styles.header}>General:</h3>
      <div className={styles.group}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input id="name" className={styles.input} type="text" placeholder="name" value={name} onChange={nameChange}></input>
      </div>
      <div className={styles.group}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input id="email" className={styles.input} type="email" placeholder="e-mail" value={email} onChange={emailChange}></input>
      </div>
      <div className={styles.group}>
            <label htmlFor="phone" className={styles.label}>Phone:</label>
            <input id="phone" className={styles.input} type="text" placeholder="phone number" value={phone} onChange={phoneChange}></input>
      </div>
      <div className={styles.group}>
            <label className={styles.label} htmlFor="textarea">About:</label>
            <textarea className={styles.textarea} id="textarea" cols={21} rows={3} maxLength="50" placeholder="About" value={about} onChange={aboutChange}></textarea>
      </div>
    </form>
}

export default General
