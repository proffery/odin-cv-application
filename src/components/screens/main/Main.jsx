import React from "react";
import General from "./general/General.jsx";
import Education from "./education/Education.jsx";
import Experience from "./experience/Experience.jsx";
import Resume from "./resume/Resume.jsx";
import styles from "./Main.module.css"

const Main = () => {

    return <div className={styles.container}>
      <h1 className={styles.header}>Project: CV Application</h1>
      <div className={styles.sections}>
        <div className={styles.gen}>
          <General/>
        </div>
        <div className={styles.edu}>
          <Education/>
        </div>
        <h1 className="add-edu">+</h1>
        <div className={styles.exp}>
          <Experience/>
        </div>
        <h1 className="add-exp">+</h1>
      </div>
      <div className={styles.resume}>
        <Resume/>
      </div>
    </div>

}

export default Main;
