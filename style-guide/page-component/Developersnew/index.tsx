import React from "react";
import DeveloperCardNew from "../../components/developercardnew";
import DeveloperHeadNew from "../../components/developerhead";
import Styles from "./developersnew.module.css";
import Fade from "react-reveal/Fade";

interface DeveloperProps {
  devWing: {
    avatar: { public_id: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
  coHead: {
    avatar: { public_id: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
  secretary: {
    avatar: { public_id: String };
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

const DevelopersNew = (
  { devWing, coHead, secretary }: DeveloperProps,
  { mode }: any
) => {
  const devCoHeads = coHead.filter((head) => {
    return (
      head.role === "Dev-Wing Head" ||
      ("Dev-Wing Co-Head" && head.name !== "Yash Srivastava")
    );
  });

  return (
    <Fade bottom>
      <div className={Styles.devpagecontainer}>
        <div className={Styles.teamhead}>SECRETARY</div>
        <div className={Styles.heads}>
          {secretary.map((head, index) => {
            return <DeveloperHeadNew props={head} key={index} />;
          })}
        </div>
        <div className={Styles.teamhead}>TEAM HEADS</div>
        <div className={Styles.heads}>
          {devCoHeads.map((head, index) => {
            return <DeveloperHeadNew props={head} key={index} />;
          })}
        </div>
        <div className={Styles.teamhead}>TEAM MEMBERS</div>
        <div className={Styles.members}>
          {devWing.map((member, index) => {
            return <DeveloperCardNew props={member} key={index} />;
          })}
        </div>
      </div>
    </Fade>
  );
};

export default DevelopersNew;
