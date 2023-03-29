import React from "react";
import styles from "./styles.module.css";
interface icard {
  img: string;
  name: string;
  time: string;
}
const Card = ({ img, name, time }: icard) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="Event Image" className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.time}>{time}</p>
      <a href={`abacus/${name}`} className={styles.btn}>
        Read More
      </a>
    </div>
  );
};

export default Card;
