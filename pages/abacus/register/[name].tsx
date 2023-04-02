import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import data from "../../../_json/events/events.json";
import AbacusRegisterComponent from "../../../style-guide/components/Abacus-Register-Page";
import Spinner from "../../../style-guide/components/Spinner";

const RegisterPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try{
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/abacus`)
        .then((res) => res.json())
        .then((response) => {
          setData(response.events);
          // setActiveDate(datesArray[0]);
        })
        .catch((err)=>{
          err.response?
      alert(err.response.data.message):alert(err.message)
        })
        .finally(()=>setLoading(false))
    }catch(error:any){
      error.response?
      alert(error.response.data.message):alert(error.message)
      // alert(error.message);
    }
  }, []);
  console.log(data);
  const router = useRouter();
  const { name } = router.query;
  const pageData: Object | undefined = data.find(
    (element: any) => element.name === name
  );
  console.log(pageData);
  if(loading){
    return <Spinner/>
  }
  if (pageData && !loading) {
    return <AbacusRegisterComponent data={pageData} />;
  }
  if (!pageData && !loading) {
    window.location.pathname = "/page-not-found";
  }
  return null;
};

export default RegisterPage;
