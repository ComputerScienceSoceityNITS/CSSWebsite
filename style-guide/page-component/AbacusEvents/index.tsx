import React from "react";
import Styles from "./abacusEvents.module.css";
import AbacusMap from "./AbacusMap";
import EventBg from "../../components/lottie-player/event-bg";
const AbacusEvents = () => {
  const cards = [
    {
      name: "CSS HACKS",
      cont1:
        "Conducted under the banner of Abacus by the dev wing, CSS Hacks as the name suggests is an annual hackathon. The hackathon caters to the participants with a series of intriguing and complicated problems as they compete with their peers for exciting prizes.",
      cont3: "",
      img: "./images/events/CSS-hack.png",
      id: "1",
    },

    {
      name: "CSS WARS",
      cont1:
        "Web design is one of the most sought out fields in computer science. CSS wars is conducted by the dev wing and is an annual web development competition aimed at testing the prowess of the participants in HTML, CSS and Javascript.",
      cont3: "",
      img: "./images/events/CSS-war.jpeg",
      id: "3",
    },

    {
      name: "IPL AUCTION",
      cont1:
        "The craze of cricket beats flows in our blood. What better way to commemorate our love for the sport and flaunt our knowledge of the game and its players than an auction.",
      cont3: "",
      img: "./images/events/Development.jpeg",
      id: "4",
    },
    {
      name: "STATMANIA",
      cont1:
        "StatMania is a unique event that tests one's skills to solve statistical puzzles and elementary problems in computing.The difficulty level is always set keeping in mind that students from all branches and batches can participate. ",
      cont3: "",
      img: "./images/events/Development.jpeg",
      id: "2",
    },
    {
      name: "TEC REVIEW",
      cont1:
        "Tec Review is the event under CSS Abacus that will allow one to express, review, praise or criticise and give their unbiased and unfiltered opinion on the different burning trends in the tech world today.",
      cont3: "",
      img: "./images/events/Development.jpeg",
      id: "5",
    },
    {
      name: "FICTIOUS CYPHER",
      cont1:
        "Fictious Cypher is the general quiz under CSS Abacus that will put one up against the best quizzers in the college and leave their hippocampus craving for more.",
      cont3: "",
      img: "./images/events/Development.jpeg",
      id: "6",
    },

    {
      name: "POLAROID",
      cont1:
        "Polaroid is the photography event under CSS Abacus which will give a platform to everyone to showcase their artistic side as they craft their stories through their lenses.",
      cont3: "",
      img: "./images/events/Development.jpeg",
      id: "7",
    },

    {
      name: "CHASE CLOUD 9",
      cont1:
        "A Technical Round and an HR round- that's what stands between a  candidate and a job. CHASE CLOUD 9 is an event where seniors, who have cracked internships and placements, guide juniors by simulating the mock hiring process.",
      cont3: " ",
      img: "./images/events/Development.jpeg",
      id: "8",
    },
    {
      name: "WEB SPYDER",
      cont1:
        "WEB SPYDERs is an online treasure hunt event combines the inner craving of being a pirate and the talent of a gen Z coder through a linking of succeeding web pages.",
      cont3:
        " The curiosity-filled labyrinth of puzzles nerve-wrecks Einstein in one’s mind, starting from just solving a single drop to conquering the ocean of knowledge.",
      img: "./images/events/Development.jpeg",
      id: "39",
    },
    {
      name: "RUDIMENTAL DIEGESIS",
      cont1:
        "Stories connect people and allow us to portray our emotions. Now it’s time to embrace the storyteller inside you in RUDIMENTAL DIEGESIS, an event allowing young minds to wield their mighty pens and craft magic with short stories.",
      cont3: " ",
      img: "./images/events/Development.jpeg",
      id: "27",
    },
    {
      name: "HOLMES ALONE",
      cont1:
        "CSS-ABACUS brings you HOLMES ALONE, wherein there has been a murder. We've managed to find some clues, but we've no idea what it leads to or who the murderer is. C'mon! Be your own Sherlock and solve it before any Lestrade does!",
      cont3: " ",
      img: "./images/events/Development.jpeg",
      id: "23",
    },
    {
      name: "ALGOCHEMY",
      cont1:
        "ALGOCHEMY is the premier coding contest. This is an event to test out your problem-solving skills, logical ability and DSA knowledge. With two divisions , including one exclusively for freshers, ALGOCHEMY caters to coders of all skill level.",
      cont3: " ",
      img: "./images/events/Development.jpeg",
      id: "18",
    },
  ];
  return (
    <>
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
        {cards.map((event) => (
          <AbacusMap AbacusEvents={event} key={event.id} />
        ))}
      </section>
    </>
  );
};

export default AbacusEvents;
