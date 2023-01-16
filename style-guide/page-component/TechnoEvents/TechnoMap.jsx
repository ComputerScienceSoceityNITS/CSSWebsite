import React from "react";
import Styles from "./technoEvents.module.css";
// import Image from "next/image";
const TechnoMap = ({ events, key }) => {
  return (
    <div className={`${Styles.card_blur}`}>
      <div className={`${Styles.d_card_blur}  ${Styles.mobile_hide}`}>
        <div className={Styles.h_before}>
          <div className={Styles.img_1_c}>
            {/* <Image src={events.img} alt="event" /> */}
            <img src={events.img} alt="Image" />
          </div>
          <p className={Styles.d_title}>{events.name}</p>
        </div>
        <div className={Styles.h_after}>
          <div className={Styles.d_content}>
            <p>
              {events.cont1}
              <span className={Styles.mobile_hide}>{events.cont2}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.desktop_hide}>
        <p className={Styles.title}>{events.name}</p>
        <p>
          {events.cont1}
          <span className={Styles.mobile_hide}>{events.cont2}</span>
        </p>
      </div>
    </div>
  );
};

export default TechnoMap;
