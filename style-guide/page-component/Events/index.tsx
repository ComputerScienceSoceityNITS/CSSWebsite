import React from "react";
import Styles from "./events.module.css";
import TechnicalEvents from "../TechnicalEvents";
import EventsBg from "../../components/lottie-player/events";
// import Link from "next/link";
const Events = () => {
  return (
    <>
      <div className={Styles.events_bg}>
        <EventsBg />
        <div className={Styles.events_content}>
          <div className={Styles.events_heading}>
            <span>OUR</span>
            <span>EVENTS</span>
            <p>
              We have a plethora of events that grooms an individual booth in
              the professional domain and the personal domain.Be it the DSA
              Marathon or Development,ML and Design Workshops or any other
              technical domain, we stand high on the zenith.Be it the physical
              activities, we have CSS Olympics always raising one’s
              sportsmanship. You think of cultural fests,we have the ESPERANZA,
              CSS GO and many more bullets of enjoyment in our arsenal with our
              annual week CSS ABACUS being the head honcho, the Mother of
              Festivals always making an example set in stone. You name an
              event, we have it.
            </p>
            <p>
              Our dedicated team with the motto of PARTICIPATE ENJOY AND LEARN
              makes the events which makes an individual an All-Rounder and
              his/her moments of life unforgettable and exciting.
            </p>
            <span className={Styles.CSSAnimation}>EVENTS OF THE YEAR</span>
          </div>
          <div className={` ${Styles.mainCardHolder}`}>
            <a href="/abacus" className={` ${Styles.abacus_card}`}>
              <img src="./images/eventPage_icons/abacus.png" alt="ABACUS" />
              <div className={Styles.eventHover}>
                ABACUS
                <br />
                <span className={Styles.hideDate}>04th - 07th Apr</span>
              </div>
            </a>
            <a href="/enigma" className={` ${Styles.abacus_card}`}>
              <img src="./images/eventPage_icons/data.png" alt="ENIGMA" />
              <div className={Styles.eventHover}>
                ENIGMA
                <br />
                <span className={Styles.hideDate}>COMING SOON!</span>
              </div>
            </a>
          </div>

          {/* <div className={` ${Styles.enigma_card}`}>
            <p>ENIGMA</p>

            <div>
              <Link href="/enigma">
                <img src="./images/events/ENIGMA2.jpg" alt="ENIGMA" />
              </Link>
              <button
                className={Styles.eventButton}
                onClick={() => {
                  window.location.href = "/enigma";
                }}
              >
                ENIGMA
              </button>
            </div>
          </div> */}
        </div>

        <TechnicalEvents />
      </div>
    </>
  );
};

export default Events;
