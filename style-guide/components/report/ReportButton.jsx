import React, { useEffect, useState } from 'react'
import BugReport from './Report'
import Styles from "./styles.module.css";

const ReportButton = (props) => {
  const {Report, setReport} = props
    const [showButton, setShowButton] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <div>
        <div className={Styles.reportButton} style={showButton?{display: 'block'}:{display:'none'}} onClick={()=>{Report?setReport(false):setReport(true)}}>
          <img className={Styles.reportButton_img} src="/images/report.svg" alt="" />
        </div>
      {Report?<BugReport Report={Report} setReport={setReport} />:''}
    </div>
  )
}

export default ReportButton
