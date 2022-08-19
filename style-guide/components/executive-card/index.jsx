import React from "react";
import CardStyles from "./executive-card.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faLinkedin, faGithub);

const ExecutiveCard = ({ props }) => {
  // console.log(props);
  return (
    <>
      <div className={CardStyles.cuscontainer}>
        <div className={CardStyles.cuscard}>
          <div className={CardStyles.cuscontent}>
            <div className={CardStyles.cusimgBx}>
              <img src={props.avatar.url} alt="GScSS" />
            </div>
            <div className={CardStyles.cuscontentBx}>
              <div>
                <p className={CardStyles.postTitle}>{props.role}</p>
                <br />
                <span> {props.name} </span> <br />
                <span> +91 {props.phoneNo} </span>
                <br />
              </div>
            </div>
          </div>
          <ul className={CardStyles.cussocials}>
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
                <FontAwesomeIcon icon={["fab", "facebook"]} />
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
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
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
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

ExecutiveCard.defaultProps = {
  exeName: "Name",
  designation: "Designation",
  phoneNo: "PhoneNo",
  fbLink: "/",
  linkedInLink: "/",
  github: "/",
  imgLink: "",
};

export default ExecutiveCard;
