import { useState } from 'react'
import styles from './General.module.css'


const General = (prop) => {
      const [name, setName] = useState(prop.name)
      const [email, setEmail] = useState(prop.email)
      const [phone, setPhone] = useState(prop.phone)
      const [about, setAbout] = useState(prop.about)
      
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
      
      const submitHandler = (e) => {
            e.preventDefault()
            const formData = {
                  name: name,
                  email: email,
                  phone: phone,
                  about: about
            }
            console.log(formData)
            prop.onSaveGen(formData)
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
            <textarea className={styles.textarea} id="textarea" cols={21} rows={3} maxlength="50" placeholder="About" value={about} onChange={aboutChange}></textarea>
      </div>
      <div className={styles.group}>
            <button className={styles.submit} type="button" onClick={submitHandler}>Submit</button>
      </div>
    </form>
}

export default General
