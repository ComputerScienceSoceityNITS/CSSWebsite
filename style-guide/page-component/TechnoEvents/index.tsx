import React from "react";
import Styles from "./technoEvents.module.css";
import TechnoMap from "./TechnoMap";
import WorkingMan from "../../components/lottie-player/working-man";
const TechnoEvents = () => {
  const cars = [
    {
      name: "SPEAKER SESSIONS",
      cont1:
        "The Computer Science Society organizes numerous speaker sessions throughout the course of the year featuring techies from across the country.",
      cont2:
        "Having proved their mettle in varied advancing domains in the realm of computational sciences, the words of guidance from the speakers target to ignite within the students a sense of zeal and initiative as they strive forward in their respective fields. The PR wing of the CSS organizes these sessions.",
      img: "/./images/events/Speaker-session.jpeg",
    },
    {
      name: "ENIGMA",
      cont1:
        "Enigma is a weekly coding contest organized by the CP wing aimed to make the students comfortable with the level and format of such questions and to provide them with a competitive edge in their endeavors.",
      cont2:
        "Having established a trail of success stories with NIT Silchar CSE students and alumni being placed in top companies around the globe, the CSS of NIT Silchar understands the importance of competitive programming and its role in cracking international hackathons and MNCs.",
      img: "/./images/events/Enigma.png",
    },
    {
      name: "C CLASSES",
      cont1:
        " Every year CSS organizes introductory to advanced-level classes in C programming for freshers which are taken by the CSE sophomores themselves.",
      cont2:
        " The aim of the programme is to provide the students with a mentor who has followed the same path as themselves and can acknowledge and resolve the problems faced by the freshers as they gear up to pursue their careers in tech.",
      img: "/./images/events/C-classes.png",
    },

    {
      name: "DEVELOPMENT WORKSHOPS",
      cont1:
        " CSS organizes numerous development workshops throughout the course of the year which are conducted by the DEV Wing. The objective is to help the students navigate through the challenging and mind-numbing concepts",
      cont2:
        "of fields like app dev, web dev, web3, etc.and to provide them with a competitive edge in the corporate world.",
      img: "/./images/events/C-classes.png",
    },
    {
      name: "ABACUS",
      cont1:
        "Abacus is a one-week-long event organized by the CSS. The event garners participation from all CSE batches in the institute and comprises a plethora of exciting events like CSS wars, CSS hacks and many more.",
      cont2:
        " The event aims to provide a stress free week of fun for students to interact with each other, compete with their mates and win exciting prizes.",
      img: "/./images/events/Abacus-tech.jpeg",
    },
    {
      name: "ML SESSIONS",
      cont1:
        "Machine Learning is one of the fastest-growing domains in computer science with several applications in data analytics and leverage that to improve the extent and quality of performance in fields like A.I. ",
      cont2:
        "The ML wing of CSS organizes ML sessions on a regular basis to mentor students and help them advance in the field and pursue a career in it",
      img: "/./images/events/ML-session.jpg",
    },

    {
      name: "CSS HACKS",
      cont1:
        "Conducted under the banner of Abacus by the dev wing, CSS Hacks as the name suggests is an annual hackathon. The hackathon caters to the participants with a series of intriguing and complicated problems",
      cont2: "as they compete with their peers for exciting prizes.",
      img: "/./images/events/CSS-hack.png",
    },

    {
      name: "CSS WARS",
      cont1:
        "Web design is one of the most sought out fields in computer science. CSS wars is conducted under the banner of Abacus by the Dev wing and is an annual web development competition aimed at testing the prowess of the participants",
      cont2: " in HTML, CSS and Javascript.",
      img: "/./images/events/CSS-war.jpeg",
    },
  ];
  return (
    <>
      <section className={Styles.techno}>
        {cars.map((event) => (
          <TechnoMap events={event} key={null} />
        ))}

        <span className={Styles.mobile_hide}>
          <WorkingMan />
        </span>
      </section>
    </>
  );
};

export default TechnoEvents;
