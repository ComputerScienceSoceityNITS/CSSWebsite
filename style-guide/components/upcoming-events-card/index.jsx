import React, { useState } from "react";
import Styles from "./upcoming-events-card.module.css";

const UpcomingEventsCard = ({ props }) => {
  const start = props.startDate.slice(0, 10);
  const end = props.endDate.slice(0, 10);
  // console.log(props);
  const img =
    props.images.length == 0
      ? `https://via.placeholder.com/150`
      : props.images[0].url;
  const [toggle, setToggle] = useState(false);
  return (
    <div className={Styles.body}>
      <div className={`${Styles.cardContainer} ${Styles.inactive}`}>
        <div
          className={`${Styles.card} ${toggle ? Styles.active : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <div className={`${Styles.front} ${Styles.side}`}>
            <div
              className={`${Styles.img} ${Styles.img1}`}
              style={{
                backgroundImage: `url(${img})`,
              }}
            ></div>
            <div className={Styles.info}>
              <h2>{props.name}</h2>
              <p>
                Date : {`${start} to ${end}`}
                <br />
                Tap for details
              </p>
            </div>
          </div>
          <div className={`${Styles.back} ${Styles.side}`}>
            <div className={Styles.info}>
              <h2>{props.name}</h2>
              <div className={Styles.review}>
                <p>Details</p>
              </div>
              <ul>
                <li>{props.description}</li>
              </ul>
              <a href={props.formLink} target="_blank" rel="noreferrer">
                <div className={Styles.btn}>
                  <h4>Learn More</h4>
                  <svg
                    fill="#ffffff"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                    <path d="M0-.25h24v24H0z" fill="none" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UpcomingEventsCard.defaultProps = {
  props: {
    name: "name",
    description: "description",
    startTime: "start time",
    startDate: "start date",
    images: [],
    endDate: "end date",
    __v: 0,
  },
};

export default UpcomingEventsCard;
