import React from "react"
import Input from "../input/Input"
import styles from './General.module.css'
import uniqid from "uniqid"


const General = () => {
    return <form className={styles.form}>
      <h3 className={styles.header}>General:</h3>
      <div className={styles.group}>
        <div className={styles.left}>
          <Input name={"Name"} type={"text"} id={uniqid()}/>
          <Input name={"Email"} type={"email"} id={uniqid()}/>
          <Input name={"Phone"} type={"text"} id={uniqid()}/>
        </div>
        <div className={styles.right}>
          <label className={styles.label} htmlFor="textarea">About</label>
          <textarea className={styles.textarea} id="textarea" cols={21} rows={3} placeholder="About"></textarea>
        </div>
      </div>
      <button className={styles.submit} type="submit">Submit</button>
    </form>
}

export default General