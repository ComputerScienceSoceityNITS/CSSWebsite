import Styles from "./carousel.module.css";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import SwiperCore, { EffectFade, Navigation, Scrollbar, A11y } from "swiper";
import Slide from "../lottie-player/slide";

SwiperCore.use([Navigation, Scrollbar, A11y]);
export default function Carousel() {
  const currentIndex = useRef(0);
  const [targetIndex, setTargetIndex] = useState(() => 0);

  const ref = useRef();

  const videos = document.querySelectorAll("carouselcard");

  const iarray = [
    "https://www.youtube.com/embed/xMJo865ORSs",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7020012658594590720?compact=1",
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
        <Swiper
          slidesPerView={1.1}
          freeMode={true}
          modules={[Navigation, Scrollbar, EffectFade, A11y]}
          scrollbar={{ draggable: true }}
          effect={"flip"}
          navigation={true}
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
