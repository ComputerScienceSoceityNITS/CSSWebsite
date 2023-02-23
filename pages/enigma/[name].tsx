import React from "react";
import { useRouter } from "next/router";
import data from "../../_json/events/events.json";
import EnigmaPageComponent from "../../style-guide/components/Enigma-Contest-Page";

const EnigmaPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const pageData: Object | undefined = data.events.enigma.find(
    (element) => element.name === name
  );

  // const pageData2: Object | undefined = data.events.enigmaover.find(
  //   (element) => element.name === name
  // );

  console.log(pageData);
  return <EnigmaPageComponent data={pageData} />;

  // <EnigmaPageComponent data={pageData2} />;
};

export default EnigmaPage;
