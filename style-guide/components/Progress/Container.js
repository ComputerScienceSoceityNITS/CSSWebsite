import Styles from "./styles.module.css";

export const Container = ({ animationDuration, children, isFinished }) => {
  return (
    <div
      className={Styles.Container}
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  );
};
