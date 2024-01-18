import React, { useState } from "react";
import SkeletonElement from "./SkeletonElement";
import styles from "./styles.module.css";
<<<<<<< HEAD:style-guide/components/Esperanza/index.tsx
// import AOS from "aos";
// import "aos/dist/aos.css";
=======
>>>>>>> 45d0b5a6297980e2149b4d597f528dac9ac188a3:style-guide/components/Esperanza/index.js

const Esperanza = () => {
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

<<<<<<< HEAD:style-guide/components/Esperanza/index.tsx
  // useEffect(()=>{
  //   AOS.init({duration: 1000});
  // },[])
=======
  const handleImageLoad = () => {
    setLoading(false);
  };
>>>>>>> 45d0b5a6297980e2149b4d597f528dac9ac188a3:style-guide/components/Esperanza/index.js

  return (
    <>
      <div className={styles.wrapper}>
        {images1.map((image, ind) => (
<<<<<<< HEAD:style-guide/components/Esperanza/index.tsx
          <div key={ind} className={styles.item} >
=======
          <div key={ind} className={styles.item}>
>>>>>>> 45d0b5a6297980e2149b4d597f528dac9ac188a3:style-guide/components/Esperanza/index.js
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
        ))}

        {images2.map((image, ind) => (
<<<<<<< HEAD:style-guide/components/Esperanza/index.tsx
          <div key={ind} className={styles.item} >
=======
          <div key={ind} className={styles.item}>
>>>>>>> 45d0b5a6297980e2149b4d597f528dac9ac188a3:style-guide/components/Esperanza/index.js
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
        ))}
      </div>
    </>
  );
};

export default Esperanza;
