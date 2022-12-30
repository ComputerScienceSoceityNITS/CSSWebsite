import Styles from "./toggle-theme.module.css";
import Sun from "./sun";
import Moon from "./moon";

const ToggleTheme = ({ children }: any) => {
  const { setColorScheme } = children;
  return (
    <>
      <div className={`${Styles.toggleBtnContainer}`}>
        <label>
          <input
            type="checkbox"
            className={`${Styles.checkbox}`}
            onClick={() =>
              setColorScheme((colorScheme: Boolean) => {
                return !colorScheme;
              })
            }
          />
          <div className={`${Styles.toggleIcon}`}>
            <div className={`${Styles.sun}`}>
              <Sun />
            </div>
            <div className={`${Styles.moon}`}>
              <Moon />
            </div>
          </div>
        </label>
      </div>
    </>
  );
};

export default ToggleTheme;
