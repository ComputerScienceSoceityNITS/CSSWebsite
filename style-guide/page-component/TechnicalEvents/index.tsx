import React from "react";
import Styles from "./CSSEvents.module.css";
import CSSMap from "./CSSEventsMap";
import CulturalEvents from "../CulturalEvents";
import { useState } from "react";
import ScrollDownLottie from "../../components/lottie-player/scrollDownPink";
const CSSEvents = () => {
  const CSSEvents = [
    {
      name: "DEVELOPMENT WORKSHOPS",
      cont1:
        " CSS organizes numerous development workshops throughout the course of the year which are conducted by the DEV Wing ",
      cont3:
        "  to help the students navigate through the challenging concepts of fields like app dev, web dev, web3, etc.",
      img: "./images/events/Development.jpeg",
      id: "3",
    },
    {
      name: "ML SESSIONS",
      cont1:
        "Machine Learning is one of the fastest-growing domains in computer science with several applications in data analytics.",
      cont3:
        "The ML wing of CSS organizes ML sessions on a regular basis to mentor students and help them advance in the field and pursue a career in it",
      img: "./images/events/ML-session.jpg",
      id: "4",
    },

    {
      name: "OPEN SOURCE MARATHON",
      cont1:
        "The Computer Science Society organizes hackathons throughout the course of the year which are open source.",
      cont3:
        "It is a great opportunity to get to know others that have the same interests  and it is a great add up to your CV",
      img: "./images/events/hackathon.jpg",
      id: "7",
    },

    {
      name: "DSA MARATHON",
      cont1:
        "The Computer Science Society organizes DSA marathon events to help the students improve their DSA skills which can help them in their carrer",
      cont3:
        "and improve their coding skills as well as in creating a competetive enviornment among the students",
      img: "./images/events/dsamarathon_image.jpg",
      id: "8",
    },
    {
      name: "DESIGN WORKSHOPS",
      cont1:
        "The Computer Science Society organizes various design workshops throughout the year for the students",
      cont3:
        "thus helping them in improving their desgin skills in various fields",
      img: "./images/events/design.jpg",
      id: "9",
    },

    {
      name: "C CLASSES",
      cont1:
        " Every year CSS organizes introductory to advanced-level classes in C programming for freshers taken by the CSE sophomores themselves.",
      cont3:
        " The aim of the programme is to provide the students with a mentor who has followed the same path as themselves and resolve the problems faced by the freshers",
      img: "./images/events/C-classes.png",
      id: "10",
    },
  ];
  const [showSection, setshowSection] = useState(false);

  const scrollClick = () => {
    setshowSection(!showSection);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 1350,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className={`${Styles.goTop}`}
        onClick={() => {
          scrollClick();
          scrollToTop();
        }}
      >
        <ScrollDownLottie />
      </div>

      {showSection && (
        <div className={`${Styles.otherEvents}`}>
          <CulturalEvents />

          <h2 className={Styles.eventHeading}>TECHNICAL EVENTS</h2>

          <section className={Styles.CSS}>
            {CSSEvents.map((event) => (
              <CSSMap key={event.id} CSSEvents={event} />
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default CSSEvents;
