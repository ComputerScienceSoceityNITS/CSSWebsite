import React from "react";
import Styles from "./abacusEvents.module.css";
const AbacusMap = ({ AbacusEvents }) => {
  return (
    <div className={` ${Styles.card_blur}`}>
      <div className={` ${Styles.d_card_blur} ${Styles.mobile_hide}`}>
        <div className={Styles.h_before}>
          <div className={Styles.img_1_c}>
            <img src={AbacusEvents.img} alt="Image" />
          </div>
          <p className={Styles.d_title}>{AbacusEvents.name}</p>
        </div>
        <div className={Styles.h_after}>
          <div className={Styles.d_content}>
            <p>
              {AbacusEvents.cont1}
              {AbacusEvents.cont2}
              <span className={Styles.mobile_hide}>{AbacusEvents.cont3}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.desktop_hide}>
        <p className={Styles.title}>{AbacusEvents.name}</p>
        <p>
          {AbacusEvents.cont1}
          {AbacusEvents.cont2}
          <span className={Styles.mobile_hide}>{AbacusEvents.cont3}</span>
        </p>
      </div>
    </div>
  );
};

export default AbacusMap;
