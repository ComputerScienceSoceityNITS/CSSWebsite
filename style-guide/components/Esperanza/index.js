import React from "react";
import ImageItem from "./ImageItem";
import styles from "./styles.module.css";

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
