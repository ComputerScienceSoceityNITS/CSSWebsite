import React from "react";
import MemberCard1 from "../../components/member-card-1";
import Styles from "./societyheads.module.css";

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
}

const SocietyHeads = ({ members }: MemberProps) => {
  // console.log(members);
  const heads = members.filter((member) => {
    return (
      member.year === "4" ||
      member.role === "Associate General Secretary" ||
      member.role === "Assistant General Secretary"
    );
  });
  heads.sort(function (a: any, b: any) {
    return b.year - a.year;
  });
  return (
    <div className={Styles.container20}>
      {heads.map((member, index) => {
        return <MemberCard1 props={member} key={index} />;
      })}
    </div>
  );
};

export default SocietyHeads;
