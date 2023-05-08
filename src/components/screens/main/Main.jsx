import React, { useState } from "react";
import General from "./general/General.jsx";
import Education from "./education/Education.jsx";
import Experience from "./experience/Experience.jsx";
import Resume from "./resume/Resume.jsx";
import styles from "./Main.module.css";
import uniqid from "uniqid";

const Main = () => {
  const general = {
    name: 'My Name',
    email: 'mymail@mail.mail',
    phone: '0123456789',
    about: 'Some information about me.'
  }

  const education = [{
    school: 'Some School',
    title: 'Some Title',
    from: '1987-06-16',
    until: '2023-08-05'
  }, 
  {
    school: 'Some School',
    title: 'Some Title',
    from: '1987-06-16',
    until: '2023-08-05'
  }]

  const experience = [{
    name: 'Some Company',
    position: 'Some Position',
    from: '1987-06-16',
    until: '2023-08-05'
  },
  {
    name: 'Some Company',
    position: 'Some Position',
    from: '1987-06-16',
    until: '2023-08-05'
  }]

  const [edu, setEdu] = useState(education)
  const addEdu = () => {
    setEdu(current => [...current, {
      school: '',
      title: '',
      from: '',
      until: ''
    }])
  }
  
  const [exp, setExp] = useState(experience)
  const addExp = () => {
    setExp(current => [...current, {
      name: '',
      position: '',
      from: '',
      until: ''
    }])
  }
  return <div className={styles.container}>
    <h1 className={styles.header}>Project: CV Application</h1>
    <div className={styles.sections}>
      <div className={styles.gen}>
        <General name={general.name} email={general.email} phone={general.phone} about={general.about}/>
      </div>
      <div className={styles.edu}>
        {edu.map(edu =>
          <Education key={uniqid()} school={edu.school} title={edu.title} from={edu.from} until={edu.until}/>
        )}
      </div>
      <h1 className={styles.addedu} onClick={addEdu}>+</h1>
      <div className={styles.exp}>
        {exp.map(exp =>
          <Experience key={uniqid()} name={exp.name} position={exp.position} from={exp.from} until={exp.until}/>
        )}
      </div>
        {exp.length > 0 && <h1 className={styles.removeexp}>-</h1>}
        <h1 className={styles.addexp} onClick={addExp}>+</h1>
    </div>
    <div className={styles.resume}>
      <Resume/>
    </div>
  </div>

}

export default Main;
