import React from "react";
import Fade from "react-reveal/Fade";
import DeveloperCard from "../../components/developer-card";
import Styles from "./developers.module.css";

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

const Developers = ({ devWing, coHead }: DeveloperProps, { mode }: any) => {
  const devCoHeads = coHead.filter((head) => {
    return head.role === "Dev-Wing Co-Head" && head.name !== "Yash Srivastava";
  });
  return (
    <Fade bottom>
      <div className={Styles.container} style={{ marginTop: "2rem" }}>
        {devCoHeads.map((head, index) => {
          return <DeveloperCard props={head} key={index} />;
        })}
      </div>
      <div className={Styles.container}>
        {devWing.map((member, index) => {
          return <DeveloperCard props={member} key={index} />;
        })}
      </div>
    </Fade>
  );
};

export default Developers;
