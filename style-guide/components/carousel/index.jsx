import Styles from "./carousel.module.css";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import { EffectFade, Navigation, Pagination, Scrollbar } from "swiper";
import Slide from "../lottie-player/slide";

export default function Carousel() {
  const currentIndex = useRef(0);
  const [targetIndex, setTargetIndex] = useState(() => 0);

  const ref = useRef();

  const videos = document.querySelectorAll("carouselcard");

  const iarray = [
    "https://www.youtube.com/embed/xMJo865ORSs",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7020012658594590720?compact=1"
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

<iframe width="642" height="361" src="https://www.youtube.com/embed/xMJo865ORSs" title="StriverAtNITS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>