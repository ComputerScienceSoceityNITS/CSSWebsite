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


  return (
    <Link
      href={(window.location.pathname.includes("signin") || window.location.pathname.includes("profile")) ? "javascript:void(0)" :
        signed
          ? "/profile?currentPage=" + window.location.pathname
          : "/signin?currentPage=" + window.location.pathname
      }
      // className={window.location.pathname.includes("signin")?styles.disabled:null}
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
