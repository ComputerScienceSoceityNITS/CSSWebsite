import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const AbacusSectionBtns = ({ data, endDateDifference }: any) => {
  const [registered, setRegistered] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const whatsappLinkOnClick = async () => {
    await navigator.clipboard.writeText(data.groupLink);
    alert(
      `Whatsapp group link has been copied to your clipboard: \n ${data.groupLink}`
    );
  };

  useEffect(() => {
    const participants = data.participants || [];
    const currUserScholarID = localStorage.getItem("CSS_ScholarID");
    if (!currUserScholarID) return;
    setSignedIn(true);
    if (participants.indexOf(currUserScholarID) !== -1) {
      setRegistered(true);
    }
  }, []);

  /*
    if event has ended
      return null
    if user not signed in
      show `sign in to register`
    else
      if user has registered for the event
        show `teams` & `whatsapp group link` buttons
      else
        show `register` button
  */

  let btnContent = null;
  if (endDateDifference !== "error") {
    if (!signedIn)
      btnContent = (
        <a
          href={`/signin?currentPage=/abacus/${data.name}`}
          className={styles.btn}
        >
          Sign in to register
        </a>
      );
    else {
      if (!registered)
        btnContent = (
          <a href={`/abacus/register/${data.name}`} className={styles.btn}>
            Register
          </a>
        );
      else
        btnContent = (
          <>
            <a href={`/abacus/teams/${data.name}`} className={styles.btn}>
              Teams
            </a>
            <div onClick={whatsappLinkOnClick} className={styles.btn}>
              Whatsapp Group Link
            </div>
          </>
        );
    }
  }

  return btnContent;
};

export default AbacusSectionBtns;
