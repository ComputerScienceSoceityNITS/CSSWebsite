import React from "react";
import styles from "./style.module.css";
// import Card from "../Enigma-cards";
import data from "../../../_json/events/events.json";

const Hero = () => {
  const datesSet = new Set();
  data.events.enigma.map((event) => {
    datesSet.add(event.contestDate);
  });
  // const datesArray = Array.from(datesSet).sort();
  // const [activeDate, setActiveDate] = useState(datesArray[0]);
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.enigmaStatus}>MORE ABOUT ENIGMA</h1>
        <div className={styles.aboutEnigma}>
          <p>
            Apart from all these engagements, ENIGMA provides an opportunity for
            the freshman of the college to get introduced to the field of
            competitive programming. It prepares the students for
            internship/placement season by providing an opportunity to take a
            shot at real time Coding Round Problems. Our alumni have also, at
            many times appreciated this highly esteemed initiative by the CP
            Wing of the Society, given the value addition it has accentuated in
            the brightest of minds
          </p>
        </div>
      </div>

      {/* <div className={styles.animatedbanner}>
        <p className={styles.uppperBanner2} style={{ width: "300vw" }}>
          COMING SOON
        </p>
        <p className={styles.uppperBanner1} style={{ width: "300vw" }}>
          COMING SOON
        </p>
      </div> */}

      {/* <h1 className={styles.heroText}>TIMELINE</h1>

      <h1 className={styles.enigmaStatus}>UPCOMING</h1>

      <div className={styles.TimestampDates}>
        {datesArray.length > 0 &&
          datesArray.map((date: any, i) => {
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
        {datesArray.length > 0 &&
          datesArray.map((date: any, i) => {
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
      </div> */}
    </>
  );
};

export default Hero;
