import React from "react";
import { GetStaticProps } from "next";
import Developers from "../../style-guide/page-component/Developers";
import DevelopersNew from "../../style-guide/page-component/Developersnew";
import Main from "../../style-guide/page-component/DevelopersMain";
import Styles from "./developerspage.module.css";

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
    year: "2";
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
    year: "2";
  }[];
}

const developers = ({ devWing, coHead }: DeveloperProps) => {
  return (
    <div className={Styles.devpgheader}>
      <Main year={2022} />
      <DevelopersNew devWing={devWing} coHead={coHead} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/admin/members/21-22`
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
