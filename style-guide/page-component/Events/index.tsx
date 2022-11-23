import React, { useState } from "react";
import Styles from "./events.module.css";
import TechnoEvents from "../TechnoEvents";
import CulturalEvents from "../CulturalEvents";
import ScrollDownLottie from "../../components/lottie-player/scrollDown";
import EventsBg from "../../components/lottie-player/events";

const Events = () => {
  const [active, setActive] = useState(true);
  return (
    <div className={Styles.body_bg}>
      <header className={Styles.header}>
        <div className={Styles.heading}>
          <div className={Styles.coloredBg}>
            <p>
              <span>C</span>
              <span>S</span>
              <span>S</span>
            </p>
          </div>
          <h1 className={Styles.eventstyle}>Events</h1>
          <p className={Styles.tagline}>
            <span>Participate</span>
            <span>Enjoy</span>
            <span>Learn</span>
          </p>
        </div>
        <ScrollDownLottie />
        <EventsBg />
      </header>
      <main className={Styles.body_bg}>
        <div className={Styles.btnContainer}>
          <button
            id="stechno"
            className={`${Styles.eventBtn} ${
              active === true ? Styles.active : ""
            }`}
            onClick={() => {
              setActive(true);
            }}
          >
            Techno Events
          </button>
          <button
            id="scultural"
            className={`${Styles.eventBtn} ${
              active === false ? Styles.active : ""
            }`}
            onClick={() => {
              setActive(false);
            }}
          >
            Cultural Events
          </button>
        </div>
        {active && <TechnoEvents />}
        {!active && <CulturalEvents />}
      </main>
    </div>
  );
};

export default Events;
