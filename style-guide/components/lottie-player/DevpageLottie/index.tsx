import React from "react";
import Lottie from "react-lottie";
import animationData from "./devpg.json";

export default function DevPgLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        style={{ height: "85%", width: "85%" }}
      />
    </div>
  );
}
