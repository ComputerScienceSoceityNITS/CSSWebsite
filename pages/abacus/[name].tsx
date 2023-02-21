import React from "react";
import { useRouter } from "next/router";
import data from "../../_json/events/events.json";
import AbacusPageComponent from "../../style-guide/components/Abacus-Event-Page";

const AbacusPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const pageData: Object | undefined = data.events.abacus.find(
    (element) => element.name === name
  );
  console.log(pageData);
  return <AbacusPageComponent data={pageData} />;
};

export default AbacusPage;
