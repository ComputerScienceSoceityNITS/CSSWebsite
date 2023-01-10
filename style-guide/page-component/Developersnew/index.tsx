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
}

const DevelopersNew = ({ devWing, coHead }: DeveloperProps, { mode }: any) => {
<<<<<<< HEAD
  const devCoHeads = coHead.filter((head) => {
    return head.role === "Dev-Wing Co-Head" && head.name !== "Yash Srivastava";
  });

=======
  // const devCoHeads = coHead.filter((head) => {
  //   return head.role === "Dev-Wing Co-Head" && head.name !== "Yash Srivastava";
  // });
>>>>>>> 234a149b7cd214ee63a93db0b8b63925a6d29a15
  return (
    <Fade bottom>
      <div className={Styles.devpagecontainer}>
        <div className={Styles.heads}>
          {devCoHeads.map((head, index) => {
            return <DeveloperHeadNew props={head} key={index} />;
          })}
        </div>
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
