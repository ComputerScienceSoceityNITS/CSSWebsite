import React, { useState, useEffect } from "react";
import SignUp from "../style-guide/page-component/SignUp";
import Spinner from "../style-guide/components/Spinner";
import axios from "axios";
const Profile = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res: any = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/user`,
          { withCredentials: true }
        ).then((result)=>{
          if (result.data.status === "success") {
            setData(result.data.user);
            setLoading(false);
          }
          // if(result.status===401){
          //     localStorage.clear();
          //     window.location.pathname ="/";
          //   }
          // console.log({result});
        }).catch((err)=>{
          err.response ? alert(err.response.data.message) : alert(err.message);
          console.log({err});
          if(err.response.status===401){
            localStorage.clear();
            window.location.pathname ="/abacus";
          }
        console.log(res);
        })
      } catch (err: any) {
        err.response ? alert(err.response.data.message) : alert(err.message);
        // console.log(err);
      }
    })();
  }, []);
  if (!loading) return <SignUp data={data} eventType={"Profile"} />;
  else return <Spinner/>;
};

export default Profile;
