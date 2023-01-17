import Styles from "./carousel.module.css";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import { EffectFade, Navigation, Pagination, Scrollbar } from "swiper";
import Slide from "../lottie-player/slide";

export default function Carousel() {
  const ref = useRef();
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

  return (
    <div className={Styles.container}>
      <div className={Styles.carousel} ref={ref}>
        <Swiper
          slidesPerView={1.1}
          freeMode={true}
          navigation={true}
          modules={[Navigation, Pagination, Scrollbar, EffectFade]}
          scrollbar={{ draggable: true }}
          effect={"flip"}
          draggable={true}
          centeredSlides={true}
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
                <span className={Styles.slide}>
                  <Slide />
                </span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
