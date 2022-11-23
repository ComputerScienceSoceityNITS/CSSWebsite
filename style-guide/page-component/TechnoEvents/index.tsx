import React from "react";
// import EventsCardMain from "../../components/events-card-main";
import Styles from "./technoEvents.module.css";
import WorkingMan from "../../components/lottie-player/working-man";
import Pictionary from "../../components/lottie-player/pictionary";
import EventBg from "../../components/lottie-player/event-bg";

const TechnoEvents = () => {
  return (
    <section className={Styles.techno}>
      <div className={Styles.techno_bg_1}>
        <EventBg />
      </div>
      <div className={Styles.techno_bg_2}>
        <EventBg />
      </div>
      <div className={Styles.techno_bg_3}>
        <EventBg />
      </div>
      <div className={Styles.lottie_1}>
        <WorkingMan />
      </div>
      <div className={Styles.lottie_2}>
        <Pictionary />
      </div>
      <div className={Styles.abacusHead}>
        <p className={Styles.title}>ABACUS</p>
        <p>
          The annual CSE week filled with enthralling technical and literary
          competitions for everyone to showcase their versatile skills ranging
          from coding, quizzes, essay writing, technical writing and poems.
        </p>
      </div>

      <div className={`${Styles.card_1} ${Styles.card_blur}`}>
        <div
          className={`${Styles.d_card_1} ${Styles.d_card_blur} ${Styles.mobile_hide}`}
        >
          <div className={Styles.h_before}>
            <div
              className={Styles.img_1_c}
              style={{ height: "34vw", width: "44vw", marginTop: "-7vw" }}
            >
              <img src="./images/events/Abacus-tech.png" alt="Image" />
            </div>
            <p className={Styles.d_title}>
              <span>ABACUS</span>
              <br />
              <span>TECH</span>
            </p>
          </div>
          <div className={Styles.h_after}>
            <div className={Styles.d_content}>
              <ul>
                <li>
                  <span>Algochemy</span>coding contest for freshers
                </li>
                <li>
                  <span>CSS Wars</span>Web Design Competition
                </li>
                <li>
                  <span>Tech-review</span>Technical article writing competitions
                </li>
                <li>
                  <span>Web Spyder</span>Online Treasure Hunt
                </li>
                <li>
                  <span>Statsmania</span>a mathematical quiz for those with
                  endless love for maths
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.desktop_hide}>
          <p className={Styles.title}>
            <span>ABACUS</span>
            <span>TECH</span>
          </p>
          <div className={Styles.ul_c}>
            <ul>
              <li>
                <span>Algochemy</span>coding contest for freshers
              </li>
              <li>
                <span>CSS Wars</span>Web Design Competition
              </li>
              <li>
                <span>Tech-review</span>Technical article writing competitions
              </li>
              <li>
                <span>Web Spyder</span>Online Tresure Hunt
              </li>
              <li>
                <span>Statsmania</span>a mathematical quiz for those with
                endless love for maths
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="lottie-2">
          <lottie-player
            id="pictionary"
            src="images/events/pictionary.json"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div> */}

      <div className={`${Styles.card_2} ${Styles.card_blur}`}>
        <div
          className={`${Styles.d_card_2} ${Styles.d_card_blur} ${Styles.mobile_hide}`}
        >
          <div className={Styles.h_before}>
            <div
              className={Styles.img_1_c}
              style={{ height: "34vw", width: "44vw", marginTop: "-7vw" }}
            >
              <img src="./images/events/Abacus-lit.png" alt="Image" />
            </div>
            <p className={Styles.d_title}>
              <span>ABACUS</span>
              <br />
              <span>LIT</span>
            </p>
          </div>
          <div className={Styles.h_after}>
            <div className={Styles.d_content}>
              <ul>
                <li>
                  <span>Ficticious Cipher</span>
                </li>
                <li>
                  <span>IPL Auction</span>
                </li>
                <li>
                  <span>Rudimental Genesis</span>
                </li>
                <li>
                  <span>Polaroid</span>
                </li>
                <li>
                  <span>Holmes Alone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.desktop_hide}>
          <p className={Styles.title}>
            <span>ABACUS</span>
            <span>LIT</span>
          </p>
          <div className={Styles.ul_c}>
            <ul>
              <li>
                <span>Ficticious Cipher</span>
              </li>
              <li>
                <span>IPL Auction</span>
              </li>
              <li>
                <span>Rudimental Genesis</span>
              </li>
              <li>
                <span>Polaroid</span>
              </li>
              <li>
                <span>Holmes Alone</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${Styles.hacks} ${Styles.card_blur}`}>
        <div
          className={`${Styles.d_hacks} ${Styles.d_card_blur} ${Styles.mobile_hide}`}
        >
          <div className={Styles.h_before}>
            <div
              className={Styles.img_1_c}
              style={{ height: "16vw", width: "21vw" }}
            >
              <img src="./images/events/CSS-hack.png" alt="Image" />
            </div>
            <p className={Styles.d_title}>CSS HACKS</p>
          </div>
          <div className={Styles.h_after}>
            <div className={Styles.d_content}>
              <p>
                An amazing hackathon for developers
                <span className={Styles.mobile_hide}>and dev enthusiasts</span>
                solving problems given by the judges. This is the one big
                opportunity for all the hackathon lovers to check their
                innovative
                <span className={Styles.mobile_hide}> and presentation </span>
                skills.
                <span className={Styles.mobile_hide}>
                  This provides the participants a upperhand experience for all
                  the hackathon they will be participating in.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.desktop_hide}>
          <p className={Styles.title}>CSS HACKS</p>
          <p>
            An amazing hackathon for developers
            <span className={Styles.mobile_hide}> and dev enthusiasts </span>
            solving problems given by the judges. This is the one big
            opportunity for all the hackathon lovers to check their innovative
            <span className={Styles.mobile_hide}> and presentation </span>
            skills.
            <span className={Styles.mobile_hide}>
              This provides the participants a upperhand experience for all the
              hackathon they will be participating in.
            </span>
          </p>
        </div>
      </div>

      <div className={`${Styles.enigma} ${Styles.card_blur}`}>
        <div
          className={`${Styles.d_enigma} ${Styles.d_card_blur} ${Styles.mobile_hide}`}
        >
          <div className={Styles.h_before}>
            <div className={Styles.img_1_c}>
              <img src="./images/events/Enigma.png" alt="Image" />
            </div>
            <p className={Styles.d_title}>ENIGMA</p>
          </div>
          <div className={Styles.h_after}>
            <div className={Styles.d_content}>
              <p>
                Computer Science Society organizes coding contests for first
                year students. This contest being open to all enhances a good
                competitive environment for the students.
                <span className={Styles.mobile_hide}>
                  The questions are made such that even students will little or
                  basic Knowledge of programming can surely attempt the
                  questions. Learning programming is now an essential skill for
                  various placement interviews and our society encourages more
                  and more participation in such activities
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.desktop_hide}>
          <p className={Styles.title}>ENIGMA</p>
          <p>
            Computer Science Society organizes coding contests for first year
            students. This contest being open to all enhances a good competitive
            environment for the students.
            <span className={Styles.mobile_hide}>
              The questions are made such that even students will little or
              basic Knowledge of programming can surely attempt the questions.
              Learning programming is now an essential skill for various
              placement interviews and our society encourages more and more
              participation in such activities
            </span>
          </p>
        </div>
      </div>

      <div className={`${Styles.c_classes} ${Styles.card_blur}`}>
        <div
          className={`${Styles.c_classes} ${Styles.d_card_blur} ${Styles.mobile_hide}`}
        >
          <div className={Styles.h_before}>
            <div className={Styles.img_1_c}>
              <img src="./images/events/C-classes.png" alt="Image" />
            </div>
            <p className={Styles.d_title}>C CLASSES</p>
          </div>
          <div className={Styles.h_after}>
            <div className={Styles.d_content}>
              <p>
                Basics of programming and C language is taught by the computer
                science students of second year in order to enlighten the first
                year students about the resources to study
                <span className={Styles.mobile_hide}>
                  tips and tricks to move ahead in terms of fundamentals and
                  knowledge about Computer Science.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.desktop_hide}>
          <p className={Styles.title}>C CLASSES</p>
          <p>
            Basics of programming and C language is taught by the computer
            science students of second year in order to enlighten the first year
            students about the resources to study
            <span className={Styles.mobile_hide}>
              tips and tricks to move ahead in terms of fundamentals and
              knowledge about Computer Science.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnoEvents;
