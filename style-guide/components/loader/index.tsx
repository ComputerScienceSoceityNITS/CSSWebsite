import React from "react";
import LoaderLottie from "../lottie-player/loader";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      {" "}
      <LoaderLottie />
    </div>
  );
};

export default Loader;
