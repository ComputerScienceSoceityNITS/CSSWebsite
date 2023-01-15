import React, { useState } from "react";
import Styles from "./styles.module.css";
import Report from "../lottie-player/report";
import Sent from "../lottie-player/sent";
import emailjs from "emailjs-com";
import ReactTyped from "react-typed";

const BugReport = (props) => {
  const [status, setStatus] = useState(false);
  const { setReport } = props;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setStatus(true);
  };

  return (
    <>
      <div className={Styles.backDrop}></div>
      {/* <div className={Styles.reportEnclosure} id='repEnc' style={document.getElementById('repEnc').offsetHeight()<=window.offsetHeight()?{}:''}> */}
      <div className={Styles.reportEnclosure} id="repEnc">
        <div className={Styles.mainreportdiv} id="reportDiv">
          <img
            src="/images/Close.svg"
            alt=""
            className={Styles.closeBtn}
            onClick={() => {
              setReport(false);
            }}
          />
          <div className={Styles.header}>
            <ReactTyped
              className="typed-text"
              strings={["REPORT TO CSS"]}
              typeSpeed={40}
              backSpeed={40}
              loop
            />
          </div>
          <div className={Styles.report_lottie}>
            <Report />
          </div>

          <div
            className={status ? Styles.container_inactive : Styles.container}
          >
            <div className={Styles.formholder}>
              <form className={Styles.form} onSubmit={sendEmail}>
                <div className={Styles.entry} onClick={() => setStatus(false)}>
                  <input
                    type="text"
                    className={Styles.formControl}
                    placeholder="Name(Optional)"
                    name="name"
                  />
                </div>
                <div className={Styles.entry} onClick={() => setStatus(false)}>
                  <input
                    type="email"
                    className={Styles.formControl}
                    placeholder="Email-Address"
                    name="email"
                    required
                  />
                </div>
                <div className={Styles.entry} onClick={() => setStatus(false)}>
                  <input
                    type="text"
                    className={Styles.formControl}
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>
                <div className={Styles.entry} onClick={() => setStatus(false)}>
                  <textarea
                    className={Styles.formControl}
                    placeholder="Your message"
                    name="message"
                    required
                  />
                </div>
                <div className={Styles.entry} onClick={() => setStatus(false)}>
                  <input
                    type="submit"
                    className={Styles.btn}
                    value="Send Message"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className={status ? Styles.sent : Styles.sent_inactive}>
            <Sent />
            <div className={status ? Styles.success : Styles.successfalse}>
              Thanks for your feedback!
            </div>
          </div>
          <div className={Styles.disclaimer}>
            Diclaimer: Reporting to CSS must be formal. Here, you can register
            ideas and suggestions for the website and everything CSS. Please
            avoid unnecessary messages and spams. Strict actions will be taken
            against those violating these rules.
          </div>
        </div>
      </div>
    </>
  );
};

export default BugReport;
