import React from "react";
import Styles from "./CSSEvents.module.css";
import CSSMap from "./CSSEventsMap";
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
      img: "./images/events/event-5_.jpg",
      id: "12",
    },
  ];

  return (
    <>
      <h2 className={Styles.eventHeading}>CULTURAL EVENTS</h2>

      <div className={`${Styles.otherEvents}`}>
        <section className={Styles.CSS}>
          {CSSEvents.map((event) => (
            <CSSMap key={event.id} CSSEvents={event} />
          ))}
        </section>
      </div>
    </>
  );
};

export default CSSEvents;
