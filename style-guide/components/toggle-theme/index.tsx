import Styles from "./toggle-theme.module.css";
import Sun from "./sun";
import Moon from "./moon";
import React, { useEffect } from "react";

const ToggleTheme = ({ children }: any) => {
  const { setColorScheme } = children;
  useEffect(() => {
    const mode: string | null = localStorage.getItem("theme");
    setColorScheme(mode === "dark" ? true : false);
  }, []);

  return (
    <>
      <div className={`${Styles.toggleBtnContainer}`}>
        <label>
          <input
            type="checkbox"
            className={`${Styles.checkbox}`}
            onClick={() => {
              setColorScheme((colorScheme: Boolean) => {
                localStorage.setItem("theme", colorScheme ? "light" : "dark");
                return !colorScheme;
              });
            }}
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
