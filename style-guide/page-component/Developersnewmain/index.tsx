import React from "react";
import ScrollDownLottie from "../../components/lottie-player/scrollDown";
import Styles from "./newmain.module.css";
import DevPGLottie from "../../components/lottie-player/DevpageLottie";
interface DeveloperYear {
  year: number;
}

const DevelopersNewMain = (props: DeveloperYear) => {
  return (
    <div>
      <ScrollDownLottie />
      <div className={Styles.maincontainer}>
        <div className={Styles.headingcont}>
          <div className={Styles.heading}>OUR WEBSITE DEVELOPERS</div>
        </div>
        <div className={Styles.lottiecont}>
          <DevPGLottie />
        </div>
      </div>
    </div>
  );
};

export default DevelopersNewMain;
