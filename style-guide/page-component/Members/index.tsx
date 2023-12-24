import React, { useState } from "react";
import Link from "next/link";
import Styles from "./members.module.css";
import ScrollDownLottie from "../../components/lottie-player/scrollDown";
import StudyTableLottie from "../../components/lottie-player/memberspage";

interface MemberYearProp {
  year: number;
}

const Members = (props: MemberYearProp) => {
  const [year, setYear] = useState(props.year);
  const handleYearChange = (updatedYear: number) => {
    setTimeout(() => {
      window.scrollTo({
        top: self.innerHeight,
        behavior: "smooth",
      });
    }, 500);
    setYear(updatedYear);
  };
  return (
    <>
      <p className={Styles.bgtext}>
        Computer
        <br /> Science <br /> Society
      </p>
      <section className={Styles.firstSection}>
        <div className={Styles.lottie}>
          <StudyTableLottie />
        </div>
        <ScrollDownLottie />
        <div className={Styles.container}>
          <div className={Styles.buttons}>
            <Link href="/members/20-21" passHref scroll={false} replace>
              <button onClick={() => handleYearChange(2021)}>
                <span className={year === 2021 ? Styles.active : ""}>
                  20-21
                </span>
              </button>
            </Link>
            <Link href="/members/21-22" passHref scroll={false} replace>
              <button onClick={() => handleYearChange(2022)}>
                <span className={year === 2022 ? Styles.active : ""}>
                  21-22
                </span>
              </button>
            </Link>
            <Link href="/members/22-23" passHref scroll={false} replace>
              <button onClick={() => handleYearChange(2023)}>
                <span className={year === 2023 ? Styles.active : ""}>
                  22-23
                </span>
              </button>
            </Link>
            <Link href="/members/23-24" passHref scroll={false} replace>
              <button onClick={() => handleYearChange(2024)}>
                <span className={year === 2024 ? Styles.active : ""}>
                  23-24
                </span>
              </button>
            </Link>
          </div>
        </div>
        <h3 className={Styles.text1}>Programers</h3>
        <h3 className={Styles.text2}>Creators</h3>
        <h3 className={Styles.text3}>Developers</h3>
        <h3 className={Styles.text4}>Coders</h3>
      </section>
    </>
  );
};

export default Members;
