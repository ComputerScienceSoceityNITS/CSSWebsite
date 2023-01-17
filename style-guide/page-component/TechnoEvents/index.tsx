import React from "react";
import Styles from "./technoEvents.module.css";
import TechnoMap from "./TechnoMap";
import WorkingMan from "../../components/lottie-player/working-man";
import EventBg from "../../components/lottie-player/event-bg";
const TechnoEvents = () => {
  const cards = [
    {
      name: "SPEAKER SESSIONS",
      cont1:
        "The Computer Science Society organizes numerous speaker sessions throughout the course of the year featuring techies from across the country.",
      cont2:
        "Having proved their mettle in varied advancing domains in the realm of computational sciences, the words of guidance from the speakers target to ignite within the students a sense of zeal and initiative as they strive forward in their respective fields. The PR wing of the CSS organizes these sessions.",
      img: "./images/events/Speaker-session.jpeg",
      id: "1",
    },

    {
      name: "C CLASSES",
      cont1:
        " Every year CSS organizes introductory to advanced-level classes in C programming for freshers taken by the CSE sophomores themselves.",
      cont2:
        " The aim of the programme is to provide the students with a mentor who has followed the same path as themselves and can acknowledge and resolve the problems faced by the freshers as they gear up to pursue their careers in tech.",
      img: "./images/events/C-classes.png",
      id: "3",
    },

    {
      name: "DEVELOPMENT WORKSHOPS",
      cont1:
        " CSS organizes numerous development workshops throughout the course of the year which are conducted by the DEV Wing ",
      cont2:
        "  to help the students navigate through the challenging concepts of fields like app dev, web dev, web3, etc.and to provide them with a competitive edge in the corporate world.",
      img: "./images/events/Development.jpeg",
      id: "4",
    },
    {
      name: "ENIGMA",
      cont1:
        "Enigma is a weekly coding contest organized by the CP wing aimed to make the students comfortable with the level and format of such questions ",
      cont2:
        "and to provide them with a competitive edge in their endeavors.Having established a trail of success stories with NIT Silchar CSE students and alumni being placed in top companies around the globe, the CSS of NIT Silchar understands the importance of competitive programming and its role in cracking international hackathons and MNCs.",
      img: "./images/events/Enigma.png",
      id: "2",
    },
    {
      name: "ML SESSIONS",
      cont1:
        "Machine Learning is one of the fastest-growing domains in computer science with several applications in data analytics ",
      cont2:
        "and leverage that to improve the extent of performance in fields like A.I.The ML wing of CSS organizes ML sessions on a regular basis to mentor students and help them advance in the field and pursue a career in it",
      img: "./images/events/ML-session.jpg",
      id: "6",
    },
  ];
  return (
    <>
      <section className={Styles.techno}>
        <div className={Styles.techno_bg_1}>
          <EventBg />
        </div>
        <div className={Styles.techno_bg_2}>
          <EventBg />
        </div>
        <div className={Styles.techno_bg_3}>
          <EventBg />
        </div>
        <div className={Styles.lottie_1}>
          <WorkingMan />
        </div>
        {cards.map((event) => (
          <TechnoMap events={event} key={event.id} />
        ))}
      </section>
    </>
  );
};

export default TechnoEvents;
