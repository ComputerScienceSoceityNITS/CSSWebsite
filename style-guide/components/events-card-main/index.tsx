import React from "react";
import Styles from "./events-card-main.module.css";
import Image from "next/image";

interface EventsProps {
  name: string;
  body: string;
  image: string;
}

const EventsCardMain = (props: EventsProps) => {
  return (
    // <div classNameName={Styles.card}>
    //   <div classNameName={Styles.content}>
    //     <div classNameName={Styles.image}>
    //       <img src={props.image} alt="" />
    //     </div>
    //     <h1 classNameName={Styles.name}>{props.name}</h1>
    //     <div classNameName={Styles.body}>{props.body}</div>
    //   </div>
    // </div>
    <div className={Styles.card_blur}>
      <div className={`${Styles.d_card_blur} ${Styles.mobile_hide}`}>
        <div className={Styles.h_before}>
          <div
            className={Styles.img_1_c}
            style={{ height: "16vw", width: "21vw" }}
          >
            <Image src="./images/events/CSS-hack.png" alt="Image" />
          </div>
          <p className={Styles.d_title}>CSS HACKS</p>
        </div>
        <div className={Styles.h_after}>
          <div className={Styles.d_content}>
            <p>
              An amazing hackathon for developers
              <span className={Styles.mobile_hide}> and dev enthusiasts </span>
              solving problems given by the judges. This is the one big
              opportunity for all the hackathon lovers to check their innovative
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
      {/* <div className={Styles.desktop_hide}>
        <p className={Styles.title}>CSS HACKS</p>
        <p>
          An amazing hackathon for developers
          <span className={Styles.mobile_hide}> and dev enthusiasts </span>
          solving problems given by the judges. This is the one big opportunity
          for all the hackathon lovers to check their innovative
          <span className={Styles.mobile_hide}> and presentation </span>
          skills.
          <span className={Styles.mobile_hide}>
            This provides the participants a upperhand experience for all the
            hackathon they will be participating in.
          </span>
        </p>
      </div> */}
    </div>
  );
};

EventsCardMain.defaultProps = {
  name: "Name",
  body: "Body contains event description/details",
  image: "https://via.placeholder.com/150",
};

export default EventsCardMain;
