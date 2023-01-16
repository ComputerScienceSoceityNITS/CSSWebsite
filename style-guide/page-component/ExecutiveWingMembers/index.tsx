import React from "react";
import Styles from "./executivewingmembers.module.css";
import MemberCard2 from "../../components/member-card-2";

interface MemberProps {
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
  coHeads: {
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

const ExecutiveWing = ({ members, coHeads }: MemberProps) => {
  return (
    <div className={Styles.gridContainer}>
      <h1 className={Styles.wingTag}>
        Executive <br />
        &nbsp; -wing <br />
        Members
      </h1>
      <div className={Styles.grid}>
        {members.map((member, index) => {
          return index < 2 ? <MemberCard2 props={member} key={index} /> : null;
        })}
        <MemberCard2 props={coHeads[0]} />
        {members.map((member, index) => {
          return index >= 2 && index < 5 && members.length >= 3 ? (
            <MemberCard2 props={member} key={index} />
          ) : null;
        })}
        {coHeads.length >= 2 ? <MemberCard2 props={coHeads[1]} /> : null}

        {members.map((member, index) => {
          return index >= 5 && index < 8 ? (
            <MemberCard2 props={member} key={index} />
          ) : null;
        })}
        {coHeads.length >= 3 ? <MemberCard2 props={coHeads[2]} /> : null}
        {members.map((member, index) => {
          return index >= 8 && index < 11 ? (
            <MemberCard2 props={member} key={index} />
          ) : null;
        })}
        {coHeads.length >= 4 ? <MemberCard2 props={coHeads[3]} /> : null}
        {members.map((member, index) => {
          return index >= 11 && index < 14 ? (
            <MemberCard2 props={member} key={index} />
          ) : null;
        })}
        {coHeads.length >= 5 ? <MemberCard2 props={coHeads[4]} /> : null}
      </div>
    </div>
  );
};

export default ExecutiveWing;
