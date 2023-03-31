import React from "react";
import styles from "./style.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroText}>ENIGMA / ENIGMA+</h1>
      <h3 className={styles.heroHead}>WHAT?</h3>
      <p className={styles.heroDesc}>
        Enigma is the competitive programming contests held by CP wing primarily
        for second-years. Participation is open to all and the contests are held
        regularly on Codeforces.
      </p>

      <h3 className={styles.heroHead}>WHY?</h3>
      <p className={styles.heroDesc}>
        The CP wing organises ENIGMA to cultivate a culture of competitive
        programming and make the students familiar with programming contests.
        With leaderboards, it also fosters friendly competition among the
        students.
      </p>

      <h3 className={styles.heroHead}>ADVANTAGES?</h3>
      <p className={styles.heroDesc}>
        <ul className={styles.advantagesList}>
          <li>Improvement of problem solving and DSA skills</li>
          <li>Preparation for OAs and other online technical rounds</li>
          <li>Improves the ability of students to perform under pressure</li>
        </ul>
      </p>
      <img className={styles.heroLogo} src="/images/logo_compressed.png" />
    </div>
  );
};

export default Hero;
