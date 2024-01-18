import { GetStaticProps } from "next";
import AboutUs from "../style-guide/page-component/About-us";
import EventSection from "../style-guide/page-component/Event-section";
import Hero from "../style-guide/page-component/Hero";
import Executives from "../style-guide/page-component/Executives";
import UpcomingEvents from "../style-guide/page-component/UpcomingEvents";

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
    phoneNo: String;
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
      <UpcomingEvents />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/admin/members/23-24`
  );
  const data = await response.json();
  return {
    props: {
      members: data.members,
    },
  };
};
