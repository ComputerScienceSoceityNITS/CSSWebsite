import React from "react";
import AboutLottie from "../../components/lottie-player/about-lottie";
import styles from "./style.module.css";
import CSSLogo from "../../components/lottie-player/CSS";

const AboutUs = () => {
  return (
    <div>
      <div className={styles.about}>
        <div className={`${styles.dividers} ${styles.dividers_second} `}>
          <div className={styles.title}>
            <p>ABOUT US</p>
          </div>
          <div className={styles.subtitle}>
            <p>
              The Computer Science Society, run by the CSE department of NIT
              Silchar, aims to impart academic, technical and socio-cultural
              awareness to the students of our beloved college.
            </p>
          </div>
          {/* <lottie-player
            id="aboutsvg"
            src="https://assets6.lottiefiles.com/packages/lf20_yIZkqk.json"
            background="transparent"
            speed="0.6"
            loop
            autoplay
          ></lottie-player> */}
          <div className={styles.about_svg}>
            <AboutLottie />
          </div>
        </div>
        <div className={styles.dividers} id={styles.logo}>
          <CSSLogo />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
