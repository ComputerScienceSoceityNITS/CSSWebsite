import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Esperanza from "../../components/Esperanza";
import Abacus from "../../components/Abacus";
import BrightGallery from "../../components/lottie-player/gallerybright";

const Gallery = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.lottiecont}>
          {" "}
          <BrightGallery />
        </div>
        
          <div className={styles.header_content}>
            <p className={styles.gallerytext}>Gallery</p>
            <span className={styles.gallerytext}>
              A Picture Is Worth A Thousand Words.
            </span>
          </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setActive(true)}
          style={{
            color: active ? "rgb(228, 31, 111)" : "rgb(68, 68, 68)",
            borderBottom: active ? "1px rgb(228, 31, 111) solid" : "none",
            boxShadow: active ? "0 0 20px rgb(228, 31, 111)" : "none",
          }}
        >
          Cultural
        </button>
        <button
          onClick={() => setActive(false)}
          style={{
            color: !active ? "rgb(228, 31, 111)" : "rgb(68, 68, 68)",
            borderBottom: !active ? "1px rgb(228, 31, 111) solid" : "none",
            boxShadow: !active ? "0 0 20px rgb(228, 31, 111)" : "none",
          }}
        >
          Technical
        </button>
      </div>
        
      </div>

      {active && <Esperanza />}
      {!active && <Abacus />}
    </>
  );
};

export default Gallery;
