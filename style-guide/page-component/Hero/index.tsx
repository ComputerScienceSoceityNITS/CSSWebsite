import React from "react";
import styles from "./styles.module.css";
import ParallaxBlob from "../../components/parallaxBlob";
import Globe from "../../components/lottie-player/globe";
import ScrollAnime from "../../components/lottie-player/homePageScroll";
const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.globe_lottie}>
        <Globe />
      </div>
      <div className={styles.scrollanime}>
        <ScrollAnime />
      </div>
      <p className={styles.bgtext}>
        Computer
        <br /> Science <br /> Society
      </p>
      <div className={styles.dashboard}>
        <div className={styles.parallax}>
          <ParallaxBlob offsetYMultiplier={0.2} />
        </div>
        <div className={styles.parallax}>
          <ParallaxBlob offsetYMultiplier={0.2} />
        </div>
        <div className={styles.divider} id="headTile" style={{ zIndex: "16" }}>
          <img
            src="/images/logo_compressed.png"
            alt=""
            className={styles.logo}
          />
          <div className={styles.title}>
            COMPUTER <br />
            SCIENCE <br />
            <span className={styles.highlight}>SOCIETY</span>
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
