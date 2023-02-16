import React from "react";
import DeveloperCardNew from "../../components/developercardnew";
import DeveloperHeadNew from "../../components/developerhead";
import Styles from "./developersnew.module.css";

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
    <div className={Styles.devpagecontainer}>
      {secretary ? <div className={Styles.teamhead}>TECHNICAL HEAD</div> : null}
      <div className={Styles.heads}>
        {secretary
          ? secretary.map((head, index) => {
              return <DeveloperHeadNew props={head} key={index} />;
            })
          : null}
      </div>
      <div className={Styles.teamhead}>DEV-WING HEADS</div>
      <div className={Styles.heads}>
        {devCoHeads.map((head, index) => {
          return <DeveloperHeadNew props={head} key={index} />;
        })}
      </div>
      <div className={Styles.teamhead}>DEV-WING MEMBERS</div>
      <div className={Styles.members}>
        {devWing.map((member, index) => {
          return <DeveloperCardNew props={member} key={index} />;
        })}
      </div>
    </div>
  );
};

export default DevelopersNew;
