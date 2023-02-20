import React from "react";
import styles from "./styles.module.css";
import Card from "../Abacus-cards";
// import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroText}>Timestamp</h1>
      <div className={styles.TimestampDates}>
        <div className={styles.TimestampDate && styles.activeLink}>
          Sunday, 21 Jan
        </div>
        <div className={styles.TimestampDate}>Sunday, 22 Jan</div>
        <div className={styles.TimestampDate}>Sunday, 23 Jan</div>
      </div>
      <div className={styles.TimestampCards}>
        <Card img={"/images/abacus/1.jpg"} name="Kumar Ashish" time="9:45PM" />
        <Card img={"/images/abacus/2.jpg"} name="Ranjan" time="9:45PM" />
        <Card img={"/images/abacus/3.jpg"} name="LOL" time="9:45PM" />
        <Card img={"/images/abacus/4.jpg"} name="YAS" time="9:45PM" />
      </div>
    </div>
  );
};

export default Hero;
