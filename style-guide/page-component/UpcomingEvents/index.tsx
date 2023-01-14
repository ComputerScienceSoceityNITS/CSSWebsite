import React from "react";
import Styles from "./UpcomingEvents.module.css";
import Drone from "../../components/lottie-player/drones";
import Upev from "../../components/lottie-player/upev";
import Shake from "react-reveal/Shake";
import Carousel from "../../components/carousel";

// interface EventsProps {
//   events: {
//     _id: String;
//     name: String;
//     description: String;
//     startTime: String;
//     startDate: String;
//     images: [];
//     endDate: String;
//     __v: 0;
//   }[];
// }

const UpcomingEvents = () => {
  return (
    <div className={Styles.announcements}>
      <Drone />
      <h1 className={Styles.head}>
        <Upev />
        <Shake>Announcements</Shake>
      </h1>
      <Carousel />
    </div>
  );
};

export default UpcomingEvents;
