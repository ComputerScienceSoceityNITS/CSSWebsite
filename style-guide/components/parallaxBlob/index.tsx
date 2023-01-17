import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface parallaxProp {
  offsetYMultiplier: number;
}

const ParallaxBlob = ({ offsetYMultiplier }: parallaxProp) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.scrollY - window.screenY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={styles.blob}
      style={{
        transform: `translateY(${offsetY * offsetYMultiplier}px)`,
      }}
    ></div>
  );
};

export default ParallaxBlob;
