import React, { useState } from "react";
import styles from "./styles.module.css";
import Card from "../Abacus-cards";
import data from "../../../_json/events/events.json";
// import Image from 'next/image';

const Hero = () => {
  const datesSet = new Set();
  data.events.abacus.map((event) => {
    datesSet.add(event.startDate);
  });
  const datesArray = Array.from(datesSet).sort();
  const [activeDate, setActiveDate] = useState(datesArray[0]);
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroText}>Timestamp</h1>
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
        {/* <div className={styles.TimestampDate && styles.activeLink}>
          Sunday, 21 Jan
        </div>
        <div className={styles.TimestampDate}>Sunday, 22 Jan</div>
        <div className={styles.TimestampDate}>Sunday, 23 Jan</div> */}
      </div>
      <div className={styles.TimestampCards}>
        {data.events.abacus.map((element, i) => {
          if (element.startDate === activeDate) {
            return (
              <Card
                img={element.coverPic}
                name={element.name}
                time={element.time}
                key={i}
              />
            );
          }
        })}
        {/* <Card img={"/images/abacus/1.jpg"} name="Kumar Ashish" time="9:45PM" />
        <Card img={"/images/abacus/2.jpg"} name="Ranjan" time="9:45PM" />
        <Card img={"/images/abacus/3.jpg"} name="LOL" time="9:45PM" />
        <Card img={"/images/abacus/4.jpg"} name="YAS" time="9:45PM" /> */}
      </div>
    </div>
  );
};

export default Hero;
