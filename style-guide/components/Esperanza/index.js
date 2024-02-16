import React, { useState } from "react";
import SkeletonElement from "./SkeletonElement";
import styles from "./styles.module.css";
import { Tilt } from 'react-tilt';

const Esperanza = ({theme}) => {


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


  return (
    <>
       <div className={styles.wrapper  + (theme === "dark" ? "dark":"")}>
      {images.map((image, ind) => (
        <ImageItem
          key={ind}
          src={path + image[0] + "-min.jpg"}
          alt="image"
          title={image[1]}
        />
      ))}

      {images2.map((image, ind) => (
        <ImageItem
          key={ind + images.length}
          src={path2 + image + ".jpg"}
          alt="image"
          title="Esperanza"
        />
      ))}
    </div>
    </>
  );
};

export default Esperanza;
