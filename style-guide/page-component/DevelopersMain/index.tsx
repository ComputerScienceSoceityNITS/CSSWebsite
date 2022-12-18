import React, { useState } from "react";
import Link from "next/link";
import ScrollDownLottie from "../../components/lottie-player/scrollDown";
import TeamX from "../../components/lottie-player/teamX";
import Styles from "./developers.module.css";
interface DeveloperYear {
  year: number;
}

const DevelopersMain = (props: DeveloperYear) => {
  const [year, setYear] = useState(props.year);
  return (
    <div>
      <ScrollDownLottie />

      <div className={Styles.teamX}>
        <TeamX />
        <h2 className={Styles.teamour}>
          Our{" "}
          <span className={Styles.teamlottie}>
            <span>team</span>
          </span>
        </h2>
      </div>
      <div className={Styles.yearTag}>
        <Link href="/developers/21-22" passHref scroll={false} replace>
          <div
            onClick={() => setYear(2022)}
            className={`${Styles.options} ${
              year === 2022 ? Styles.active : ""
            }`}
            id={Styles.option1}
          >
            2022
          </div>
        </Link>
        <Link href="/developers/20-21" passHref scroll={false} replace>
          <div
            onClick={() => setYear(2021)}
            className={`${Styles.options} ${
              year === 2021 ? Styles.active : ""
            }`}
            id={Styles.option2}
          >
            2021
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DevelopersMain;
