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
        );
        console.log({ res });
        if (res.data.status === "success") {
          setData(res.data.user);
          setLoading(false);
        }
        if(res.status===401){
          localStorage.clear();
        }
      } catch (err: any) {
        err.response ? alert(err.response.data.message) : alert(err.message);
        console.log(err);
      }
    })();
  }, []);
  if (!loading) return <SignUp data={data} eventType={"Profile"} />;
  else return <Spinner/>;
};

export default Profile;
