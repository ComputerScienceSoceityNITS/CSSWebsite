import React,{useEffect} from "react";
import styles from "./styles.module.css";
import AOS from "aos";

const Esperanza = () => {
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

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return (
    <>
      <div className={styles.wrapper} >
        {images1.map((image, ind) => (
          <div key={ind} className={styles.item} data-aos = "fade-up">
            <div className={styles.polaroid}>
              <img src={path1 + image[0] + "-min.jpg"} alt="image" />
              <div className={styles.caption}>{image[1]}</div>
            </div>
          </div>
        ))}
        {images2.map((image, ind) => (
          <div key={ind} className={styles.item} data-aos = "fade-up">
            <div className={styles.polaroid}>
              <img src={path2 + image + "-min.jpg"} alt="image" />
              <div className={styles.caption}>Esperanza</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Esperanza;
