import React from "react";
import Styles from "./events.module.css";
import CSSEvents from "../CSSEvents";
import EventsBg from "../../components/lottie-player/events";
import Link from "next/link";
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

          <div className={` ${Styles.abacus_card}`}>
            <div>
              <Link href="/abacus">
                <img src="./images/events/ABACUS.jpg" alt="ABACUS" />
              </Link>
              <button
                className={Styles.eventButton}
                onClick={() => {
                  window.location.href = "/abacus";
                }}
              >
                ABACUS
              </button>
            </div>

            <p>ABACUS</p>
          </div>

          <div className={` ${Styles.enigma_card}`}>
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
          </div>
        </div>

        <CSSEvents />
      </div>
    </>
  );
};

export default Events;
