import React, { useState } from "react";
import styles from "./styles.module.css";
import Esperanza from "../../components/Esperanza";
import Abacus from "../../components/Abacus";

const Gallery = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_content}>
          <p className={styles.gallerytext}>Gallery</p>
          <span className={styles.gallerytext}>
            Things end but memories last forever.{" "}
          </span>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => setActive(true)}
              style={{
                color: active ? "rgb(228, 31, 111)" : "rgb(68, 68, 68)",
              }}
            >
              Esperanza
            </button>
            <button
              onClick={() => setActive(false)}
              style={{
                color: !active ? "rgb(228, 31, 111)" : "rgb(68, 68, 68)",
              }}
            >
              Abacus
            </button>
          </div>
        </div>
      </div>
      {active && <Esperanza />}
      {!active && <Abacus />}
    </>
  );
};

export default Gallery;
