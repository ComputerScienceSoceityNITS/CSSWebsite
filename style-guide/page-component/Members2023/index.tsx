import React from "react";
// import Fade from "react-reveal/Fade";
import SocietyHeads from "../SocietyHeads";
import DevWing from "../DevWingMembers";
import CPWing from "../CPWingMembers";
import ExeWing from "../ExecutiveWingMembers";
import MLWing from "../MLWingMembers";
import LiteraryWing from "../LiteraryWingMembers";
import DesignWing from "../DesignWingMembers";
import PRWing from "../PrWingMembers";
import Styles from "./members2023.module.css";

interface MemberProps {
  devWing: {
    avatar: { public_id: String; url: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
  cpWing: {
    avatar: { public_id: String; url: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
  executiveWing: {
    avatar: { public_id: String; url: String };
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
    avatar: { public_id: String; url: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
  mlWing: {
    avatar: { public_id: String; url: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
  designWing: {
    avatar: { public_id: String; url: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
  literaryWing: {
    avatar: { public_id: String; url: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
  prWing: {
    avatar: { public_id: String; url: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
  members: {
    avatar: { public_id: String; url: String };
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

const index = ({
  devWing,
  cpWing,
  executiveWing,
  coHead,
  mlWing,
  designWing,
  literaryWing,
  prWing,
  members,
}: MemberProps) => {
  const devCoHeads = members.filter((head) => {
    return head.role === "Dev-Wing Head";
  });
  const cpCoHeads = members.filter((head) => {
    return head.role === "CP-Wing Head";
  });
  const seniorExe = members.filter((head) => {
    return head.role === "Executive-Wing Head";
  });
  const mlCoHeads = members.filter((head) => {
    return head.role === "ML-Wing Head";
  });
  const designCoHeads = members.filter((head) => {
    return head.role === "Design-Wing Head";
  });
  const literatureCoHeads = members.filter((head) => {
    return head.role === "Literary-Wing Head";
  });
  const prCoHeads = members.filter((head) => {
    return head.role === "PR-Wing Head";
  });
  return (
    <>
      <section className={Styles.memsection}>
        <div className={Styles.tabPanel} id={Styles.tabPanel}>
          <div className={Styles.wrapper}>
            {/* <h1 className={Styles.memberTag}>Members 22-23</h1> */}
            {/* <Fade bottom> */}
            <SocietyHeads members={members} />
            <DevWing members={devWing} coHeads={devCoHeads} />
            <div className={Styles.gap}></div>
            <CPWing members={cpWing} coHeads={cpCoHeads} />
            <div className={Styles.gap}></div>
            <ExeWing members={executiveWing} coHeads={seniorExe} />
            <div className={Styles.gap}></div>
            <PRWing members={prWing} coHeads={prCoHeads} />
            <div className={Styles.gap}></div>
            <MLWing members={mlWing} coHeads={mlCoHeads} />
            <div className={Styles.gap}></div>
            <DesignWing members={designWing} coHeads={designCoHeads} />
            <div className={Styles.gap}></div>
            <LiteraryWing members={literaryWing} coHeads={literatureCoHeads} />
            {/* </Fade> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
