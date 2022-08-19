import React from "react";
import Link from "next/link";
import Styles from "./footer.module.css";
import Lottie from "../lottie-player/footgroup";
// import GooglePlay from "../../../public/images/Homepage/Google_Play.png";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <span className={Styles.footgroup}>
        <Lottie />
      </span>
      <div className={Styles.fcopyright}>
        © 2022 Computer Science Society. All Rights Reserved.
      </div>
      <div className={Styles.fmain}>
        <div className={Styles.fmain_c}>
          <div className={Styles.fmain_e}>
            <Link href="/events">
              <a style={{ textDecoration: "none" }}>Events</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="/events">
              <a style={{ textDecoration: "none" }}>Enigma</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="/events">
              <a style={{ textDecoration: "none" }}>Abacus</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="/events">
              <a style={{ textDecoration: "none" }}>Esparanza</a>
            </Link>
          </div>
        </div>
        <div className={Styles.fmain_c}>
          <div className={Styles.fmain_e}>
            <Link href="members/21-22">
              <a style={{ textDecoration: "none" }}>Members</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="members/21-22">
              <a style={{ textDecoration: "none" }}>Core Members</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="members/21-22">
              <a style={{ textDecoration: "none" }}>Senior Executives</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="members/21-22">
              <a style={{ textDecoration: "none" }}>Junior Executives</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="members/21-22">
              <a style={{ textDecoration: "none" }}>Wing Executives</a>
            </Link>
          </div>
          <Link href="developers/21-22">
            <a className={Styles.fmain_e} style={{ textDecoration: "none" }}>
              Developer Members
            </a>
          </Link>
        </div>
        <div className={`${Styles.fmain_c} ${Styles.remove}`}>
          <div className={Styles.fmain_e}>Contact</div>
          <div className={Styles.fmain_e}>
            CSS, NIT Silchar,
            <br />
            Silchar, Assam <br />
            788010
          </div>
        </div>
        <div className={Styles.fmain_c}>
          <div className={Styles.fmain_e}>Socials</div>
          <div className={Styles.fmain_e}>
            <a
              href="https://www.facebook.com/groups/186753138074295"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          <div className={Styles.fmain_e}>
            <a
              href="https://www.youtube.com/channel/UC8tCBXmdKueuFODn_IngQrg"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
      <div className={Styles.report}>
        <Link href="/report" passHref>
          <div
            style={{
              fontWeight: "600",
              marginTop: "0.2rem",
              cursor: "pointer",
            }}
          >
            <img src="./images/rocket.png" alt="report" />
            <span>Report to CSS</span>
          </div>
        </Link>
      </div>

      <div className={Styles.ftnc}>
        <span>Download the official CSS mobile app</span>
        <a
          href="https://play.google.com/store/apps/details?id=com.niki.cssapp"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={Styles.ficon}
            src="https://download.logo.wine/logo/Google_Play/Google_Play-Badge-Logo.wine.png"
            alt="google-play-logo"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
