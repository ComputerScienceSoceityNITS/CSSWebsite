import React from "react";
import { GetStaticProps } from "next";
import Members from "../../style-guide/page-component/Members";
import Members2024 from "../../style-guide/page-component/Members2024";

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
    prWing: {
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
    prWing,
    members,
  }: MemberProps) => {
    return (
      <>
        <Members year={2024} />
        <Members2024
          devWing={devWing}
          coHead={coHead}
          executiveWing={executiveWing}
          mlWing={mlWing}
          designWing={designWing}
          literaryWing={literaryWing}
          members={members}
          cpWing={cpWing}
          prWing={prWing}
        />
      </>
    );
  };
  
  export default members;
  
  export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/admin/members/23-24`
    );
    const data = await response.json();
  
    return {
      props: {
        devWing: data.members.filter(
          (i: any) => i.role === "Dev-Wing" || i.role == "Dev-Wing "
        ),
        cpWing: data.cpWing,
        executiveWing: data.members.filter(
          (i: any) => i.role === "Executive-Wing" || i.role === "Executive-Wing "
        ),
        mlWing: data.members.filter(
          (i: any) => i.role === "ML-Wing" || i.role === "ML-Wing "
        ),
        designWing: data.members.filter(
          (i: any) => i.role == "Design-Wing" || i.role == "Design-Wing "
        ),
        literaryWing:
          data.members.filter(
            (i: any) => i.role === "Literary-Wing" || i.role === "Literary-Wing "
          ) || [],
        prWing:
          data.members.filter(
            (i: any) => i.role == "PR-Wing " || i.role === "PR-Wing"
          ) || [],
        coHead: data.members.filter(
          (i: any) =>
            i.role === "Dev-Wing Head" || i.role === "Executive-Wing Head"
        ),
        members: data.members,
      },
    };
  };