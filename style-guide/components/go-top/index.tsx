import React, { useState, useEffect } from "react";
import Styles from "./go-top.module.css";
import TopLottie from "../../components/lottie-player/topLottie";

const GoTop = () => {
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

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`${Styles.goTop} ${showButton ? "" : Styles.inactive}`}
      onClick={() => scrollToTop()}
    >
      <TopLottie />
    </div>
  );
};

export default GoTop;
