import React from "react";
import { GetStaticProps } from "next";
import Developers from "../../style-guide/page-component/Developers";
import Main from "../../style-guide/page-component/DevelopersMain";

interface DeveloperProps {
  devWing: {
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
  coHead: {
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
}

const developers = ({ devWing, coHead }: DeveloperProps) => {
  return (
    <div>
      <Main year={2021} />
      <Developers devWing={devWing} coHead={coHead} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://css-website.herokuapp.com/api/admin/members/20-21"
  );
  const data = await response.json();

  return {
    props: {
      devWing: data.devWing,
      coHead: data.coHeads,
    },
  };
};
export default developers;
