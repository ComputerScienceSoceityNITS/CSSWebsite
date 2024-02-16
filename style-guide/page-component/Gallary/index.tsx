import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Esperanza from "../../components/Esperanza";
import Abacus from "../../components/Abacus";
import BrightGallery from "../../components/lottie-player/gallerybright";

const Gallery = () => {
  const mode: string | null = localStorage.getItem("theme");
  const [active, setActive] = useState(true);

  const themeValue = mode != null ? mode : "default";
  
  return (
    <>
      <div className={styles.header}>
          <span></span>
          <span></span>
          <span></span>
        <div className={styles.headerContainer}>
          <div className={styles.lottiecont}>
          {" "}
          <BrightGallery />
        </div>
          <div className={styles.header_content }>
            <p className={styles.gallerytext + (mode === "dark" ? ' ' + styles.dark : '')}>Gallery</p>
            <span className={styles.gallerytext + (mode === "dark" ? ' ' + styles.dark : '')}>
              A Picture Is Worth A Thousand Words.
            </span>
          </div>
        </div>
        
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setActive(true)}
          style={{
            color: active ? "rgb(228, 31, 111)" : "rgb(35, 35, 35)",
            boxShadow: active ? "0 0 20px rgb(228, 31, 111)" : "none",
            
          }}
        >
          Cultural
        </button>
        <button
          onClick={() => setActive(false)}
          style={{
            color: !active ? "rgb(228, 31, 111)" : "rgb(35, 35, 35)",
            boxShadow: !active ? "0 0 20px rgb(228, 31, 111)" : "none",
            
          }}
        >
          Technical
        </button>
      </div>
        
      </div>

      {active && <Esperanza theme={mode} />}
      {!active && <Abacus theme={mode}/>}
    </>
  );
};

export default Gallery;
