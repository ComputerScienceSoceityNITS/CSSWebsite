import React, { useState } from "react";
import ScrollDownLottie from "../../components/lottie-player/scrollDown";
import Styles from "./newmain.module.css";
import DevPGLottie from "../../components/lottie-player/DevpageLottie";
import Link from "next/link";

interface DeveloperYear {
  year: number;
}

const DevelopersNewMain = (props: DeveloperYear) => {
  const [year, setYear] = useState(props.year);
  return (
    <div className={Styles.parentcontainer}>
      <ScrollDownLottie />
      <div className={Styles.maincontainer}>
        <div className={Styles.headingcont}>
          <div className={Styles.headinginnercont}>
            <div className={Styles.heading}>OUR DEVELOPERS TEAM</div>
          </div>
        </div>
        <div className={Styles.lottiecont}>
          <DevPGLottie />
        </div>
      </div>
      <div className={Styles.yearcontainer}>
        <div className={Styles.sideheading}>TEAM OF</div>
        <div className={Styles.buttoncontainer}>
        <Link href="/developers/23-24" passHref scroll={false} replace>
            <div
              onClick={() => setYear(2024)}
              className={`${year === 2024 ? Styles.active : Styles.buttons}`}
            >
              2023-24
            </div>
          </Link>
          <Link href="/developers/22-23" passHref scroll={false} replace>
            <div
              onClick={() => setYear(2023)}
              className={`${year === 2023 ? Styles.active : Styles.buttons}`}
            >
              2022-23
            </div>
          </Link>
          <Link href="/developers/21-22" passHref scroll={false} replace>
            <div
              onClick={() => setYear(2022)}
              className={`${year === 2022 ? Styles.active : Styles.buttons}`}
            >
              2021-22
            </div>
          </Link>

          <Link href="/developers/20-21" passHref scroll={false} replace>
            <div
              onClick={() => setYear(2021)}
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

export default DevelopersNewMain;
