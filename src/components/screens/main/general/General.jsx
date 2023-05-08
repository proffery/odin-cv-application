import React, { useState } from "react"
import Input from "../input/Input"
import styles from './General.module.css'
import uniqid from "uniqid"


const General = (prop) => {
  

    return <form className={styles.form}>
      <h3 className={styles.header}>General:</h3>
          <Input name={"Name"} type={"text"} id={uniqid()} value={prop.name}/>
          <Input name={"Email"} type={"email"} id={uniqid()} value={prop.email}/>
          <Input name={"Phone"} type={"text"} id={uniqid()} value={prop.phone}/>
          <div>
            <label className={styles.label} htmlFor="textarea">About:</label>
            <textarea className={styles.textarea} id="textarea" cols={21} rows={3} placeholder="About" value={prop.about}></textarea>
          </div>
      <button className={styles.submit} type="submit">Submit</button>
    </form>
}

export default General