import React from "react";
import Styles from "./developerCard.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faLinkedin, faGithub, faInstagram);

const DeveloperCard = ({ props }) => {
  return (
    <div className={Styles.card}>
      <img src={props.avatar.url} className={Styles.card__img} alt="" />
      <div className={Styles.card__overlay}>
        <div className={Styles.card__header}>
          <svg className={Styles.card__arc} xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <div className={Styles.card__header_text}>
            <h3 className={Styles.card__title}>{props.name}</h3>
            <span className={Styles.card__status}>{props.role}</span>
          </div>
        </div>
        <p className={Styles.card__description}>
          <a
            href={
              typeof props.socialMedia !== "undefined"
                ? props.socialMedia.facebook
                : "/"
            }
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon" aria-hidden="true">
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
            <i className="icon" aria-hidden="true">
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
            <i className="icon" aria-hidden="true">
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
            <i className="icon" aria-hidden="true">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </i>
          </a>
        </p>
      </div>
    </div>
  );
};

DeveloperCard.defaultProps = {
  props: {
    name: "Name",
    role: "role",
    imgLink: "https://via.placeholder.com/150",
    socialMedia: [
      { facebook: "/", github: "/", linkedin: "/", instagram: "/" },
    ],
  },
};

export default DeveloperCard;

{
  /* <div className={Styles.card}>
      <div className={Styles.border}>
        <img src={props.avatar.url} alt="dev-wing" />
        <h2>
          {props.name} <br />
          {props.role}
        </h2>
      </div>
      <div className={Styles.icons}>
        <li>
          <a
            href={
              typeof props.socialMedia !== "undefined"
                ? props.socialMedia.facebook
                : "/"
            }
          >
            <span className={Styles.fab}>
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </span>
          </a>
        </li>
        <li>
          <a
            href={
              typeof props.socialMedia !== "undefined"
                ? props.socialMedia.instagram
                : "/"
            }
          >
            <span className={Styles.fab}>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
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
          >
            <span className={Styles.fab}>
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
          >
            <span className={Styles.fab}>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </span>
          </a>
        </li>
      </div>
    </div> */
}
