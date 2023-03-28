import React from "react";
import Styles from "./events.module.css";
import TechnicalEvents from "../TechnicalEvents";
import CulturalEvents from "../CulturalEvents";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              itaque quaerat repudiandae a distinctio et totam dicta, fugiat
              eligendi, nulla upta Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nobis ea, dolor praesentiumommodi aspernatur
              magni officiis consequatur? fuga consequuntur quia animi. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Rem, animi!
            </p>
            <span className={Styles.CSSAnimation}>EVENTS OF THE YEAR</span>
          </div>
          <div className={` ${Styles.mainCardHolder}`}>
            <a href="/abacus" className={` ${Styles.abacus_card}`}>
              <img src="./images/eventPage_icons/abacus.png" alt="ABACUS" />
              <div>Abacus</div>
            </a>
            <a href="/enigma" className={` ${Styles.abacus_card}`}>
              <img src="./images/eventPage_icons/data.png" alt="ENIGMA" />
              <div>Enigma</div>
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
