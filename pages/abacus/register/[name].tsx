import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import data from "../../../_json/events/events.json";
import AbacusRegisterComponent from "../../../style-guide/components/Abacus-Register-Page";

const RegisterPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://css-cms.onrender.com/api/admin/abacus")
      .then((res) => res.json())
      .then((response) => {
        setData(response.events);

        // setActiveDate(datesArray[0]);
      });
  }, []);
  console.log(data);
  const router = useRouter();
  const { name } = router.query;
  const pageData: Object | undefined = data.find(
    (element: any) => element.name === name
  );
  console.log(pageData);
  if (data.length > 0) {
    return <AbacusRegisterComponent data={pageData} />;
  }
  return null;
};

export default RegisterPage;
