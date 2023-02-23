import React from "react";
import Styles from "./CSSEvents.module.css";
import CSSMap from "./CSSEventsMap";
import { useState } from "react";
import ScrollDownLottie from "../../components/lottie-player/scrollDownPink";
const CSSEvents = () => {
  const CSSEvents = [
    {
      name: "ORIENTATION",
      cont1:
        "The CSS organizes the official society orientation programme each year for the fresher batch.The program aims to make the students aware of the wide range of opportunities",
      cont3:
        ", events and programmes that society offers. It introduces the freshers to the various divisions and initiatives of the society",
      img: "./images/events/event-1_.jpg",
      id: "1",
    },

    {
      name: "ESPERENZA",
      cont1:
        "The official branch freshers for cse is organized by the CSS every year.The objective of the freshers is to provide the students with a platform to interact with their batchmates",
      cont3:
        " and to kickstart their college journey with a bunch of fun and engaging events",
      img: "./images/events/event-5_.jpg",
      id: "2",
    },
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
      name: "THE INSPIRE ROOM",
      cont1:
        "The Computer Science Society organizes numerous speaker sessions throughout the course of the year featuring techies from across the country.",
      cont3:
        "The words of guidance from the speakers target to ignite within the students a sense of zeal and initiative as they strive forward in their respective fields",
      img: "./images/events/Speaker-session.jpeg",
      id: "5",
    },
    {
      name: "CSS OLYMPICS",
      cont1:
        "CSS Olympics is the annual sports week conducted by the society and garners participation from all CSE batches.",
      cont3:
        "It provides a platform for the students to demonstrate their athletic abilities while participating in a wide range of sporting activities",
      img: "./images/events/olympics.jpg",
      id: "6",
    },
    {
      name: "OPEN SOURCE HACKATHON",
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

    {
      name: "CSS GO",
      cont1:
        "Being part of the society and it's legacy is an honour in no small sense.CSS organizes a plethora of fun events to commemorate the formation of society each year.",
      cont3:
        "The event is exclusively for second years CSE students and is organized by the second-year wing members themselves",
      img: "./images/events/esparenza.jpg",
      id: "11",
    },

    {
      name: "FAREWELL",
      cont1:
        "CSS organizes the farewell programme each year to bid adieu to the senior cse batch of the institute.The objective is to provide the seniors with a platform to relish and relive ",
      cont3:
        "the joyous moments of their college lives and to honor their contributions to the institute and the student body",
      img: "./images/events/event-4.jpg",
      id: "12",
    },
  ];
  const [showSection, setshowSection] = useState(false);

  const scrollClick = () => {
    setshowSection(!showSection);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 1450,
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
