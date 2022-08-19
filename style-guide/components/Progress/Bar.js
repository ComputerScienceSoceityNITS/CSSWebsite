import Styles from "./styles.module.css";

export const Bar = ({ animationDuration, progress }) => {
  return (
    <div
      className={Styles.Bar}
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    ></div>
  );
};
