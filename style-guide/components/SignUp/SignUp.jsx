import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SignUp = (props) => {
  const [signed, setSigned] = useState();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("signed") || "false");
    if (items) {
      setSigned(items);
    }
  }, []);

  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   const query = confirm("Do you really want to log out?");
  //   if (query) {
  //     try {
  //       const res = await axios.get(
  //         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/user/logout`
  //       );
  //       console.log({ res });
  //       if (res.data.status === "success") {
  //         setSigned(false);
  //         localStorage.setItem("signed", "false");
  //         localStorage.removeItem("CSS_ScholarID");
  //         window.location.search = "";
  //       }
  //     } catch (err) {
  //       console.log({ err });
  //       alert(err.message);
  //     }
  //   }
  // };

  return (
    <Link
      href={
        signed
          ? "/profile?currentPage=" + window.location.pathname
          : "/signin?currentPage=" + window.location.pathname
      }
      passHref={true}
    >
      <div
        id="signup"
        className={`${styles.signin_btn} ${signed ? styles.signed : ""}`}
        // onClick={signed && handleLogout}
        title={signed ? "click to view profile" : "click to signin"}
      >
        {
          // signed?<FaUser/>:<FaSignInAlt />
          signed ? (
            <FontAwesomeIcon icon={faUser} />
          ) : (
            <FontAwesomeIcon icon={faSignInAlt} />
          )
        }
        <div className={styles.signin_text}>
          {signed ? localStorage.getItem("CSS_ScholarID") : "Sign In"}
        </div>
      </div>
    </Link>
  );
};

export default SignUp;
