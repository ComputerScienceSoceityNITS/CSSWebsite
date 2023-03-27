import React from "react";
import Styles from "./CSSEvents.module.css";
const CSSMap = ({ CSSEvents }) => {
  return (
    <div className={` ${Styles.card_blur}`}>
      <div className={` ${Styles.d_card_blur}`}>
        <div className={Styles.h_before}>
          <div className={Styles.img_1_c}>
            <img src={CSSEvents.img} alt="Image" />
          </div>
          <div className={Styles.d_title}>
            <p>{CSSEvents.name}</p>
          </div>
        </div>
        <div className={Styles.h_after}>
          <div className={Styles.d_content}>
            <p>
              {CSSEvents.cont1}
              <span className={Styles.mobile_hide}>{CSSEvents.cont3}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSMap;
