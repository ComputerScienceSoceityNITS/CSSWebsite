import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import AbacusSectionBtns from "../Abacus-Event-Page-Buttons";
import date from "date-and-time";

const AbacusPageComponent = ({ data }: any) => {
  const [timeDifference, setTimeDifference] = useState("");
  const [endDateDifference, setEndDateDifference] = useState("some");

  useEffect(() => {
    const date = data?.startDate.split("-");
    const endDate = data?.endDate.split("-");
    const oneDay = 1000 * 60 * 60 * 24;
    const presentDate = new Date();
    const fixedDate = new Date(date[0], date[1] - 1, date[2]);
    // console.log(data.startTime);
    fixedDate.setHours(data.startTime.split(':')[0])
    fixedDate.setMinutes(data.startTime.split(':')[1])
    const fixedEndDate = new Date(endDate[0], endDate[1] - 1, endDate[2]);
    fixedEndDate.setHours(23)
    fixedEndDate.setMinutes(59)
    // console.log({fixedEndDate});
    if (fixedEndDate.getTime() < presentDate.getTime()) {
      console.log("error");
      setEndDateDifference("error");
      return;
    } else if (fixedDate.getTime() < presentDate.getTime()) {
      console.log("error");
      setTimeDifference("error");
      const endResult =
        Math.round(fixedEndDate.getTime() - presentDate.getTime()) / oneDay;
      const endFinalResult = endResult.toFixed(0);
      setEndDateDifference(`${endFinalResult}`);
      return;
    } else {
      const Result =
        Math.round(fixedDate.getTime() - presentDate.getTime()) / oneDay;
      const finalResult = Result.toFixed(0);
      setTimeDifference(`${finalResult}`);
      console.log({ fixedDate });
    }
  }, []);

  return (
    <>
      <div
        className={styles.heroSection}
        style={{
          background: `linear-gradient(200deg,var(--wing-page-bg1),var(--wing-page-bg2) 45%, var(--wing-page-bg3) 80%),url("${
            data?.coverPic.url ? data?.coverPic.url : null
          }") no-repeat center center / cover`,
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className={styles.heroTitle}>{data?.name}</h1>
        <div className={styles.heroDetails}>
          <p>Date :- {date.parse(data?.startDate,"YYYY-MM-DD").toDateString() || ""}</p>
          <p>Time :- {(parseFloat(data?.startTime) >=0 && parseFloat(data?.startTime)<12)?data?.startTime + " AM" :  parseFloat(data?.startTime) -12  + " PM" }</p>
          <p>Min Team Size :- {data?.minTeamSize}</p>
          <p>Max Team Size :- {data?.maxTeamSize}</p>
        </div>
        <img
          className={styles.heroLogo}
          src="/images/logo_compressed.png"
          alt=""
        />
        <p className={styles.uppperBanner1} style={{ width: "300vw" }}>
          Computer Science Society brings you {data?.eventType} Event
        </p>
      </div>
      <div className={styles.descriptionSection}>
        <p className={styles.uppperBanner2} style={{ width: "300vw" }}>
          Computer Science Society brings you {data?.eventType} Event
        </p>
        <p className={styles.description}>{data?.description}</p>
        <div className={`${styles.buttonSection} ${styles.postRegisterBtn}`}>
          <AbacusSectionBtns
            data={data}
            endDateDifference={endDateDifference}
          />
        </div>
        {endDateDifference === "error" ? (
          <p className={styles.banner}>The Event has Ended</p>
        ) : timeDifference === "error" ? (
          <p className={styles.banner}>
            The Event has started and will end in{" "}
            <span>{endDateDifference}</span> days
          </p>
        ) : (
          <p className={styles.banner}>
            The Event will start in <span>{timeDifference}</span> days
          </p>
        )}
        {endDateDifference === "error" ? (
          <p className={styles.banner2}>The Event has Ended</p>
        ) : timeDifference === "error" ? (
          <p className={styles.banner2}>
            The Event has started and will end in{" "}
            <span>{endDateDifference}</span> days
          </p>
        ) : (
          <p className={styles.banner2}>
            The Event will start in <span>{timeDifference}</span> days
          </p>
        )}
      </div>
    </>
  );
};

export default AbacusPageComponent;
