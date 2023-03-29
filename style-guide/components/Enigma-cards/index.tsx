import React from "react";
import styles from "./style.module.css";
interface icard {
  name: string;
  date: string;
  time: string;
  endtime: string;
}
const Card = ({ name, date, time, endtime }: icard) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.date}>Date: {date}</p>
      <p className={styles.time}>
        Time: {time}-{endtime}
      </p>
      <a href={`enigma/${name}`} className={styles.btn}></a>
    </div>
  );
};

export default Card;
