import React from "react";
import { GetStaticProps } from "next";
import DevelopersNew from "../../style-guide/page-component/Developersnew";
import DevelopersNewMain from "../../style-guide/page-component/Developersnewmain";
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
  secretary: {
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

const developers = ({ devWing, coHead, secretary }: DeveloperProps) => {
  return (
    <div className={Styles.devpgheader}>
      <DevelopersNewMain year={2021} />
      <DevelopersNew devWing={devWing} coHead={coHead} secretary={secretary} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/admin/members/20-21`
  );
  const data = await response.json();

  return {
    props: {
      devWing: data.devWing,
      coHead: data.coHeads.filter((i: any) => i.role === "Dev-Wing Co-Head"),
    },
  };
};
export default developers;
