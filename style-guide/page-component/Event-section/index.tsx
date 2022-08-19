import React, { useState } from "react";
import styles from "./styles.module.css";
import events from "../../components/EventCardData/event_card";
import Link from "next/link";

const EventSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className={` ${styles.cont} ${styles.s__inactive}`}>
      <div className={styles.cont__inner}>
        {events.map((event, index) => {
          return (
            <div
              className={`${styles.el} ${
                activeIndex === index + 1 ? styles.el__active : ""
              } ${
                activeIndex === -1 || activeIndex === index + 1
                  ? ""
                  : styles.el__inactive
              }`}
              onClick={() => {
                if (activeIndex === -1) setActiveIndex(index + 1);
              }}
              key={index}
            >
              <div className={styles.el__overflow}>
                <div className={styles.el__inner}>
                  <div
                    className={`${styles.el__close_btn} ${
                      activeIndex === index + 1
                        ? styles.el__close__btn__active
                        : ""
                    }`}
                    onClick={() => {
                      if (!(activeIndex === -1)) setActiveIndex(-1);
                    }}
                  ></div>
                  <div
                    className={`${styles.el__bg} ${
                      activeIndex === index + 1 ? styles.el__bg__active : ""
                    }`}
                    style={{ backgroundSize: "contain" }}
                  ></div>
                  <div className={styles.el__preview_cont}>
                    <h2
                      className={`${
                        activeIndex === index + 1
                          ? styles.el__heading_active
                          : styles.el__heading
                      }`}
                    >
                      {event.heading}
                    </h2>
                  </div>
                  <div
                    className={`${styles.el__content} ${
                      activeIndex === index + 1 ? styles.el__content_active : ""
                    }`}
                  >
                    <div className={styles.el__text}>
                      {event.text}
                      <br />
                      <br />
                      {event.text2}
                    </div>
                  </div>

                  <div
                    className={`${styles.learn_more} ${
                      activeIndex === index + 1
                        ? styles.learn_more_active
                        : styles.learn_more_inactive
                    }`}
                  >
                    <Link href={event.link} passHref>
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Learn More</span>
                      </a>
                    </Link>
                    <span>
                      {" "}
                      <i className={styles.arrow}></i>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.el__index} ${
                  activeIndex === index + 1 ? styles.el__index_active : ""
                }`}
              >
                <div className={styles.el__index_back}>Tap for more</div>
                <div className={styles.el__index_front}>
                  <div
                    className={styles.el__index_overlay}
                    data-index="Tap for more"
                  >
                    Tap for more
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventSection;
