import React, { useState } from "react";
import ScrollDownLottie from "../../components/lottie-player/scrollDown";
import Styles from "./members.module.css";
import StudyTableLottie from "../../components/lottie-player/memberspage";
import Link from "next/link";

interface MemberYearProp {
  year: number;
}

const Members = (props: MemberYearProp) => {
  const [year, setYear] = useState(props.year);
  const scrollOffset =600 ;
  const handleYearChange = (updatedYear: number) => {
    setTimeout(() => {
      window.scrollTo({
        top: scrollOffset,
        behavior: "smooth",
      });
    }, 500);
    setYear(updatedYear);
  };
  return (
    <div className={Styles.memberscontainer}>
      <ScrollDownLottie />
      <div className={Styles.maincontainer}>
        <div className={Styles.headingcont}>
          <div className={Styles.headinginnercont}>
            <div className={Styles.heading}>OUR MEMBERS</div>
          </div>
        </div>
        <div className={Styles.lottiecont}>
          <StudyTableLottie />
        </div>
      </div>
      <div className={Styles.yearcontainer}>
        <div className={Styles.sideheading}>MEMBERS OF</div>
        <div className={Styles.buttoncontainer}>
        <Link href="/members/23-24" passHref scroll={false} replace>
            <div
              onClick={() => handleYearChange(2024)}
              className={`${year === 2024 ? Styles.active : Styles.buttons}`}
            >
              2023-24
            </div>
          </Link>
          <Link href="/members/22-23" passHref scroll={false} replace>
            <div
              onClick={() => handleYearChange(2023)}
              className={`${year === 2023 ? Styles.active : Styles.buttons}`}
            >
              2022-23
            </div>
          </Link>
          <Link href="/members/21-22" passHref scroll={false} replace>
            <div
              onClick={() => handleYearChange(2022)}
              className={`${year === 2022 ? Styles.active : Styles.buttons}`}
            >
              2021-22
            </div>
          </Link>

          <Link href="/members/20-21" passHref scroll={false} replace>
            <div
              onClick={() => handleYearChange(2021)}
              className={`${year === 2021 ? Styles.active : Styles.buttons}`}
            >
              2020-21
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Members;
