import React from "react";
import General from "./general/General.jsx";
import Education from "./education/Education.jsx";
import Experience from "./experience/Experience.jsx";
import Resume from "./resume/Resume.jsx";
import styles from "./Main.module.css"

const Main = () => {

    return <div className={styles.container}>
      <div>
        <General/>
        <Education/>
        <Experience/>
      </div>
      <div>
        <Resume/>
      </div>
    </div>

}

export default Main;
