import React from "react";
import Styles from "./developerhead.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DevTest from "../../../public/images/Picture.png";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faLinkedin, faGithub, faInstagram);

export default function DeveloperHeadNew({ props }) {
  return (
    <div className={Styles.newcardcontainer}>
      <div className={Styles.cardimgcont}>
        <div className={Styles.socials}>
          <a
            href={
              typeof props.socialMedia !== "undefined"
                ? props.socialMedia.facebook
                : "/"
            }
            target="_blank"
            rel="noreferrer"
          >
            <i className={Styles.icon} aria-hidden="true">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </i>
          </a>
          <a
            href={
              typeof props.socialMedia !== "undefined"
                ? props.socialMedia.instagram
                : "/"
            }
            target="_blank"
            rel="noreferrer"
          >
            <i className={Styles.icon} aria-hidden="true">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
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
            <i className={Styles.icon} aria-hidden="true">
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
            <i className={Styles.icon} aria-hidden="true">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </i>
          </a>
        </div>
        <img src={props?.avatar?.url} className={Styles.cardimg} alt="" />
      </div>
      <div className={Styles.newcardfooter}>
        <div className={Styles.footercont}>{props.name}</div>
        <div className={Styles.footercont}>{props.role} </div>
      </div>
    </div>
  );
}

DeveloperHeadNew.defaultProps = {
  props: {
    name: "Name",
    role: "role",
    imgLink: "https://via.placeholder.com/150",
    socialMedia: [
      { facebook: "/", github: "/", linkedin: "/", instagram: "/" },
    ],
  },
};
