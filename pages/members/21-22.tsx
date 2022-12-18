import React from "react";
import { GetStaticProps } from "next";
import Members2022 from "../../style-guide/page-component/Members2022";
import Members from "../../style-guide/page-component/Members";

interface MemberProps {
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
  cpWing: {
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
  executiveWing: {
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
  mlWing: {
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
  designWing: {
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
  literaryWing: {
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
}

const members = ({
  devWing,
  cpWing,
  executiveWing,
  coHead,
  mlWing,
  designWing,
  literaryWing,
  members,
}: MemberProps) => {
  return (
    <>
      <Members year={2022} />
      <Members2022
        devWing={devWing}
        coHead={coHead}
        executiveWing={executiveWing}
        mlWing={mlWing}
        designWing={designWing}
        literaryWing={literaryWing}
        members={members}
        cpWing={cpWing}
      />
    </>
  );
};

export default members;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/admin/members/21-22`
  );
  const data = await response.json();
  return {
    props: {
      devWing: data.devWing,
      cpWing: data.cpWing,
      executiveWing: data.executiveWing,
      mlWing: data.mlWing,
      designWing: data.designWing,
      literaryWing: data.literaryWing || [],
      coHead: data.coHeads,
      members: data.members,
    },
  };
};
