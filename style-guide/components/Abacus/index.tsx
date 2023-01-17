import React from "react";
import styles from "./styles.module.css";

const Abacus = () => {
  const path = "./images/abacus/";
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className={styles.wrapper}>
        {images.map((image, ind) => (
          <div key={ind} className={styles.item}>
            <div className={styles.polaroid}>
              <img src={path + image + ".jpg"} alt="image" />
              <div className={styles.caption}>Abacus</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Abacus;
