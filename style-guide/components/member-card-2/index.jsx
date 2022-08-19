import React from "react";
import Styles from "./member-card-2.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faLinkedin, faGithub, faInstagram);

const MemberCard2 = ({ props }) => {
  // console.log(props);s
  return (
    <div className={Styles.gridItem} data-scroll>
      <img src={props.avatar.url} />
      <div className={Styles.details2021}>
        <h2>{props.name}</h2>
        <h3>{props.role}</h3>
        <div className={Styles.icons2021}>
          <a
            href={
              typeof props.socialMedia !== "undefined"
                ? props.socialMedia.facebook
                : "/"
            }
            target="_blank"
            rel="noreferrer"
          >
            <i
              style={{ color: "white", fontSize: "1.25em" }}
              aria-hidden="true"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </i>
          </a>
          <a
            href={
              typeof props.socialMedia !== "undefined"
                ? props.socialMedia.github
                : "/"
            }
            target="_blank"
            rel="noreferrer"
          >
            <i
              style={{ color: "white", fontSize: "1.25em" }}
              aria-hidden="true"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </i>
          </a>
          <a
            href={
              typeof props.socialMedia !== "undefined"
                ? props.socialMedia.linkedin
                : "/"
            }
            target="_blank"
            rel="noreferrer"
          >
            <i
              style={{ color: "white", fontSize: "1.25em" }}
              aria-hidden="true"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

MemberCard2.defaultProps = {
  props: {
    name: "Name",
    role: "role",
    avatar: { url: "" },
    socialMedia: [{ facebook: "/", github: "/", linkedin: "/" }],
  },
};

export default MemberCard2;
