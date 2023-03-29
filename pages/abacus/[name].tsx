import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import data from "../../_json/events/events.json";
import AbacusPageComponent from "../../style-guide/components/Abacus-Event-Page";

const AbacusPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/abacus`)
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
  if (data.length > 0) {
    return <AbacusPageComponent data={pageData} />;
  }
  return null;
};

export default AbacusPage;
