import React from "react";
import styles from "./styles.module.css";
import HeroLottie from "../../components/lottie-player/Hero";
import NetworkLottie from "../../components/lottie-player/homePageNetwork";
import ScrollAnime from "../../components/lottie-player/homePageScroll";
const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.network_lottie}>
        <NetworkLottie />
      </div>
      <div className={styles.scrollanime}>
        <ScrollAnime />
      </div>
      <p className={styles.bgtext}>
        Computer
        <br /> Science <br /> Society
      </p>
      <div className={styles.dashboard}>
        <div className={styles.hero_lottie}>
          <HeroLottie />
        </div>
        <div className={styles.bottomText}>
          <p>CSS</p>
        </div>
        <div
          className={styles.dividers_first}
          id="headTile"
          style={{ zIndex: "16" }}
        >
          <div className={styles.gradientbg}></div>
          <div className={styles.title}>
            COMPUTER <br /> SCIENCE <br /> SOCIETY
          </div>
          <div className={styles.subtitle} id="subtitle">
            <p>Department of Computer Science and Engineering</p>
            <p>National Institute of Technology, Silchar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
