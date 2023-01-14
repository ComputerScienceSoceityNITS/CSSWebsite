import React from "react";
import Styles from "./carousel.module.css";
import { useState } from "react";




export default function Carousel() {
  const [currentIndex, setIndex] = useState(0);
  const videos=document.querySelectorAll('carouselcard')


  const iarray = [
    "https://www.youtube.com/embed/eVivzsATS6Q",
    "https://www.youtube.com/embed/R2I_pISNHGI",
    "https://www.youtube.com/embed/gLNe_msUjnY",
    "https://www.youtube.com/embed/10gvOqiKkTQ",
    "https://www.youtube.com/embed/WZit5nLIHhg?list=RDWZit5nLIHhg",
    "https://www.youtube.com/embed/4GASb93__Bg",
    "https://www.youtube.com/embed/fzNMd3Tu1Zw",
    "https://www.youtube.com/embed/X0sRdWLiPDg"
  ];
  const goLeft = () => {
    if (currentIndex == 0) {
      setIndex(iarray.length - 1);
    } else {
      setIndex((currentIndex) => currentIndex - 1);
    }
  };

  const goRight = () => {

  };

  const goToVideo = (i) => {
    setIndex(i);
  };
  return (
    <div className={Styles.container}>
     
      
    { /* <iframe
        className={Styles.iframe}
        src={`${iarray[currentIndex]}`}
        title="weather website using react js  #website #reactjs  #development"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */
      }
    <div className={Styles.carousel}>
       <div className={Styles.carouselcards}>
     
       {iarray.map((item,currentIndex)=>{
        return  <div className={Styles.carouselcard} id={`$currentIndex`}>
        <iframe
        className={Styles.iframe}
        src={`${iarray[currentIndex]}`}
        title="weather website using react js  #website #reactjs  #development"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>  
                              
      </div>
       })}
      
       </div>
    </div>
    <div className={Styles.buttons}>

    </div>
    </div>
  );
}
