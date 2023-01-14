import Styles from "./carousel.module.css";
import { useState, useRef } from "react";

export default function Carousel() {
  const currentIndex = useRef(0);
  const [targetIndex, setTargetIndex] = useState(() => 0);

  const ref = useRef();

  const videos = document.querySelectorAll("carouselcard");

  const iarray = [
    "https://www.youtube.com/embed/eVivzsATS6Q",
    "https://www.youtube.com/embed/R2I_pISNHGI",
    "https://www.youtube.com/embed/gLNe_msUjnY",
    "https://www.youtube.com/embed/10gvOqiKkTQ",
    "https://www.youtube.com/embed/WZit5nLIHhg?list=RDWZit5nLIHhg",
    "https://www.youtube.com/embed/4GASb93__Bg",
    "https://www.youtube.com/embed/fzNMd3Tu1Zw",
    "https://www.youtube.com/embed/X0sRdWLiPDg",
  ];

  const handleRange = (e) => {
    setTargetIndex(() => e.target.value);
    let width = ref.current.clientWidth;

    if (e.target.value - currentIndex.current > 0) {
      const num = e.target.value - currentIndex.current;
      console.log(ref);
      ref.current.scrollLeft = ref.current.scrollLeft + width * num;

      currentIndex.current = e.target.value;
    } else if (e.target.value - currentIndex.current < 0) {
      const num = e.target.value - currentIndex.current;
      ref.current.scrollLeft = ref.current.scrollLeft + width * num;
      currentIndex.current = e.target.value;
    }
  };

  return (
    <div className={Styles.container}>
      {/* <iframe
        className={Styles.iframe}
        src={`${iarray[currentIndex]}`}
        title="weather website using react js  #website #reactjs  #development"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      <div className={Styles.carousel} ref={ref}>
        {iarray.map((item, index) => {
          return (
            <div className={Styles.videocont}>
              <iframe
                className={Styles.iframe}
                src={`${iarray[index]}`}
                title="weather website using react js  #website #reactjs  #development"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          );
        })}
      </div>
      <div className={Styles.buttons}>
        {/* <span className={Styles.lbutton} onClick={goLeft}>&lt;</span>
      <span className={Styles.rbutton} onClick={goRight}>&gt;</span> */}
        <div className={Styles.sliderValue}>
          <span className={Styles.value}>{parseInt(targetIndex) + 1}</span>
        </div>
        <div className={Styles.range}>
          <input
            type="range"
            min="0"
            className={Styles.rangeinput}
            step="1"
            max="7"
            value={targetIndex}
            onChange={(e) => {
              handleRange(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}
