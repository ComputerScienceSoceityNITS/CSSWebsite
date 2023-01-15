import React, { useEffect, useState } from "react";
import BugReport from "./Report";
import Styles from "./styles.module.css";

const ReportButton = (props) => {
  const { Report, setReport } = props;
  return (
    <div>
      <div
        className={Styles.reportButton}
        onClick={() => {
          Report ? setReport(false) : setReport(true);
        }}
      >
        <img
          className={Styles.reportButton_img}
          src="/images/report.svg"
          alt=""
        />
      </div>
      {Report ? <BugReport Report={Report} setReport={setReport} /> : ""}
    </div>
  );
};

export default ReportButton;
