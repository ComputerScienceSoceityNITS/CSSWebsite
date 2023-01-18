import React from "react";
import styles from "./styles.module.css";

const Abacus = () => {
  const path = "./images/technical/";
  const images = [
    ["5", "The InspireRoom"],
    ["6", "The InspireRoom"],
    ["7", "The InspireRoom"],
    ["8", "The InspireRoom"],
    ["9", "The InspireRoom"],
    ["10", "The InspireRoom"],
  ];
  const path2 = "./images/abacus/";
  const images2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className={styles.wrapper}>
        {images.map((image, ind) => (
          <div key={ind} className={styles.item}>
            <div className={styles.polaroid}>
              <img src={path + image[0] + "-min.jpg"} alt="image" />
              <div className={styles.caption}>{image[1]}</div>
            </div>
          </div>
        ))}
        {images2.map((image, ind) => (
          <div key={ind} className={styles.item}>
            <div className={styles.polaroid}>
              <img src={path2 + image + ".jpg"} alt="image" />
              <div className={styles.caption}>Abacus</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Abacus;
