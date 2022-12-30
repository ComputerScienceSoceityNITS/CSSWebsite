import React from "react";
import styles from "./style.module.css";
const AboutUs = () => {
  return (
    <div>
      <div className={styles.about}>
        <div className={`${styles.dividers} ${styles.dividers_second} `}>
          <div className={styles.title}>
            <p>ABOUT US</p>
          </div>
          <div className={styles.gradientbg}></div>
          <div className={styles.subtitle}>
            <p>
              The Computer Science Society, run by the CSE department of NIT
              Silchar, aims to impart academic, technical and socio-cultural
              awareness to the students of our beloved college.
            </p>
          </div>
        </div>
        <div className={styles.dividers_third}>
          <div className={styles.aboutcentre}>CONDUCT</div>
          <br></br>
          <span></span>
        </div>

        <div className={styles.head_about}>ABOUT US</div>
      </div>
    </div>
  );
};

export default AboutUs;
