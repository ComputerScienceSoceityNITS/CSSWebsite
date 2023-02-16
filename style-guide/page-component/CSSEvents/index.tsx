import React from "react";
import Styles from "./CSSEvents.module.css";
import CSSMap from "./CSSEventsMap";

const CSSEvents = () => {
  const CSSEvents = [
    {
      name: "ABACUS",
      cont1:
        "Enigma is a weekly coding contest organized by the CP wing aimed to make the students comfortable with the level and format of such questions ",
      cont3:
        "and to provide them with a competitive edge in their endeavors.Having established a trail of success stories with NIT Silchar CSE students and alumni being placed in top companies around the globe, the CSS of NIT Silchar understands the importance of competitive programming and its role in cracking international hackathons and MNCs.",
      img: "./images/events/css-hack.png",
      id: "14",
      link: "https://nitscss.live",
    },

    {
      name: "ENIGMA",
      cont1:
        "Enigma is a weekly coding contest organized by the CP wing aimed to make the students comfortable with the level and format of such questions ",
      cont3:
        "and to provide them with a competitive edge in their endeavors.Having established a trail of success stories with NIT Silchar CSE students and alumni being placed in top companies around the globe, the CSS of NIT Silchar understands the importance of competitive programming and its role in cracking international hackathons and MNCs.",
      img: "./images/events/Enigma.png",
      id: "15",
      link: "https://nitscss.live",
    },

    {
      name: "ORIENTATION",
      cont1:
        "The CSS organizes the official society orientation programme each year for the fresher batch.The program aims to make the students aware of the wide range of opportunities",
      cont3:
        ", events and programmes that society offers. It introduces the freshers to the various divisions and initiatives of the society .",
      img: "./images/events/event-1_.jpg",
      link: "https://nitscss.live/events",
      id: "1",
    },
    {
      name: "DSA MARATHON",
      cont1:
        "The Computer Science Society organizes DSA marathon events to help the students improve their DSA skills which can help them in their carrer",
      cont3:
        "and improve their coding skills as well as in creating a competetive enviornment among the students",
      img: "./images/events/dsamarathon_image.jpg",
      link: "https://nitscss.live/events",
      id: "6",
    },
    {
      name: "ESPERENZA",
      cont1:
        "The official branch freshers for cse is organized by the CSS every year.The objective of the freshers is to provide the students with a platform to interact with their batchmates",
      cont3:
        " and to kickstart their college journey with a bunch of fun and engaging events.",
      img: "./images/events/event-5_.jpg",
      link: "https://nitscss.live/events",
      id: "3",
    },
    // {
    //     name: "OPEN SOURCE HACKATHON",
    //     cont1:
    //         "The Computer Science Society organizes hackathons throughout the course of the year which are open source.",
    //     cont3:
    //         "It is a great opportunity to get to know others that have the same interests  and it is a great add up to your CV",
    //     img: "./images/events/hackathon.jpg",
    //     id: "7",
    // },

    {
      name: "DEVELOPMENT WORKSHOPS",
      cont1:
        " CSS organizes numerous development workshops throughout the course of the year which are conducted by the DEV Wing ",
      cont3:
        "  to help the students navigate through the challenging concepts of fields like app dev, web dev, web3, etc.and to provide them with a competitive edge in the corporate world.",
      img: "./images/events/Development.jpeg",
      link: "https://nitscss.live/events",
      id: "12",
    },

    {
      name: "THE INSPIRE ROOM",
      cont1:
        "The Computer Science Society organizes numerous speaker sessions throughout the course of the year featuring techies from across the country.",
      cont3:
        "Having proved their mettle in varied advancing domains in the realm of computational sciences, the words of guidance from the speakers target to ignite within the students a sense of zeal and initiative as they strive forward in their respective fields. The PR wing of the CSS organizes these sessions.",
      img: "./images/events/Speaker-session.jpeg",
      link: "https://nitscss.live/events",
      id: "10",
    },

    {
      name: "ML SESSIONS",
      cont1:
        "Machine Learning is one of the fastest-growing domains in computer science with several applications in data analytics ",
      cont3:
        "and leverage that to improve the extent of performance in fields like A.I.The ML wing of CSS organizes ML sessions on a regular basis to mentor students and help them advance in the field and pursue a career in it",
      img: "./images/events/ML-session.jpg",
      link: "https://nitscss.live/events",
      id: "13",
    },
    {
      name: "CSS OLYMPICS",
      cont1:
        "CSS Olympics is the annual sports week conducted by the society and garners participation from all CSE batches.",
      cont3:
        "It provides a platform for the students to demonstrate their athletic abilities while participating in a wide range of sporting activities. ",
      img: "./images/events/olympics.jpg",
      link: "https://nitscss.live/events",
      id: "5",
    },
    // {
    //     name: "FAREWELL",
    //     cont1:
    //         "CSS organizes the farewell programme each year to bid adieu to the senior cse batch of the institute.The objective is to provide the seniors with a platform to relish and relive ",
    //     cont3:
    //         "the joyous moments of their college lives and to honor their contributions to the institute and the student body.",
    //     img: "./images/events/event-4.jpg",
    //     id: "2",
    // },

    {
      name: "CSS GO",
      cont1:
        "Being part of the society and it's legacy is an honour in no small sense.CSS organizes a plethora of fun events to commemorate the formation of society each year.",
      cont3:
        "The event is exclusively for second years CSE students and is organized by the second-year wing members themselves.",
      img: "./images/events/esparenza.jpg",
      link: "https://nitscss.live/events",
      id: "4",
    },

    // {
    //     name: "ML Projects",
    //     cont1:
    //         "The Computer Science Society showcases various ML projects based on real life problems",
    //     cont3:
    //         "and helps students explore the growing domain of machine learning and data science ",
    //     img: "./images/events/MLproject.jpg",
    //     id: "8",
    // },
    // {
    //     name: "Design Workshop",
    //     cont1:
    //         "The Computer Science Society organizes various design workshops throughout the year for the students",
    //     cont3:
    //         "thus helping them in improving their desgin skills in various fields  ",
    //     img: "./images/events/design.jpg",
    //     id: "9",
    // },

    // {
    //     name: "C CLASSES",
    //     cont1:
    //         " Every year CSS organizes introductory to advanced-level classes in C programming for freshers taken by the CSE sophomores themselves.",
    //     cont3:
    //         " The aim of the programme is to provide the students with a mentor who has followed the same path as themselves and can acknowledge and resolve the problems faced by the freshers as they gear up to pursue their careers in tech.",
    //     img: "./images/events/C-classes.png",
    //     id: "11",
    // },
  ];

  return (
    <section className={Styles.CSS}>
      {CSSEvents.map((event) => (
        <CSSMap key={event.id} CSSEvents={event} />
      ))}
    </section>
  );
};

export default CSSEvents;
