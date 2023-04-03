import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Card from "../Abacus-cards";
import date from "date-and-time";
import Spinner from "../Spinner";
// import data from "../../../_json/events/events.json";
// import Image from 'next/image';

const Hero = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/abacus`)
      .then((res) => res.json())
      .then((response) => {
        setData(response.events);
        // setActiveDate(datesArray[0]);
      })
      .finally(()=>setLoading(false))
  }, []);
  // console.log(data);

  const datesSet = new Set();
  data.map((event: any) => {
    datesSet.add(event.startDate);
  });
  const datesArray = Array.from(datesSet).sort();
  const [activeDate, setActiveDate] = useState(datesArray[0]);
  if(loading){
    return <Spinner/>
  }
  else{
    return (
      <div className={styles.hero}>
        <h1 className={styles.heroText}>Timestamp</h1>
        <div className={styles.TimestampDates}>
          {datesArray.length > 0 &&
            datesArray.map((Date: any, i) => {
              // console.log({date,activeDate});
              if (activeDate === undefined) {
                setActiveDate(datesArray[0]);
              }
              return (
                <div
                  className={
                    activeDate == Date ? styles.activeLink : styles.TimestampDate
                  }
                  key={i}
                  onClick={() => {
                    setActiveDate(Date);
                  }}
                >
                  {date.parse(Date, "YYYY-MM-DD").toDateString()}
                </div>
              );
            })}
          {/* <div className={styles.TimestampDate && styles.activeLink}>
            Sunday, 21 Jan
          </div>
          <div className={styles.TimestampDate}>Sunday, 22 Jan</div>
          <div className={styles.TimestampDate}>Sunday, 23 Jan</div>
          <div className={styles.TimestampDate}>Sunday, 23 Jan</div> */}
        </div>
        <div className={styles.TimestampCards}>
          {data.map((element: any, i) => {
            if (element.startDate === activeDate) {
              return (
                <Card
                  img={element.coverPic.url}
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
  }
};

export default Hero;
