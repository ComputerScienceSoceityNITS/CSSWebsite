import React, { useState } from "react";
import Styles from "./events.module.css";
import TechnoEvents from "../TechnoEvents";
import CulturalEvents from "../CulturalEvents";
import AbacusEvents from "../AbacusEvents";
import ScrollDownLottie from "../../components/lottie-player/scrollDown";
import EventsBg from "../../components/lottie-player/events";

const Events = () => {
  const [active, setActive] = useState(0);
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
              active === 0 ? Styles.active : ""
            }`}
            onClick={() => {
              setActive(0);
            }}
          >
            Techno Events
          </button>
          <button
            id="scultural"
            className={`${Styles.eventBtn} ${
              active === 1 ? Styles.active : ""
            }`}
            onClick={() => {
              setActive(1);
            }}
          >
            Cultural Events
          </button>
          <button
            id="sabacus"
            className={`${Styles.eventBtn} ${
              active === 2 ? Styles.active : ""
            }`}
            onClick={() => {
              setActive(2);
            }}
          >
            Abacus Events
          </button>
        </div>
        {active === 0 && <TechnoEvents />}
        {active === 1 && <CulturalEvents />}
        {active === 2 && <AbacusEvents />}
      </main>
    </div>
  );
};

export default Events;
