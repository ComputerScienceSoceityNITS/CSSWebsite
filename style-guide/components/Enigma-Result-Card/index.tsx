import React from "react";
import styles from "./style.module.css";
interface icard {
  username: string;
  position: string;
  link: string;
}
const RankCard = ({ username, position, link }: icard) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.position}>{position}</h2>
      <h2 className={styles.username}>
        <a href={link}>{username}</a>
      </h2>
    </div>
  );
};

export default RankCard;
