import React, { useRef } from "react";
import Styles from "./memberspage.module.css";

export default function Rainman() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      ref={ref}
      src="https://assets8.lottiefiles.com/datafiles/6WfDdm3ooQTEs1L/data.json"
      background="transparent"
      speed="1"
      id={Styles.lottie}
      loop
      autoplay
    ></lottie-player>
  );
}
