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
    company: '-',
    position: '-',
    from: '-',
    until: '-'
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

  return <div className={styles.container}>
    <h1 className={styles.header}>Project: CV Application</h1>
    <div className={styles.sections}>
      <div className={styles.gen}>
        <General prop={gen} onSaveGen={onSaveGenHandler}/>
      </div>
      <div className={styles.edu}>
        {edu.map(educ =>
          <Education key={educ.id} prop={educ} onSaveEdu={onSaveEduHandler}/>
        )}
        <div className={styles.adremovecont}>
          {edu.length > 1 && <h1 className={styles.removeedu} onClick={removeEdu}>-</h1>}
          <h1 className={styles.addedu} onClick={addEdu}>+</h1>
        </div>
      </div>
      <div className={styles.exp}>
        {exp.map(expr =>
          <Experience key={expr.id} prop={expr} onSaveExp={onSaveExpHandler}/>
        )}
          <div className={styles.adremovecont}>
            {exp.length > 1 && <h1 className={styles.removeexp} onClick={removeExp}>-</h1>}
            <h1 className={styles.addexp} onClick={addExp}>+</h1>
          </div>
      </div>
    </div>
    <div className={styles.resume}>
      <Resume general={gen} education={edu} experience={exp}/>
    </div>
  </div>

}

export default Main;
