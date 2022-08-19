import React from "react";
import ExecutiveCard from "../../components/executive-card";
import ExecutivesStyles from "./executives.module.css";
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
  }[];
}

const Executives = ({ members }: ExecutivesProps) => {
  const executives = members.filter((member) => {
    return member.year === "4";
  });
  return (
    <div className={ExecutivesStyles.cores}>
      <h1 className={ExecutivesStyles.bgtext}>
        THE <br />
        SOCIETY-HEADS
      </h1>
      <h2 className={ExecutivesStyles.bgtext1}>
        PILLARS OF <br />
        CSS
      </h2>
      <span className={ExecutivesStyles.firstLottie}>
        <Rainman />
      </span>
      <div className={ExecutivesStyles.dividers}>
        <div className={ExecutivesStyles.title}>
          <p>Executive Members</p>
        </div>
      </div>
      <div className={ExecutivesStyles.dividers}>
        <div className={ExecutivesStyles.cuscontainer}>
          <div className={ExecutivesStyles.cuscard}>
            <div className={ExecutivesStyles.cuscontent}>
              <div className={ExecutivesStyles.cusimgBx}>
                <img src="./images/Homepage/MajhiSir.jpg" alt="Convener" />
              </div>
              <div className={ExecutivesStyles.cuscontentBx}>
                <div>
                  <p className={ExecutivesStyles.postTitle}>CONVENER</p>
                  <br />
                  <span> Mr. Umakanta Majhi </span> <br />
                  <span> Assistant Professor </span>
                  <span> umakanta@cse.nits.ac.in </span>
                  <br />
                </div>
              </div>
            </div>
            <ul className={ExecutivesStyles.cussocials}>
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
      </div>
      <div className={ExecutivesStyles.dividers}>
        <ExecutiveCard props={executives[0]} />
      </div>
      <div className={ExecutivesStyles.dividers}>
        <ExecutiveCard props={executives[1]} />
      </div>
    </div>
  );
};

export default Executives;
