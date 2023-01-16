import React from "react";
// import Fade from "react-reveal/Fade";
import Styles from "./members2020.module.css";
import MemberCard3 from "../../components/member-card-3";

interface MemberProps {
  year2: {
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
  year3: {
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
  year4: {
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

const Members2020 = ({ year2, year3, year4 }: MemberProps) => {
  return (
    <>
      <section className={Styles.memsection}>
        <div className={Styles.tabPanel} id={Styles.tabPanel}>
          {/* <Fade bottom> */}
          <div className={Styles.wrapper}>
            <h1 className={Styles.memberTag}>Members 19-20</h1>
            <h2 className={Styles.yearNum}>04</h2>
            <h3 className={`${Styles.yearTag} ${Styles.yearTagFix}`}>Year</h3>
            <div className={Styles.cardContainer}>
              {year4.map((member, index) => {
                return <MemberCard3 props={member} key={index} />;
              })}
            </div>
          </div>
          <div className={Styles.wrapper}>
            <h2 className={Styles.yearNum}>03</h2>
            <h3 className={`${Styles.yearTag} ${Styles.yearTagFix}`}>Year</h3>
            <div className={Styles.cardContainer}>
              {year3.map((member, index) => {
                return <MemberCard3 props={member} key={index} />;
              })}
            </div>
          </div>
          <div className={Styles.wrapper}>
            <h2 className={Styles.yearNum}>02</h2>
            <h3 className={`${Styles.yearTag} ${Styles.yearTagFix}`}>Year</h3>
            <div className={Styles.cardContainer}>
              {year2.map((member, index) => {
                return <MemberCard3 props={member} key={index} />;
              })}
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </section>
    </>
  );
};

export default Members2020;
