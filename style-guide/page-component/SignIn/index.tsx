import React, { useState } from "react";
import axios from "axios";
import styles from "./signin.module.css";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const res: any = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/user/login`,
        { email, password },
        { withCredentials: true }
      );
      console.log({ res });
      if (res.data.status === "success") {
        localStorage.setItem("signed", "true");
        localStorage.setItem("CSS_ScholarID", res.data.user.scholarID);
        window.location.pathname = window.location.search.split("=")[1];
        // window.location.search='';
      }
    } catch (err: any) {
      alert(err.message);
      console.log(err);
    }
  };
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.registerCard}>
          <div className={styles.registerForm}>
            {/* input - 1 */}
            <div className={styles.group}>
              <input
                required
                type="email"
                className={styles.input}
                placeholder="Email"
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label className={styles.label}>Email</label>
            </div>
            {/* input - 2 */}
            <div className={styles.group}>
              <input
                required
                type="password"
                className={styles.input}
                placeholder="Password"
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label className={styles.label}>Password</label>
            </div>
            <div className={styles.btnWrapper}>
              <button className={styles.btn} onClick={handleSubmit}>
                submit
              </button>
            </div>
          </div>
          <div className={styles.switchLine}>
            <p>Not Registered ?</p>
            <a href={`/signup/${window.location.search}`}>Create an Account</a>
          </div>
          <div className={styles.eventNameSection}>
            <h1 className={styles.eventName}>SignIn</h1>
          </div>
        </div>
      </div>
      {/* <div>{data.name}</div> */}
    </>
  );
};

export default SignIn;
