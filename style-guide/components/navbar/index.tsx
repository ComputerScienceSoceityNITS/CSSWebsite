import React, { useState, useEffect } from "react";
import Link from "next/link";
import Styles from "./navbar.module.css";
import SignUpBtn from "../../components/SignUp/SignUp";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);//new
  useEffect(() => {
    if (toggle) {
      document.body.setAttribute("style", "overflow: hidden");
    } else {
      document.body.setAttribute("style", "overflow: scrollY");
    }
  }, [toggle]);
  return (
    <div className={Styles.navigation}>
      <button
        className={`${Styles.navigation__button} ${
          toggle ? Styles.navigation__button__on : ""
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <span
          className={`${Styles.navigation__icon} ${
            toggle ? Styles.navigation__icon__on : ""
          }`}
        >
          {" "}
          &nbsp;{" "}
        </span>
      </button>

      <div
        className={`${Styles.navigation__bg} ${
          toggle ? Styles.navigation__bg__on : ""
        }`}
      >
        &nbsp;
      </div>

      <nav
        className={`${Styles.navigation__nav} ${
          toggle ? Styles.navigation__nav__on : ""
        }`}
      >
        <div className={Styles.title}>
          <p>
            Computer&nbsp;
            <span className={Styles.highlight}>Science</span>
            <br />
            Society
          </p>
        </div>
        <ul className={Styles.navigation__list}>
          <li className={Styles.navigation__item}>
            <Link href="/">
              <a
                className={Styles.navigation__link}
                onClick={() => setToggle(!toggle)}
              >
                Home
              </a>
            </Link>
          </li>
          <li className={Styles.navigation__item}>
            <Link href="/wings" passHref={false}>
              <a
                className={Styles.navigation__link}
                onClick={() => setToggle(!toggle)}
              >
                Wings
              </a>
            </Link>
          </li>
          <li className={Styles.navigation__item}>
            <Link href="/events">
              <a
                className={Styles.navigation__link}
                onClick={() => setToggle(!toggle)}
              >
                Events
              </a>
            </Link>
          </li>
          <li className={Styles.navigation__item}>
            <Link href="/gallery">
              <a
                className={Styles.navigation__link}
                onClick={() => setToggle(!toggle)}
              >
                Gallery
              </a>
            </Link>
          </li>
          <li className={Styles.navigation__item}>
            <Link href="/members/23-24" passHref={false}>
              <a
                className={Styles.navigation__link}
                onClick={() => setToggle(!toggle)}
              >
                Members
              </a>
            </Link>
          </li>
          <li className={Styles.navigation__item}>
            <Link href="/developers/23-24" passHref={false}>
              <a
                className={Styles.navigation__link}
                onClick={() => setToggle(!toggle)}
              >
                Developers
              </a>
            </Link>
          </li>
          {/* <li className={Styles.navigation__item}>
            <Link href="/signup" passHref={false}>
              <a
                className={Styles.navigation__link}
                onClick={() => setToggle(!toggle)}
              >
          Sign Up
              </a>
            </Link>
          </li> */}
        </ul>
        <SignUpBtn />
      </nav>
      {/* <SignUpBtn /> */}
    </div>
  );
};

export default Navbar;
