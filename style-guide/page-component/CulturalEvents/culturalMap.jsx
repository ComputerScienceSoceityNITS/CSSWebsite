import React from "react";
import Styles from "./culturalEvents.module.css";
const CulturalMap = ({ CulturalEvents, key }) => {
  return (
    <div className={` ${Styles.card_blur}`}>
      <div
        className={`${Styles.d_freshers} ${Styles.d_card_blur} ${Styles.mobile_hide}`}
      >
        <div className={Styles.h_before}>
          <div className={Styles.img_1_c}>
            <img src={CulturalEvents.img} alt="Image" />
          </div>
          <p className={Styles.d_title}>{CulturalEvents.name}</p>
        </div>
        <div className={Styles.h_after}>
          <div className={Styles.d_content}>
            <p>
              {CulturalEvents.cont1}
              {CulturalEvents.cont2}
              <span className={Styles.mobile_hide}>{CulturalEvents.cont3}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.desktop_hide}>
        <p className={Styles.title}>{CulturalEvents.name}</p>
        <p>
          {CulturalEvents.cont1}
          {CulturalEvents.cont2}
          <span className={Styles.mobile_hide}>{CulturalEvents.cont3}</span>
        </p>
      </div>
    </div>
  );
};

export default CulturalMap;
