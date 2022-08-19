import React from "react";
import Fade from "react-reveal/Fade";
import Styles from "./members2018.module.css";
import MemberCard3 from "../../components/member-card-3";

const Members2018 = () => {
  return (
    <>
      <section className={Styles.memsection}>
        <div className={Styles.tabPanel} id={Styles.tabPanel}>
          <Fade bottom>
            <div className={Styles.wrapper}>
              <h1 className={Styles.memberTag}>Members 17-18</h1>
              <h2 className={Styles.yearNum}>04</h2>
              <h3 className={`${Styles.yearTag} ${Styles.yearTagFix}`}>Year</h3>
              <div className={Styles.cardContainer}>
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
              </div>
            </div>
            <div className={Styles.wrapper}>
              <h2 className={Styles.yearNum}>03</h2>
              <h3 className={`${Styles.yearTag} ${Styles.yearTagFix}`}>Year</h3>
              <div className={Styles.cardContainer}>
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
              </div>
            </div>
            <div className={Styles.wrapper}>
              <h2 className={Styles.yearNum}>02</h2>
              <h3 className={`${Styles.yearTag} ${Styles.yearTagFix}`}>Year</h3>
              <div className={Styles.cardContainer}>
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
                <MemberCard3 />
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Members2018;
