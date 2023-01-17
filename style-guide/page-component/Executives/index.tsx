import React from "react";
import ExecutiveCard from "../../components/executive-card";
import Styles from "./executives.module.css";
import Rainman from "../../components/lottie-player/rainman";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faReadme,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faLinkedin, faReadme);
interface ExecutivesProps {
  members: {
    avatar: { public_id: String; url: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
    phoneNo: String;
  }[];
}

const Convener = () => {
  return (
    <div className={Styles.cuscontainer}>
      <div className={Styles.cuscard}>
        <div className={Styles.cuscontent}>
          <div className={Styles.cusimgBx}>
            <img src="./images/Homepage/MajhiSir.jpg" alt="Convener" />
          </div>
          <div className={Styles.cuscontentBx}>
            <div>
              <p className={Styles.postTitle}>CONVENER</p>
              <br />
              <span> Mr. Umakanta Majhi </span> <br />
              <span> Assistant Professor </span>
              <span> umakanta@cse.nits.ac.in </span>
              <br />
            </div>
          </div>
        </div>
        <ul className={Styles.cussocials}>
          <li>
            <a
              href="https://www.facebook.com/bdlsni123"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/umakanta-majhi-43238576"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </li>
          <li>
            <a
              href="http://cs.nits.ac.in/uma/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "readme"]} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Executives = ({ members }: ExecutivesProps) => {
  const executives = members.filter((member) => {
    return member.year === "4";
  });
  executives[0].phoneNo = "76360 12703";
  executives[2].phoneNo = "70023 75113";
  executives[1].phoneNo = "70335 71910";
  return (
    <div className={Styles.cores}>
      <h1 className={Styles.bgtext}>
        THE <br />
        SOCIETY-HEADS
      </h1>
      <h2 className={Styles.bgtext1}>
        PILLARS OF <br />
        CSS
      </h2>
      <span className={Styles.firstLottie}>
        <Rainman />
      </span>
      <div className={Styles.dividers}>
        <div className={Styles.title}>
          <p>Executive Members</p>
        </div>
        <div className={Styles.convener}>
          <Convener />
        </div>
        <div className={Styles.heads}>
          <ExecutiveCard props={executives[0]} />
          <ExecutiveCard props={executives[2]} />
          <ExecutiveCard props={executives[1]} />
        </div>
      </div>
    </div>
  );
};

export default Executives;
