import React from "react";
// import Fade from "react-reveal/Fade";
import SocietyHeads from "../SocietyHeads";
import DevWing from "../DevWingMembers";
import CPWing from "../CPWingMembers";
import ExeWing from "../ExecutiveWingMembers";
import MLWing from "../MLWingMembers";
import LiteraryWing from "../LiteraryWingMembers";
import DesignWing from "../DesignWingMembers";
import Styles from "./members2022.module.css";

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
  const devCoHeads = members.filter((head) => {
    return head.role === "Dev-Wing Co-Head";
  });
  const cpCoHeads = members.filter((head) => {
    return head.role === "CP-Wing Head";
  });
  const seniorExe = members.filter((head) => {
    return head.role === "Senior Executive";
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
  return (
    <>
      <section className={Styles.memsection}>
        <div className={Styles.tabPanel} id={Styles.tabPanel}>
          <div className={Styles.wrapper}>
            {/* <h1 className={Styles.memberTag}>Members 21-22</h1> */}
            {/* <Fade right> */}
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
