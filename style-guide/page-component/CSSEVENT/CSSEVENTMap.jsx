import React from "react";
import Styles from "./CSSEVENT.module.css";
const CSSEVENTMAP = ({ CSSEvents }) => {
  return (
    <>
      {" "}
      <div className={` ${Styles.event_card}`}>
        <p>{CSSEvents.name}</p>
        <a href={CSSEvents.link}>
          <img src={CSSEvents.img} alt="Image" />
        </a>
      </div>
    </>
  );
};

export default CSSEVENTMAP;
