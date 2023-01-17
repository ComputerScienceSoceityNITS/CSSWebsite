import React from "react";
import Styles from "./error404.module.css";

const Error = () => {
  return (
    <div className={Styles.error_page}>
      <h1 className={Styles.error_h1}>404</h1>
      <h2 className={Styles.error_h2}>Page Not Found</h2>
    </div>
  );
};

export default Error;
