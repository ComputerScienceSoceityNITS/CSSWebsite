import React, { useState } from "react";
import styles from "./styles.module.css";

const AbacusTeamsComponent = ({ data }: any) => {
  console.log({ data });
  const [clicked, setClicked] = useState(0);
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.heroText}>{data.name}</h1>
      <div className={styles.mainTable}>
        {data.teams.map((element: any, index: any) => {
          console.log(element._id);
          return (
            <div
              key={index}
              className={`${styles.row} ${
                element._id === clicked ? styles.expand : null
              }`}
              onClick={
                element._id === clicked
                  ? () => setClicked(0)
                  : () => setClicked(element._id)
              }
            >
              <h3>{element.name}</h3>
              <table>
                <tr className={styles.tr}>
                  <th>Name</th>
                  <th>Scholar Id</th>
                </tr>
                <tr className={styles.teamLeaderRow}>
                  <td>{element.teamLeader.name}</td>
                  <td>{element.teamLeader.scholarID}</td>
                </tr>
                {element.members.length > 0 &&
                  element.members.map((innerEle: any, innerInd: any) => {
                    return (
                      <tr key={innerInd} className={styles.tr}>
                        <td>{innerEle.name}</td>
                        <td>{innerEle.scholarID}</td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AbacusTeamsComponent;
