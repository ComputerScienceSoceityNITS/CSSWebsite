import React from "react";
// import Fade from "react-reveal/Fade";
import SocietyHeads from "../SocietyHeads";
import DevWing from "../DevWingMembers";
import CPWing from "../CPWingMembers";
import ExeWing from "../ExecutiveWingMembers";
import MLWing from "../MLWingMembers";
import DesignWing from "../DesignWingMembers";
import LiteraryWing from "../LiteraryWingMembers";
import Styles from "./members2021.module.css";

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
  members,
}: MemberProps) => {
  const devCoHeads = coHead.filter((head) => {
    return head.role === "Dev-Wing Co-Head";
  });
  const cpCoHeads = coHead.filter((head) => {
    return head.role === "CP-Wing Co-Head";
  });
  const seniorExe = coHead.filter((head) => {
    return head.role === "Executive-Wing Co-Head";
  });
  const mlCoHeads = coHead.filter((head) => {
    return head.role === "ML-Wing Co-Head";
  });
  const designCoHeads = coHead.filter((head) => {
    return head.role === "Design-Wing Co-Head";
  });
  const literatureCoHeads = coHead.filter((head) => {
    return head.role === "Literary-Wing Co-Head";
  });
  return (
    <>
      <section className={Styles.memsection}>
        <div className={Styles.tabPanel} id={Styles.tabPanel}>
          <div className={Styles.wrapper}>
            {/* <h1 className={Styles.memberTag}>Members 20-21</h1> */}
            {/* <Fade bottom> */}
            <SocietyHeads members={members} />
            <DevWing members={devWing} coHeads={devCoHeads} />
            <CPWing members={cpWing} coHeads={cpCoHeads} />
            <ExeWing members={executiveWing} coHeads={seniorExe} />
            <MLWing members={mlWing} coHeads={mlCoHeads} />
            <DesignWing members={designWing} coHeads={designCoHeads} />
            <LiteraryWing members={literaryWing} coHeads={literatureCoHeads} />
            {/* </Fade> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
