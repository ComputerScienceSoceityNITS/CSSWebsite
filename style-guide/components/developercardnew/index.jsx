import React from "react";
import Styles from "./developercard.module.css";
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

export default function DeveloperCardNew({ props }) {
  return (
    <div className={Styles.newcardcontainer}>
      <div className={Styles.cardimgcont}>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.jjNXXwRVqOMzNTHuTD-9WQHaIU&pid=Api&P=0"
          className={Styles.cardimg}
          alt=""
        />
      </div>
      <div className={Styles.newcardfooter}>
        <div className={Styles.footercont}>Anubhav Chakraborty</div>
        <div className={Styles.footercont}>Dev Wing Member </div>
      </div>
    </div>
  );
}

DeveloperCardNew.defaultProps = {
  props: {
    name: "Name",
    role: "role",
    imgLink: "https://via.placeholder.com/150",
    socialMedia: [
      { facebook: "/", github: "/", linkedin: "/", instagram: "/" },
    ],
  },
};
