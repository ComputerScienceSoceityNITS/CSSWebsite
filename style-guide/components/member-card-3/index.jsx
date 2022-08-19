import React from "react";
import Styles from "./member-card-3.module.css";

const MemberCard3 = ({ props }) => {
  // console.log(props);
  return (
    <div className={Styles.cardWrapper} data-scroll>
      <div className={`${Styles.card} ${Styles.fourth}`}>
        <div className={Styles.cardImage}>
          <img
            loading="lazy"
            className={Styles.fourth}
            src={props.avatar.url}
            alt=""
          />
        </div>
        <div className={Styles.details}>
          <div className={Styles.details}>
            <h2>
              {props.name}
              <span className={`${Styles.jobTitle} ${Styles.st}`}>
                {props.role}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

MemberCard3.defaultProps = {
  props: {
    name: "Name",
    role: "role",
    // imgLink: "https://via.placeholder.com/150",
    socialMedia: [{ facebook: "/", github: "/", linkedin: "/" }],
  },
};
export default MemberCard3;
