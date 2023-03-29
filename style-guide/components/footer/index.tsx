import React from "react";
import Link from "next/link";
import Styles from "./footer.module.css";

import Lottie from "../lottie-player/footgroup";
import BugReport from "../report/Report";
// import GooglePlay from "../../../public/images/Homepage/Google_Play.png";

const Footer = (props: { Report: any; setReport: any }) => {
  const { Report, setReport } = props;

  return (
    <div className={Styles.footer}>
      <span className={Styles.footgroup}>
        <Lottie />
      </span>
      {/* copyright section */}
      <div className={Styles.fcopyright}>
        © 2022 Computer Science Society. All Rights Reserved.
      </div>
      <div className={Styles.fmain}>
        <div className={Styles.fmain_c}>
          <div className={Styles.fmain_e}>
            <Link href="/events">
              <a style={{ textDecoration: "none", color: "black" }}>Events</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="/abacus">
              <a style={{ textDecoration: "none" }}>Abacus</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="/enigma">
              <a style={{ textDecoration: "none" }}>Enigma</a>
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
            <Link href="/members/21-22">
              <a style={{ textDecoration: "none" }}>Members</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="/members/21-22">
              <a style={{ textDecoration: "none" }}>Core Members</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="/members/21-22">
              <a style={{ textDecoration: "none" }}>Senior Executives</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="/members/21-22">
              <a style={{ textDecoration: "none" }}>Junior Executives</a>
            </Link>
          </div>
          <div className={Styles.fmain_e}>
            <Link href="/members/21-22">
              <a style={{ textDecoration: "none" }}>Wing Executives</a>
            </Link>
          </div>
          <Link href="/developers/21-22">
            <a className={Styles.fmain_e} style={{ textDecoration: "none" }}>
              Developer Members
            </a>
          </Link>
        </div>
        {/* <div className={`${Styles.fmain_c} ${Styles.remove}`}>
          <div className={Styles.fmain_e}>Contact</div>
          <div className={Styles.fmain_e}>
            CSS, NIT Silchar, Silchar, Assam 788010
          </div>
        </div> */}
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
              href="https://www.linkedin.com/company/cssnits/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className={Styles.fmain_e}>
            <a
              href="https://www.instagram.com/cssnits/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className={Styles.fmain_e}>
            <a
              href="https://github.com/ComputerScienceSoceityNITS"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className={Styles.ftnc}>
        <a
          href="https://play.google.com/store/apps/details?id=com.cssofficial.cssapp"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={Styles.ficon}
            src="https://download.logo.wine/logo/Google_Play/Google_Play-Badge-Logo.wine.png"
            alt="google-play-logo"
          ></img>
        </a>
        <span className={Styles.reporttext}>
          <a
            href="https://www.amazon.com/gp/product/B0BSG25RBZ"
            target="_blank"
            rel="noreferrer"
          >
            Download the official CSS mobile app
          </a>
        </span>
      </div>
      <div className={Styles.contactSection}>
        <div className={Styles.contactSection_data}>
          <img
            className={Styles.contactSectionLogo}
            src="/images/Pin_alt_fill.png"
            alt="report"
          />
          CSS, NIT Silchar, Silchar, Assam 788010
        </div>
        <a
          className={Styles.contactSection_data}
          href="mailto:computersciencesociety@cse.nits.ac.in"
        >
          <img
            className={Styles.contactSectionLogo}
            src="/images/Message.png"
            alt="report"
          />
          computersciencesociety@cse.nits.ac.in
        </a>
        <div className={Styles.contactSection_data}>
          <div
            style={{
              fontWeight: "600",
              marginTop: "0.2rem",
              cursor: "pointer",
            }}
          >
            <img src="/images/rocket.png" alt="report" />
            <span
              className={Styles.reporttext}
              onClick={() => {
                Report ? setReport(false) : setReport(true);
              }}
            >
              Report to CSS
            </span>
            {Report ? <BugReport Report={Report} setReport={setReport} /> : ""}
          </div>
        </div>
      </div>

      {/* <div className={Styles.report}>
        <div
          style={{
            fontWeight: "600",
            marginTop: "0.2rem",
            cursor: "pointer",
          }}
        >
          <img src="/images/rocket.png" alt="report" />
          <span
            className={Styles.reporttext}
            onClick={() => {
              Report ? setReport(false) : setReport(true);
            }}
          >
            Report to CSS
          </span>
          {Report ? <BugReport Report={Report} setReport={setReport} /> : ""}
        </div>
      </div> */}

      {/* <div className={Styles.ftnc}>
        <a
          href="https://play.google.com/store/apps/details?id=com.cssofficial.cssapp"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={Styles.ficon}
            src="https://download.logo.wine/logo/Google_Play/Google_Play-Badge-Logo.wine.png"
            alt="google-play-logo"
          ></img>
        </a>
        <span className={Styles.reporttext}>
          <a
            href="https://www.amazon.com/gp/product/B0BSG25RBZ"
            target="_blank"
            rel="noreferrer"
          >
            Download the official CSS mobile app
          </a>
        </span>
      </div> */}
    </div>
  );
};

export default Footer;
