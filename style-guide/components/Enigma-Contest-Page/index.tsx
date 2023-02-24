import React, { useState } from "react";
import styles from "./styles.module.css";
import RankCard from "../Enigma-Result-Card";
const EnigmaPageComponent = ({ data }: any) => {
  const [registered, setRegistered] = useState(false);
  return (
    <>
      {" "}
      <div
        className={styles.heroSection}
        style={{
          background: `linear-gradient(200deg,var(--wing-page-bg1),var(--wing-page-bg2) 45%, var(--wing-page-bg3) 80%),no-repeat center center / cover`,
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className={styles.heroTitle}>{data.name}</h1>
        <div className={styles.heroDetails}>
          <p>Questions are set by : {data.contestSetters}</p>
          <p>Questions are tested by: {data.contestTesters}</p>
          <p>Date : {data.contestDate}</p>
          <p>
            Time : {data.startTime} - {data.endTime}
          </p>
          <p>Number of participants: {data.participants}</p>
        </div>
        <img className={styles.heroLogo} src="/images/logo_compressed.png" />
        <p className={styles.uppperBanner1} style={{ width: "300vw" }}>
          Computer Science Society presents {data.name}
        </p>
      </div>
      <p className={styles.uppperBanner2} style={{ width: "300vw" }}>
        ALL THE BEST CODER !
      </p>
      {!registered && (
        <div className={styles.buttonSection}>
          <a
            href={`/enigma/register/${data.name}`}
            className={styles.btn}
            onClick={() => setRegistered(!registered)}
          >
            Register
          </a>
        </div>
      )}
      <div className={styles.rankSection}>
        <h1 className={styles.heroTitle}>RANKS</h1>
        <h1 className={styles.ranking}> TOP 3</h1>

        <div className={styles.rankingBox}>
          <RankCard
            position="1st"
            username="bj_jiwrajka"
            link="https://codeforces.com/profile/bj_jiwrajka"
          />
          <RankCard
            position="2nd"
            username="dk_sensie"
            link="https://codeforces.com/profile/bj_jiwrajka"
          />
          <RankCard
            position="3rd"
            username="Ayu_Anchor"
            link="https://codeforces.com/profile/bj_jiwrajka"
          />
        </div>
        <h1 className={styles.ranking}>GENERAL RANKING</h1>

        <div className={styles.rankingBox}></div>
      </div>
    </>
  );
};

export default EnigmaPageComponent;
