import React from "react";
import styles from "./style.module.css";
interface icard {
  name: string;
  time: string;
}
const Card = ({ name, time }: icard) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.date}>Date:-{time}</p>
      <p className={styles.time}>Time:-{time}</p>
      <a href={`enigma/${name}`} className={styles.btn}></a>
    </div>
  );
};

export default Card;
