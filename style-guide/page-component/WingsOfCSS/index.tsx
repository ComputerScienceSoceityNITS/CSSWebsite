import Styles from "./wings.module.css";
import WingCard from "../../components/WingsOfCSS";
import data from "../../../_json/wings/wings.json";
import React, { useState, useEffect } from "react";

const WingsOfCSS = () => {
  const [scrollDiv, setScrollDiv] = useState(1);
  const [tooltipData, setTooltipData] = useState("use me");
  const page: HTMLElement | null = document.querySelector(
    ".wings_wings_page__VNLh_"
  );
  const tooltip: HTMLElement | null = document.querySelector(
    ".wings_tooltip__7E7lR"
  );

  const handleChange = (e: Event | any) => {
    const scrollVal = e.target.value;
    if (page !== null) {
      page.scrollTop = scrollVal * 80;
    }
    if (tooltip !== null) {
      tooltip.style.left = `${scrollVal / 2.8}rem`;
      setTooltipData(data.data[Math.round(scrollVal / 10)].tooltipName);
    }
  };
  useEffect(() => {
    const output: HTMLElement | null = document.querySelector(
      ".wings_wings_page__VNLh_"
    );
    if (output !== null) {
      output.addEventListener("scroll", () => {
        setScrollDiv(output.scrollTop / 80);
        const tooltip: HTMLElement | any = document.querySelector(
          ".wings_tooltip__7E7lR"
        );
        setTooltipData(
          data.data[Math.round(output.scrollTop / 800)].tooltipName
        );
        tooltip.style.left = `${output.scrollTop / 220}rem`;
      });
    }
  });

  return (
    <div className={Styles.wings_page}>
      <div className={Styles.wing_header}>
        <h1 className={Styles.h1}>Wings of CSS</h1>
      </div>
      {data.data.map((element) => {
        return (
          <WingCard
            key={element.wingName}
            wingName={element.wingName}
            description={element.description}
            tooltipName={element.tooltipName}
            link={element.link}
          />
        );
      })}
      <div className={Styles.wings_scrollBar}>
        <input
          type="range"
          name="scroll"
          id="scroll"
          className={Styles.scroll}
          min="0"
          max="60"
          step="10"
          value={scrollDiv}
          onChange={handleChange}
        />
        <p className={Styles.tooltip}>{tooltipData}</p>
      </div>
    </div>
  );
};

export default WingsOfCSS;
