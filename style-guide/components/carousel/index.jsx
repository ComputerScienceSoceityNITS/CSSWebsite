import React from "react";
import Styles from "./carousel.module.css";
import { useState } from "react";

export default function Carousel() {
  const [currentIndex, setIndex] = useState(0);
  const iarray = [
    "https://www.youtube.com/embed/eVivzsATS6Q",
    "https://www.youtube.com/embed/R2I_pISNHGI",
    "https://www.youtube.com/embed/gLNe_msUjnY",
    "https://www.youtube.com/embed/10gvOqiKkTQ",
  ];
  const goLeft = () => {
    if (currentIndex == 0) {
      setIndex(iarray.length - 1);
    } else {
      setIndex((currentIndex) => currentIndex - 1);
    }
  };

  const goRight = () => {
    if (currentIndex == iarray.length - 1) {
      setIndex(0);
    } else {
      setIndex((currentIndex) => currentIndex + 1);
    }
  };

  const goToVideo = (i) => {
    setIndex(i);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.leftarrow} onClick={goLeft}>
        &lt;
      </div>
      <div className={Styles.rightarrow} onClick={goRight}>
        &gt;
      </div>
      <iframe
        className={Styles.iframe}
        src={`${iarray[currentIndex]}`}
        title="weather website using react js  #website #reactjs  #development"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className={Styles.dots}>
        {iarray.map((item, index) => {
          return index == currentIndex ? (
            <span
              className={Styles.dot}
              key={index}
              onClick={() => {
                goToVideo(index);
              }}
            ></span>
          ) : (
            <span
              className={Styles.dotu}
              key={index}
              onClick={() => {
                goToVideo(index);
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
