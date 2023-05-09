import React, { useState } from "react";
import General from "./general/General.jsx";
import Education from "./education/Education.jsx";
import Experience from "./experience/Experience.jsx";
import Resume from "./resume/Resume.jsx";
import styles from "./Main.module.css";
import uniqid from "uniqid";

const Main = () => {
  const general = {
    name: '',
    email: '',
    phone: '',
    about: ''
  }

  const education = [{
    id: 0,
    school: '',
    title: '',
    from: '',
    until: ''
  }]

  const experience = [{
    id: 0,
    company: '',
    position: '',
    from: '',
    until: ''
  }]

  const [gen, setGen] = useState(general)

  const [edu, setEdu] = useState(education)
  const addEdu = () => {
    setEdu(current => [...current, {
      id: current.length,
      school: '',
      title: '',
      from: '',
      until: ''
    }])
    console.log(edu)
  }
  
  const removeEdu = () => {
    let array = [...edu]
    array.splice(array.length - 1, 1)
    setEdu(array)
    console.log(edu)
  }

  const [exp, setExp] = useState(experience)
  const addExp = () => {
    setExp(current => [...current, {
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


  return <div className={styles.container}>
    <h1 className={styles.header}>Project: CV Application</h1>
    <div className={styles.sections}>
      <div className={styles.gen}>
        <General prop={gen} onSaveGen={onSaveGenHandler}/>
      </div>
      <div className={styles.edu}>
        {edu.map(edu =>
          <Education key={uniqid()} school={edu.school} title={edu.title} from={edu.from} until={edu.until}/>
        )}
        <div className={styles.adremovecont}>
          {edu.length > 1 && <h1 className={styles.removeedu} onClick={removeEdu}>-</h1>}
          <h1 className={styles.addedu} onClick={addEdu}>+</h1>
        </div>
      </div>
      <div className={styles.exp}>
        {exp.map(exp =>
          <Experience key={uniqid()} name={exp.name} position={exp.position} from={exp.from} until={exp.until}/>
        )}
          <div className={styles.adremovecont}>
            {exp.length > 1 && <h1 className={styles.removeexp} onClick={removeExp}>-</h1>}
            <h1 className={styles.addexp} onClick={addExp}>+</h1>
          </div>
      </div>
    </div>
    <div className={styles.resume}>
      <Resume general={gen}/>
    </div>
  </div>

}

export default Main;
