import Styles from "./carousel.module.css";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import { EffectFade, Navigation, Pagination, Scrollbar } from "swiper";

export default function Carousel() {
  const currentIndex = useRef(0);
  const [targetIndex, setTargetIndex] = useState(() => 0);

  const ref = useRef();

  const videos = document.querySelectorAll("carouselcard");

  const iarray = [
    "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FCSS.NITSilchar%2Fvideos%2F560968688975273%2F&show_text=false&width=560&t=0",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7020012658594590720?compact=1",
    "https://www.youtube.com/embed/eVivzsATS6Q",
    "https://www.youtube.com/embed/R2I_pISNHGI",
    "https://www.youtube.com/embed/gLNe_msUjnY",
    "https://www.youtube.com/embed/4GASb93__Bg",
    "https://www.youtube.com/embed/fzNMd3Tu1Zw",
    "https://www.youtube.com/embed/X0sRdWLiPDg",
  ];

  const handleRange = async (e) => {
    setTargetIndex(e.target.value);

    let width = ref.current.clientWidth;

    if (e.target.value - currentIndex.current > 0) {
      const num = e.target.value - currentIndex.current;
      //  console.log(ref);
      ref.current.scrollLeft = (await ref.current.scrollLeft) + width * num;

      currentIndex.current = e.target.value;
    } else if (e.target.value - currentIndex.current < 0) {
      const num = e.target.value - currentIndex.current;
      ref.current.scrollLeft = (await ref.current.scrollLeft) + width * num;
      currentIndex.current = e.target.value;
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.carousel} ref={ref}>
        {/*iarray.map((item, index) => {
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
        })*/}
        <Swiper
          slidesPerView={1.1}
          freeMode={true}
          navigation={true}
          modules={[Navigation, Pagination, Scrollbar, EffectFade]}
          scrollbar={{ draggable: true }}
          effect={"flip"}
          pagination={{ clickable: true }}
          draggable={true}
          centeredSlides={true}
          loop={true}
          className={Styles.videocont}
          spaceBetween={5}
        >
          {iarray.map((item, index) => {
            return (
              <SwiperSlide grabCursor={true} draggable={true} freeMode={true}>
                {" "}
                <iframe
                  className={Styles.iframe}
                  src={`${iarray[index]}`}
                  title="weather website using react js  #website #reactjs  #development"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className={Styles.buttons}>
         <span className={Styles.lbutton} onClick={goLeft}>&lt;</span>
      <span className={Styles.rbutton} onClick={goRight}>&gt;</span> 
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
    */}
    </div>
  );
}
