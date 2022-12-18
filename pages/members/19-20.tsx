import React from "react";
import { GetStaticProps } from "next";
import Members2020 from "../../style-guide/page-component/Members2020";
import Members from "../../style-guide/page-component/Members";

interface MemberProps {
  year2: {
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
  year3: {
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
  year4: {
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

const members = ({ year2, year3, year4 }: MemberProps) => {
  return (
    <>
      <Members year={2020} />
      <Members2020 year2={year2} year3={year3} year4={year4} />
    </>
  );
};

export default members;

export const getStaticProps: GetStaticProps = async () => {
  let response = await fetch(
    `${process.env.BACKEND_URL}/api/admin/members/19-20?year=2`
  );
  const Year2 = await response.json();

  response = await fetch(
    `${process.env.BACKEND_URL}/api/admin/members/19-20?year=3`
  );
  const Year3 = await response.json();

  response = await fetch(
    `${process.env.BACKEND_URL}/api/admin/members/19-20?year=4`
  );
  const Year4 = await response.json();

  return {
    props: {
      year2: Year2.members,
      year3: Year3.members,
      year4: Year4.members,
    },
  };
};
