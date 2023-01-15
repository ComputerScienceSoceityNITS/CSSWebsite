import React from "react";
import SingTheSong from "../../components/lottie-player/singthesong";
import CulturalBg from "../../components/lottie-player/cultural-bg";
import Styles from "./culturalEvents.module.css";
import CulturalMap from "./culturalMap";
const CulturalEvents = () => {
  const CulturalEvents = [
    {
      name: "ORIENTATION",
      cont1:
        "The CSS organizes the official society orientation programme each year for the fresher batch.The program aims to make the students aware of the wide range of opportunities, events and programmes that society offers.",
      cont3:
        " It introduces the freshers to the various divisions and initiatives of the society .",
      img: "./images/events/event-1.jpg",
      id: "1",
    },
    {
      name: "FAREWELL",
      cont1:
        "CSS organizes the farewell programme each year to bid adieu to the senior cse batch of the institute.The objective of the program is to provide the seniors with a platform to relish and relive the joyous moments of their college lives and to honor their contributions to the institute and the student body.",
      cont3: "",
      img: "./images/events/event-4.jpg",
      id: "2",
    },
    {
      name: "ESPERENZA",
      cont1:
        "The official branch freshers for cse is organized by the CSS every year.The objective of the freshers is to provide the students with a platform to interact with their batchmates and to kickstart their college journey with a bunch of fun and engaging events.",
      cont3: "",
      img: "./images/events/esparenza.jpg",
      id: "3",
    },
    {
      name: "CSS GO",
      cont1:
        "Being part of the Computer Science Society and it’s legacy is an honour in no small sense.CSS organizes a plethora of fun events to commemorate the formation of society each year.",
      cont3:
        "The event is exclusively for second years CSE students and is organized by the second-year wing members themselves.",
      img: "./images/events/event-2.jpg",
      id: "4",
    },
    {
      name: "CSS OLYMPICS",
      cont1:
        "CSS Olympics is the annual sports week conducted by the Computer Science Society and garners participation from all CSE batches.It provides a platform for the students to demonstrate their athletic abilities while participating in a wide range of sporting activities. ",
      cont3: "",
      img: "./images/events/olympics.jpg",
      id: "5",
    },
  ];
  return (
    <section className={Styles.cultural}>
      <div className={Styles.culturalbg1}>
        <CulturalBg />
      </div>
      <div className={Styles.culturalbg2}>
        <CulturalBg />
      </div>
      <div className={Styles.culturalbg3}>
        <CulturalBg />
      </div>
      {CulturalEvents.map((event) => (
        <CulturalMap key={event.id} CulturalEvents={event} />
      ))}
      <div className={Styles.lottie_3}>
        <SingTheSong />
      </div>
    </section>
  );
};

export default CulturalEvents;
