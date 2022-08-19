import React from "react";
import styles from "./styles.module.css";

const Esperanza = () => {
  const path = "./images/esperanza/";
  const images = [1, 2, 3, 7, 4, 6, 8, 5, 9, 31];
  return (
    <>
      <div className={styles.wrapper}>
        {images.map((image, ind) => (
          <div key={ind} className={styles.item}>
            <div className={styles.polaroid}>
              <img src={path + image + "-min.jpg"} alt="image" />
              <div className={styles.caption}>Esperanza</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Esperanza;
