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
  secretary: {
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

const developers = ({ devWing, coHead, secretary }: DeveloperProps) => {
  return (
    <div className={Styles.devpgheader}>
      <DevelopersNewMain year={2024} />
      <DevelopersNew devWing={devWing} coHead={coHead} secretary={secretary} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/admin/members/23-24`
  );
  const data = await response.json();
  console.log(data.members.filter((i: any) => i.role == "Technical Head"));

  return {
    props: {
      devWing: data.members.filter(
        (i: any) =>
          i.role == "Dev-Wing" ||
          i.role == "Dev-Wing " ||
          (i.role == "Dev -Wing" && i.session == "23-24")
      ),
      coHead: data.members.filter(
        (i: any) => i.role == "Dev-Wing Head" && i.session == "23-24"
      ),
      secretary: data.members.filter((i: any) => i.role === "Technical Head"),
    },
  };
};
export default developers;
