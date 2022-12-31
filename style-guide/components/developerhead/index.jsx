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
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699__480.jpg"
          className={Styles.cardimg}
          alt=""
        />
      </div>
      <div className={Styles.newcardfooter}>
        <div className={Styles.footercont}>Anubhav Chakraborty</div>
        <div className={Styles.footercont}>Dev Wing Head </div>
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
