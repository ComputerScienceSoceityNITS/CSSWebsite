import React from "react";
import styles from "./style.module.css";
import CloudLottie from "../../components/lottie-player/cloud";
import ReactTyped from "react-typed";

const AboutUs = () => {
  return (
    <div>
      <div className={styles.about}>
        <div className={`${styles.dividers} ${styles.dividers_second}`}>
          <div className={styles.title}>
            <p>ABOUT US</p>
          </div>
          <div className={styles.subtitle}>
            <p>
              The Computer Science Society, run by the CSE department of NIT
              Silchar, aims to impart academic, technical and socio-cultural
              awareness to the students of our beloved college.
            </p>
            <ReactTyped
              className={styles.typed}
              strings={[
                "TECHNICAL EVENTS",
                "FUN EVENTS",
                "SPEAKER SESSIONS",
                "WORKSHOPS",
              ]}
              typeSpeed={100}
              backSpeed={40}
              loop
            />
          </div>
        </div>
        <div className={styles.dividers}>
          <div id={styles.logo}>
            <CloudLottie />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
