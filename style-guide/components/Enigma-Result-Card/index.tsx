import React from "react";
import styles from "./style.module.css";
interface icard {
  username: string;
  position: string;
}
const RankCard = ({ username, position }: icard) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.position}>{position}</h2>
      <h2 className={styles.username}>{username}</h2>
    </div>
  );
};

export default RankCard;
