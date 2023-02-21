import React, { useState } from "react";
import styles from "./style.module.css";
import Card from "../Enigma-cards";
import data from "../../../_json/events/events.json";

const Hero = () => {
  const datesSet = new Set();
  data.events.enigma.map((event) => {
    datesSet.add(event.contestDate);
  });
  const datesArray = Array.from(datesSet).sort();
  const [activeDate, setActiveDate] = useState(datesArray[0]);
  const dateSet = new Set();
  data.events.enigmaover.map((event) => {
    dateSet.add(event.contestDate);
  });
  const dateArray = Array.from(dateSet).sort();
  const [activeDateOver, setActiveDateOver] = useState(dateArray[0]);
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroText}>TIMELINE</h1>
      <h1 className={styles.enigmaStatus}>UPCOMING</h1>

      <div className={styles.TimestampDates}>
        {datesArray.length > 0 &&
          datesArray.map((date, i) => {
            return (
              <div
                className={
                  activeDate == date ? styles.activeLink : styles.TimestampDate
                }
                key={i}
                onClick={() => {
                  setActiveDate(date);
                }}
              >
                {date}
              </div>
            );
          })}
      </div>
      <div className={styles.TimestampCards}>
        {data.events.enigma.map((element, i) => {
          if (element.contestDate === activeDate) {
            return (
              <Card
                date={element.contestDate}
                name={element.name}
                time={element.startTime}
                endtime={element.endTime}
                key={i}
              />
            );
          }
        })}
      </div>
      <h1 className={styles.enigmaStatus}>COMPLETED</h1>

      <div className={styles.TimestampDates}>
        {dateArray.length > 0 &&
          dateArray.map((date, i) => {
            return (
              <div
                className={
                  activeDateOver == date
                    ? styles.activeLink
                    : styles.TimestampDate
                }
                key={i}
                onClick={() => {
                  setActiveDateOver(date);
                }}
              >
                {date}
              </div>
            );
          })}
      </div>
      <div className={styles.TimestampCards}>
        {data.events.enigmaover.map((element, i) => {
          if (element.contestDate === activeDateOver) {
            return (
              <Card
                date={element.contestDate}
                name={element.name}
                time={element.startTime}
                endtime={element.endTime}
                key={i}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Hero;
