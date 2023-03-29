import React from "react";
import styles from "./styles.module.css";
// import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroText}>ABACUS</h1>
      <p className={styles.heroDesc}>
        The annual Computer Science and Engineering week - ABACUS! The
        excitement begins each year, for the Annual week of the CSE department
        in which different games and competitions takes place where everyone
        gets a cool opportunity to prove their skills down and claim the prize
        money. But the most unique point about it is that it gives you, the
        freshers, the opportunity to become organizers, to present your ideas,
        instead of just participating and enables you to learn numerous things.
      </p>
      <img className={styles.heroLogo} src="/images/logo_compressed.png" />
    </div>
  );
};

export default Hero;
