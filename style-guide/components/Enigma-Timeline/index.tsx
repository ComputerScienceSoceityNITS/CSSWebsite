import React from "react";
import styles from "./style.module.css";
import Card from "../Enigma-cards";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroText}>TIMELINE</h1>
      <h1 className={styles.enigmaStatus}>UPCOMING</h1>

      <div className={styles.TimestampDates}>
        <div className={styles.TimestampDate && styles.activeLink}>
          Sunday, 21 Jan
        </div>
        <div className={styles.TimestampDate}>Sunday, 22 Jan</div>
        <div className={styles.TimestampDate}>Sunday, 23 Jan</div>
      </div>
      <div className={styles.TimestampCards}>
        <Card name="ENIGMA 35.0" time="8:05 PM-10:05 PM" />
        <Card name="ENIGMA 36.0" time="8:05 PM-10:05 PM" />
        <Card name="ENIGMA 37.0" time="8:05 PM-10:05 PM" />
      </div>

      <h1 className={styles.enigmaStatus}>COMPLETED</h1>

      <div className={styles.TimestampDates}>
        <div className={styles.TimestampDate && styles.activeLink}>
          Sunday, 21 Jan
        </div>
        <div className={styles.TimestampDate}>Sunday, 22 Jan</div>
        <div className={styles.TimestampDate}>Sunday, 23 Jan</div>
      </div>
      <div className={styles.TimestampCards}>
        <Card name="ENIGMA 32.0" time="8:05 PM" />
        <Card name="ENIGMA 33.0" time="8:05 PM" />
        <Card name="ENIGMA 34.0" time="8:05 PM" />
      </div>
    </div>
  );
};

export default Hero;
