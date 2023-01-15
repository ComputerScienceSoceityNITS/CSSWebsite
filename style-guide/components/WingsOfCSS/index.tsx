import React from "react";
import Style from "../../page-component/WingsOfCSS/wings.module.css";
interface Wing {
  wingName: string;
  description: string;
  tooltipName: string;
  link: string | undefined;
}
const WingCard = ({ wingName, description, tooltipName, link }: Wing) => {
  return (
    <div className={Style.wing_card}>
      <h2 className={Style.h2}>{wingName}</h2>
      <p>{description}</p>
      <span className={Style.span}>{tooltipName}</span>
      <a
        href={link ? link : ""}
        className={Style.link}
        target="_blank"
        rel="noreferrer"
      >
        {link ? "Learn More" : ""}
      </a>
    </div>
  );
};

export default WingCard;
