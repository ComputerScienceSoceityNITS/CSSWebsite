import React, { useState } from "react";
import Link from "next/link";
import Styles from "./members.module.css";
import ScrollDownLottie from "../../components/lottie-player/scrollDown";
import StudyTableLottie from "../../components/lottie-player/memberspage";
import AboutLottie from "../../components/lottie-player/about-bg";

interface MemberYearProp {
  year: number;
}

const Members = (props: MemberYearProp) => {
  const [year, setYear] = useState(props.year);
  // setYear(props.year);
  return (
    <>
      <p className={Styles.bgtext}>
        Computer
        <br /> Science <br /> Society
      </p>
      <section className={Styles.firstSection}>
        <AboutLottie />
        <div id={Styles.largeHeader} className={Styles.largeHeader}>
          <canvas id={Styles.demoCanvas}></canvas>
        </div>
        <ScrollDownLottie />
        <div className={Styles.container}>
          <StudyTableLottie />
          <div className={Styles.buttons}>
            <Link href="/members/19-20" passHref scroll={false} replace>
              <button onClick={() => setYear(2020)}>
                <span className={year === 2020 ? Styles.active : ""}>
                  19-20
                </span>
              </button>
            </Link>
            <br />
            <Link href="/members/20-21" passHref scroll={false} replace>
              <button onClick={() => setYear(2021)}>
                <span className={year === 2021 ? Styles.active : ""}>
                  20-21
                </span>
              </button>
            </Link>
            <br />
            <Link href="/members/21-22" passHref scroll={false} replace>
              <button onClick={() => setYear(2022)}>
                <span className={year === 2022 ? Styles.active : ""}>
                  21-22
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
