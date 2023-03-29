import React, { useState } from "react";
import styles from "./style.module.css";
const EnigmaRegisterComponent = ({ data }: any) => {
  const essentialData = ["Name", "Username", "Phone Number"];
  const eventNameLength = data.name.split(" ").length;
  let eventNameClass;
  if (eventNameLength >= 3) {
    eventNameClass = "eventName3";
  } else if (eventNameLength === 2) {
    eventNameClass = "eventName2";
  } else {
    eventNameClass = "eventName";
  }
  console.log(eventNameLength);
  const [registered, setRegistered] = useState(false);
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
          <div className={styles.registerFormMin}>
            {essentialData.map((element, index) => {
              return (
                <div className={styles.group} key={index}>
                  <input
                    required
                    type="text"
                    className={styles.input}
                    placeholder="lol"
                  />
                  <span className={styles.highlight}></span>
                  <span className={styles.bar}></span>
                  <label className={styles.label}>{element}</label>
                </div>
              );
            })}

            <div className={styles.btnWrapper}>
              <button
                className={` ${registered ? styles.btnhide : styles.btn}`}
                onClick={() => {
                  setRegistered(true);
                }}
              >
                Register
              </button>
            </div>

            <div
              className={` ${
                registered ? styles.registeredSuccess : styles.unRegistered
              }`}
            >
              <p className={styles.congMsg}>
                Congratulations ! You have successfully registered for the
                contest
              </p>
              <p>
                <a href={data.contestLink}>Go To Contest</a>
              </p>
            </div>
          </div>
          <div className={styles.eventNameSection}>
            <h1
              className={
                (eventNameLength === 1 && styles.eventName) ||
                (eventNameLength === 2 && styles.eventName2) ||
                (eventNameLength >= 3 && styles.eventName3) ||
                undefined
              }
            >
              {data.name}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnigmaRegisterComponent;
