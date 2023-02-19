import React from "react";
import Styles from "./events.module.css";
import CSSEvents from "../CSSEvents";
import EventsBg from "../../components/lottie-player/events";
import CSSEVENT from "../CSSEVENT";
import DownLottie from "../../components/lottie-player/scrollDownPink";
const Events = () => {
  return (
    <>
      <div className={Styles.events_bg}>
        <EventsBg />
        <div className={Styles.events_content}>
          <div className={Styles.events_heading}>
            <span>OUR</span>
            <span>EVENTS</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              itaque quaerat repudiandae a distinctio et totam dicta, fugiat
              eligendi, nulla upta Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nobis ea, dolor praesentiumommodi aspernatur
              magni officiis consequatur? fuga consequuntur quia animi.
            </p>
          </div>
          <div className={Styles.society_name}>
            <h1>COMPUTER SCIENCE SOCIETY</h1>
            <span></span>
            <p>presents</p>
          </div>
        </div>
        <div className={Styles.eventsCards}>
          <CSSEVENT />

          <CSSEvents />
        </div>
      </div>
    </>
  );
};

export default Events;
