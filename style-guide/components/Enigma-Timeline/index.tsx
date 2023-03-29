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
    <div className={styles.hero}>
      <h1 className={styles.enigmaStatus}>MORE ABOUT ENIGMA</h1>
      <div className={styles.aboutEnigma}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          adipisci unde tenetur praesentium! Possimus adipisci velit assumenda
          minima soluta vero.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero, iste? Fugit, dolor. Aliquam,
          excepturi culpa, iusto facilis laboriosam veritatis autem ipsa, eius
          deleniti omnis harum voluptatibus? Vel, qui ipsum. Perferendis! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque
          blanditiis suscipit reiciendis rem corrupti reprehenderit dicta nihil
          labore numquam? adipisicing elit. Sunt, quasi!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          velit officia corrupti harum molestias laboriosam, laudantium at ad.
          Deserunt, iure doloremque. Ab, eveniet quasi molestias minima
          inventore commodi esse nam!
        </p>
      </div>
      <p className={styles.uppperBanner2} >
      COMING SOON
      </p>
      <p className={styles.uppperBanner1}>
      COMING SOON
      </p>
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
    </div>
  );
};

export default Hero;
