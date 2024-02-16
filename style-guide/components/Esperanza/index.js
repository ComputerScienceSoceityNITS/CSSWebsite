import React, { useState } from "react";
import SkeletonElement from "./SkeletonElement";
import styles from "./styles.module.css";
import { Tilt } from 'react-tilt';

const Esperanza = ({theme}) => {

  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  };

  const defaultOptions = {
    reverse:        false,  
    max:            35,    
    perspective:    1000,   
    scale:          1,    
    speed:          1500,   
    transition:     true,   
    axis:           null,   
    reset:          true,    
    easing:         "cubic-bezier(.03,.98,.52,.99)",    
  };
  return (
    <>
      <div className={styles.wrapper + (theme === "dark" ? "dark":"")}>
        {images1.map((image, ind) => (
          <Tilt options={defaultOptions} className={styles.Tilt}>  
          <div key={ind} className={styles.item}>
            <div className={styles.polaroid}>
              <img
                src={path1 + image[0] + "-min.jpg"}
                alt="image"
                onLoad={handleImageLoad}
              />
              {loading && <SkeletonElement cards={1} />}
              <div className={styles.caption}>{image[1]}</div>
            </div>
          </div>
          </Tilt>
        ))}
          
        {images2.map((image, ind) => (
          <Tilt options={defaultOptions} className={styles.Tilt}> 
          <div key={ind} className={styles.item}>
            <div className={styles.polaroid}>
              <img
                src={path2 + image + "-min.jpg"}
                alt="image"
                onLoad={handleImageLoad}
              />
              {loading && <SkeletonElement cards={1} />}
              <div className={styles.caption}>Esperanza</div>
            </div>
          </div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default Esperanza;
