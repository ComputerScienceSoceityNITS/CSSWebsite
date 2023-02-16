import React from "react";
import Styles from "./events.module.css";
import CSSEvents from "../CSSEvents";
import ScrollDownPink from "../../components/lottie-player/scrollDownPink";
import EventsBg from "../../components/lottie-player/events";

const Events = () => {
  return (
    <>
      <div className={Styles.events_bg}>
        <EventsBg />

        <div className={Styles.events_heading}>
          <span>OUR</span>
          <span>EVENTS</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            itaque quaerat repudiandae a distinctio et totam dicta, fugiat
            eligendi, nulla non quidem soluta quis impedit incidunt commodi
            obcaecati sed fuga ut voluptatum aperiam? In facere fugiat, Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Consecteteniti
            possimus aliquid corrupti commodi aspernatur magni officiis
            consequatur? fuga consequuntur quia animi.
          </p>
        </div>

        <div className={Styles.eventsCards}>
          <CSSEvents />
          <ScrollDownPink />
        </div>
      </div>
    </>
  );
};

export default Events;
