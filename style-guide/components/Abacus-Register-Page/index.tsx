import React from "react";
import styles from "./styles.module.css";

const AbacusRegisterComponent = ({ data }: any) => {
  const essentialData = ["Team Name", "Leader's Name", "Phone Number"];
  return (
    <>
      <div
        className={styles.heroSection}
        style={{
          background: `linear-gradient(200deg,var(--wing-page-bg1),var(--wing-page-bg2) 45%, var(--wing-page-bg3) 80%),url("${data.coverPic}") no-repeat center center / cover`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className={styles.registerCard}>
          <div className={styles.registerForm}>
            {essentialData.map((element, index) => {
              return (
                <div className={styles.group} key={index}>
                  <input required type="text" className={styles.input} />
                  <span className={styles.highlight}></span>
                  <span className={styles.bar}></span>
                  <label className={styles.label}>{element}</label>
                </div>
              );
            })}
          </div>
          <div className={styles.eventNameSection}>
            <h1 className={styles.eventName}>{data.name}</h1>
          </div>
        </div>
      </div>
      <div>{data.name}</div>
    </>
  );
};

export default AbacusRegisterComponent;
