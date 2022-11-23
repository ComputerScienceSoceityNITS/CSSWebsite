import Styles from "./toggle-theme.module.css";

const ToggleTheme = ({ children }: any) => {
  const { setColorScheme } = children;
  return (
    <>
      <button
        className={`${Styles.toggleBtn}`}
        onClick={() =>
          setColorScheme((colorScheme: Boolean) => {
            return !colorScheme;
          })
        }
      ></button>
    </>
  );
};

export default ToggleTheme;
