import React from "react";
import styles from "./styles.module.css";

const AbacusRegisterComponent = ({ data }: any) => {
  const essentialData = ["Team Name", "Leader's Name", "Phone Number"];
  const minTeamSize = data.minTeamSize - 1;
  const maxTeamSize = data.maxTeamSize - 1;
  const eventNameLength = data.name.split(" ").length;
  const handleSubmit=() => {
    console.log("submitted");
  }
  return (
    <>
      <div
        className={styles.heroSection}
        style={{
          background: `linear-gradient(200deg,var(--wing-page-bg1),var(--wing-page-bg2) 45%, var(--wing-page-bg3) 80%),url("${data.coverPic?data.coverPic:null}") no-repeat center center / cover`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className={styles.registerCard}>
          <div
            className={
              minTeamSize > 0 ? styles.registerForm : styles.registerFormMin
            }
          >
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
            {minTeamSize > 0 && (
              <div className={styles.teamWrapper}>
                <legend className={styles.legend}>Required Team Members</legend>
                <div className={styles.fieldsets}>
                  {[...Array(minTeamSize)].map((x, index) => {
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
                        <label className={styles.label}>{`Team Member ${
                          index + 1
                        }`}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {maxTeamSize > 0 && (
              // <div className={styles.teamWrapper && styles.labelException}>
              <div className={styles.teamWrapper}>
                <legend className={styles.legend}>Optional Team Members</legend>
                <div className={styles.fieldsets}>
                  {[...Array(maxTeamSize - minTeamSize)].map((x, index) => {
                    return (
                      <div className={styles.group} key={minTeamSize + index}>
                        <input
                          required={false}
                          type="text"
                          className={styles.input}
                          placeholder="lol"
                        />
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                        <label className={styles.label}>{`Team Member ${
                          minTeamSize + index + 1
                        }`}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div className={styles.btnWrapper}>
              <button className={styles.btn} onClick={handleSubmit}>submit</button>
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
      <div>{data.name}</div>
    </>
  );
};

export default AbacusRegisterComponent;
