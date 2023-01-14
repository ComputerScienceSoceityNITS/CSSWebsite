import React, { useState } from "react";
import Styles from "./member-card.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faLinkedin, faGithub, faInstagram);

const MemberCard1 = ({ props }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`${Styles.card20} ${Styles.card200}`}
      style={{
        background: `url(${props.avatar.url}) ${
          hover ? "left center no-repeat" : "center no-repeat"
        }`,
        backgroundSize: `${hover ? "60vh" : "55vh"}`,
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className={Styles.border20}>
        <div className={Styles.icons20}>
          <li>
            <a
              href={
                typeof props.socialMedia !== "undefined"
                  ? props.socialMedia.facebook
                  : "/"
              }
              target="_blank"
              rel="noreferrer"
            >
              <span className={Styles.fab} style={{ color: "white" }}>
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </span>
            </a>
          </li>
          <li>
            <a
              href={
                typeof props.socialMedia !== "undefined"
                  ? props.socialMedia.linkedin
                  : "/"
              }
              target="_blank"
              rel="noreferrer"
            >
              <span className={Styles.fab} style={{ color: "white" }}>
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </span>
            </a>
          </li>
          <li>
            <a
              href={
                typeof props.socialMedia !== "undefined"
                  ? props.socialMedia.github
                  : "/"
              }
              target="_blank"
              rel="noreferrer"
            >
              <span className={Styles.fab} style={{ color: "white" }}>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </span>
            </a>
          </li>
        </div>
        <h2>
          {props.name}
          <br />
          <span style={{ fontSize: "0.9em" }}>{props.role}</span>
        </h2>
      </div>
    </div>
  );
};

MemberCard1.defaultProps = {
  props: {
    name: "Name",
    role: "role",
    imgLink: "https://via.placeholder.com/150",
    socialMedia: [{ facebook: "/", github: "/", linkedin: "/" }],
  },
};

export default MemberCard1;
