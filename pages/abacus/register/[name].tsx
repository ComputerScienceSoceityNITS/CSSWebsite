import React from "react";
import { useRouter } from "next/router";
import data from "../../../_json/events/events.json";
import AbacusRegisterComponent from "../../../style-guide/components/Abacus-Register-Page";

const RegisterPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const pageData: Object | undefined = data.events.abacus.find(
    (element) => element.name === name
  );
  console.log(pageData);
  return <AbacusRegisterComponent data={pageData} />;
};

export default RegisterPage;
