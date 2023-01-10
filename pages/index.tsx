import { GetServerSideProps } from "next";
import AboutUs from "../style-guide/page-component/About-us";
import EventSection from "../style-guide/page-component/Event-section";
import Hero from "../style-guide/page-component/Hero";
import Executives from "../style-guide/page-component/Executives";
<<<<<<< HEAD
import UpcomingEvents from "../style-guide/page-component/UpcomingEvents";
=======
import Carousel from "../style-guide/components/carousel";
>>>>>>> 234a149b7cd214ee63a93db0b8b63925a6d29a15

interface IndexProps {
  members: {
    avatar: { public_id: String; url: String };
    socialMedia: [
      { facebook: String; instagram: String; github: String; linkedin: String }
    ];
    _id: String;
    name: String;
    role: String;
    session: String;
    year: String;
  }[];
  events: {
    _id: String;
    name: String;
    description: String;
    startTime: String;
    startDate: String;
    images: [];
    endDate: String;
    __v: 0;
  }[];
}

const Home = ({ members }: IndexProps) => {
  return (
    <>
      <Hero />
      <AboutUs />
      <EventSection />
      <Executives members={members} />
      <UpcomingEvents events={events} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  let response = await fetch(
    `${process.env.BACKEND_URL}/api/admin/members/21-22`
  );
  const data = await response.json();

  response = await fetch(`${process.env.BACKEND_URL}/api/admin/events`);

  const events = await response.json();
  return {
    props: {
      members: data.members,
      events: events.events,
    },
  };
};
