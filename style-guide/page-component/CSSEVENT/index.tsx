import React from "react";
import Styles from "./CSSEVENT.module.css";
import CSSEVENTMAP from "../CSSEVENT/CSSEVENTMap";

const CSSEVENT = () => {
  const CSSEVENT = [
    {
      name: "ABACUS",
      cont: "Enigma is a weekly coding contest organized by the CP wing aimed to make the students comfortable with the level and format of such questions and to provide them with a competitive edge in their endeavors.Having established a trail of success stories with NIT Silchar CSE students and alumni being placed in top companies around the globe, the CSS of NIT Silchar understands the importance of competitive programming and its role in cracking international hackathons and MNCs.",
      img: "./images/events/ENIGMAbg.png",
      id: "1",
      link: "/abacus",
    },

    {
      name: "ENIGMA",
      cont: "Enigma is a weekly coding contest organized by the CP wing aimed to make the students comfortable with the level and format of such questions and to provide them with a competitive edge in their endeavors.Having established a trail of success stories with NIT Silchar CSE students and alumni being placed in top companies around the globe, the CSS of NIT Silchar understands the importance of competitive programming and its role in cracking international hackathons and MNCs.",
      img: "./images/events/ENIGMAbg.png",
      id: "2",
      link: "/enigma",
    },
  ];

  return (
    <>
      <section className={Styles.CSS}>
        {CSSEVENT.map((event) => (
          <CSSEVENTMAP key={event.id} CSSEvents={event} />
        ))}
      </section>
    </>
  );
};

export default CSSEVENT;
