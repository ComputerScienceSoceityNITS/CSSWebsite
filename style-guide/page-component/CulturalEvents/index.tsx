import React from "react";
// import EventsCardMain from "../../components/events-card-main";
import CulturalBg from "../../components/lottie-player/cultural-bg";
import SingTheSong from "../../components/lottie-player/singthesong";
import Playing from "../../components/lottie-player/playing";
import Styles from "./culturalEvents.module.css";

const CulturalEvents = () => {
  return (
    <section className={Styles.cultural}>
      <div className={Styles.culturalbg1}>
        <CulturalBg />
      </div>
      <div className={Styles.culturalbg2}>
        <CulturalBg />
      </div>
      <div className={Styles.culturalbg3}>
        <CulturalBg />
      </div>
      <div className={Styles.lottie_3}>
        <SingTheSong />
      </div>
      <div className={`${Styles.orientation} ${Styles.card_blur}`}>
        <div
          className={`${Styles.d_orientation} ${Styles.d_card_blur} ${Styles.mobile_hide}`}
        >
          <div className={Styles.h_before}>
            <div className={Styles.img_1_c}>
              <img src="./images/events/event-1.jpg" alt="Image" />
            </div>
            <p className={Styles.d_title}>ORIENTATION</p>
          </div>
          <div className={Styles.h_after}>
            <div className={Styles.d_content}>
              <p>
                A weekend full of fun and coding events for freshers to interact
                and get to know their batchmates, seniors and competitors.
              </p>
              <ul className={Styles.mobile_hide}>
                <li>Chess</li>
                <li>Valo</li>
                <li>Meme competition</li>
                <li>Article writing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.desktop_hide}>
          <p className={Styles.title}>ORIENTATION</p>
          <p>
            A weekend full of fun and coding events for freshers to interact and
            get to know their batchmates, seniors and competitors.
          </p>
          <ul className={Styles.mobile_hide}>
            <li>Chess</li>
            <li>Valo</li>
            <li>Meme competition</li>
            <li>Article writing</li>
          </ul>
        </div>
      </div>
      <div className={`${Styles.cs_go} ${Styles.card_blur}`}>
        <div
          className={`${Styles.d_cs_go} ${Styles.d_card_blur} ${Styles.mobile_hide}`}
        >
          <div className={Styles.h_before}>
            <div className={Styles.img_1_c}>
              <img src="./images/events/event-2.jpg" alt="Image" />
            </div>
            <p className={Styles.d_title}>CS-GO</p>
          </div>
          <div className={Styles.h_after}>
            <div className={Styles.d_content}>
              <p
                style={{
                  fontSize: "1.8vw",
                  fontFamily: `'Cormorant Unicase', serif`,
                }}
              >
                Fun and Gaming events
              </p>
              <ul>
                <li>Chess</li>
                <li>Valorant Tournaments</li>
                <li>Skrible</li>
                <li>General Quiz</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.desktop_hide}>
          <p className={Styles.title}>CS-GO</p>
          <p>Fun and Gaming events</p>
          <ul>
            <li>Chess</li>
            <li>Valorant Tournaments</li>
            <li>Skrible</li>
            <li>General Quiz</li>
          </ul>
        </div>
      </div>
      <div className={`${Styles.freshers} ${Styles.card_blur}`}>
        <div
          className={`${Styles.d_freshers} ${Styles.d_card_blur} ${Styles.mobile_hide}`}
        >
          <div className={Styles.h_before}>
            <div className={Styles.img_1_c}>
              <img src="./images/events/event-3.jpg" alt="Image" />
            </div>
            <p className={Styles.d_title}>FRESHERS</p>
          </div>
          <div className={Styles.h_after}>
            <div className={Styles.d_content}>
              <p>
                Hey there, get ready, it’s the Freshers, it’s the Esperanza!
                <span className={Styles.mobile_hide}>
                  The event that excites every first-year guy and girl.{" "}
                </span>
                The main aim of this party is to give a warm welcome to the new
                comers.
                <span className={Styles.mobile_hide}>
                  It is accompanied with so many colourful events and programs
                  and splendid decoration, thus making it a soulful evening.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.desktop_hide}>
          <p className={Styles.title}>FRESHERS</p>
          <p>
            Hey there, get ready, it’s the Freshers, it’s the Esperanza!
            <span className={Styles.mobile_hide}>
              The event that excites every first-year guy and girl.{" "}
            </span>
            The main aim of this party is to give a warm welcome to the new
            comers.
            <span className={Styles.mobile_hide}>
              It is accompanied with so many colourful events and programs and
              splendid decoration, thus making it a soulful evening.
            </span>
          </p>
        </div>
      </div>
      <div className={`${Styles.farewell} ${Styles.card_blur}`}>
        <div
          className={`${Styles.d_farewell} ${Styles.d_card_blur} ${Styles.mobile_hide}`}
        >
          <div className={Styles.h_before}>
            <div className={Styles.img_1_c}>
              <img src="./images/events/event-4.jpg" alt="Image" />
            </div>
            <p className={Styles.d_title}>FAREWELL</p>
          </div>
          <div className={Styles.h_after}>
            <div className={Styles.d_content}>
              <p>
                <span className={Styles.mobile_hide}>
                  Some day and at some time, we need to bid farewell to the
                  special and loving ones in our life.{" "}
                </span>
                Our senior friends, although not blood-related, are special
                people in our lives and bidding farewell might be a painful
                moment as we will be missing them.
                <span className={Styles.mobile_hide}>
                  As they need to say goodbye, we make it worth remembering for
                  them by bidding them some encouraging farewell messages and
                  memories through the farewell event, which is conducted at the
                  end of every year session.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.desktop_hide}>
          <p className={Styles.title}>FAREWELL</p>
          <p>
            <span className={Styles.mobile_hide}>
              Some day and at some time, we need to bid farewell to the special
              and loving ones in our life.
            </span>
            Our senior friends, although not blood-related, are special people
            in our lives and bidding farewell might be a painful moment as we
            will be missing them.
            <span className={Styles.mobile_hide}>
              As they need to say goodbye, we make it worth remembering for them
              by bidding them some encouraging farewell messages and memories
              through the farewell event, which is conducted at the end of every
              year session.
            </span>
          </p>
        </div>
      </div>
      <div className={Styles.lottie_4}>
        <Playing />
      </div>
    </section>
  );
};

export default CulturalEvents;
