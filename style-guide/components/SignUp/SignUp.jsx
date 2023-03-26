import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import axios from "axios";
// import { FaSignInAlt,FaUser } from 'react-icons/fa'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const SignUp = (props) => {
  const [signed, setSigned] = useState();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("signed") || "false");
    if (items) {
      setSigned(items);
    }
  }, []);

  // const signed = JSON.parse(localStorage.getItem("signed")) || false;
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();
    const query = confirm("Do you really want to log out?");
    if (query) {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/user/logout`
        );
        console.log({ res });
        if (res.data.success) {
          setSigned(false);
          localStorage.setItem("signed", "false");
          localStorage.setItem("CSS_ScholarID", "");
          window.location.search = "";
        }
      } catch (err) {
        console.log({ err });
        alert(err.message);
      }
    }
  };

  return (
    <Link
      href={
        signed
          ? "/logout?currentPage=" +
            router.pathname.slice(1, router.pathname.length)
          : "/signin?currentPage=" +
            router.pathname.slice(1, router.pathname.length)
      }
      passHref={true}
    >
      <div
        id="signup"
        className={`${styles.signup_btn} ${signed ? styles.signed : ""}`}
      >
        {
          // signed?<FaUser/>:<FaSignInAlt />
          signed ? (
            <FontAwesomeIcon icon={faUser} onClick={handleLogout} />
          ) : (
            <FontAwesomeIcon icon={faSignInAlt} />
          )
        }
      </div>
    </Link>
  );
};

export default SignUp;
