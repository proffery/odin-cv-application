import React, { useState } from "react";
import General from "./general/General.jsx";
import Education from "./education/Education.jsx";
import Experience from "./experience/Experience.jsx";
import Resume from "./resume/Resume.jsx";
import styles from "./Main.module.css";

const Main = () => {
  const general = {
    name: 'My Name',
    email: 'email@email.email',
    phone: '0123456789',
    about: 'Some information'
  }

  const education = [{
    id: '0',
    school: 'The Odin Project',
    title: 'Student',
    from: '2023-01-01',
    until: '2024-01-01'
  }]

  const experience = [{
    id: '0',
    company: 'none',
    position: 'none',
    from: '',
    until: ''
  }]

  const [gen, setGen] = useState(general)

  const [edu, setEdu] = useState(education)
  const addEdu = () => {
    setEdu(current => [...current, {
      id: edu.length.toString(),
      school: '',
      title: '',
      from: '',
      until: ''
    }])
  }
  
  const removeEdu = () => {
    let array = [...edu]
    array.splice(array.length - 1, 1)
    setEdu(array)
    console.log(array)
  }

  const [exp, setExp] = useState(experience)
  const addExp = () => {
    setExp(current => [...current, {
      id: exp.length.toString(),
      company: '',
      position: '',
      from: '',
      until: ''
    }])
  }

  const removeExp = () => {
    let array = [...exp]
    array.splice(array.length - 1, 1)
    setExp(array)
  }
  const onSaveGenHandler = (inputGenData) => {
    setGen(inputGenData)
  }
  
  const onSaveEduHandler = (inputEduData) => {
    const newEdu = edu.map(obj => {
      if(obj.id === inputEduData.id) {
        return {...obj, 
        school: inputEduData.school,
        title: inputEduData.title,
        from: inputEduData.from,
        until: inputEduData.until }
      }
      return obj
    })

    setEdu(newEdu)
  } 

  const onSaveExpHandler = (inputExpData) => {
    const newExp = exp.map(obj => {
      if(obj.id === inputExpData.id) {
        return {...obj, 
        company: inputExpData.company,
        position: inputExpData.position,
        from: inputExpData.from,
        until: inputExpData.until }
      }
      return obj
    })
    console.log(newExp)
    setExp(newExp)
  } 

  const printContent = () => {
    let printContents = document.querySelector(`.${styles.resume}`).innerHTML
    let originalContents = document.body.innerHTML
    document.body.innerHTML = printContents
    window.print()
    document.body.innerHTML = originalContents
  }

  return(
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Project: CV Application</h1>
        
        <div className={styles.section}>
          <General general={gen} onSaveGen={onSaveGenHandler}/>
        </div>
        <div className={styles.section}>
          {edu.map(educ =>
            <Education key={educ.id} education={educ} onSaveEdu={onSaveEduHandler}/>
          )}
          <div className={styles.addRemoveCont}>
            {edu.length > 1 && <div className={styles.addRemoveButton} onClick={removeEdu}>-</div>}
            <div className={styles.addRemoveButton} onClick={addEdu}>+</div>
          </div>
        </div>
        <div className={styles.section}>
          {exp.map(expr =>
            <Experience key={expr.id} experience={expr} onSaveExp={onSaveExpHandler}/>
          )}
            <div className={styles.addRemoveCont}>
              {exp.length > 1 && <div onClick={removeExp} className={styles.addRemoveButton}>-</div>}
              <div onClick={addExp} className={styles.addRemoveButton}>+</div>
            </div>
        </div>

        <div className={styles.resume}>
          <Resume general={gen} education={edu} experience={exp}/>
        </div>
        <div className={styles.print} type="button" onClick={printContent}>Print CV</div>
      </div>
    </>
  ) 

}

export default Main;
