import React, { useState } from "react";
import SkeletonElement from "./SkeletonElement";
import styles from "./styles.module.css";

const Esperanza = () => {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const path1 = "./images/cultural/";
  const images1 = [
    ["1", "CSS Orientation"],
    ["2", "CSS Orientation"],
    ["3", "CSS Orientation"],
    ["4", "CSS Orientation"],
    ["5", "CSS Orientation"],
  ];

  const path2 = "./images/esperanza/";
  const images2 = [1, 2, 3, 7, 4, 6, 8, 5, 9, 31];

  const handleImageLoad = () => {
    setImageLoaded(true);
    setLoading(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        {images1.map((image, ind) => (
          <div key={ind} className={styles.item}>
            {loading&& !imageLoaded? (
              <SkeletonElement />
            ) : (
              <div className={styles.polaroid}>
                <img
                  src={path1 + image[0] + "-min.jpg"}
                  alt="image"
                  onLoad={handleImageLoad}
                />
                <div className={styles.caption}>{image[1]}</div>
              </div>
            )}
          </div>
        ))}
        {images2.map((image, ind) => (
          <div key={ind} className={styles.item}>
            {loading&&imageLoaded ? (
              <SkeletonElement />
            ) : (
              <div className={styles.polaroid}>
                <img
                  src={path2 + image + "-min.jpg"}
                  alt="image"
                  onLoad={handleImageLoad}
                />
                <div className={styles.caption}>Esperanza</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Esperanza;
