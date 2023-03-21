import React, { useState } from "react";
import axios from "axios";
import styles from "./signin.module.css";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit=() => {
    console.log({email,password});
  }
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.registerCard}>
          <div
            className={styles.registerForm}
          >
            {/* input - 1 */}
            <div className={styles.group}>
                  <input
                    required
                    type="email"
                    className={styles.input}
                    placeholder="Email"
                    onChange={(e:any)=>setEmail(e.target.value)}
                  />
                  <span className={styles.highlight}></span>
                  <span className={styles.bar}></span>
                  <label className={styles.label}>Email</label>
                </div>
            {/* input - 2 */}
            <div className={styles.group}>
                  <input
                    required
                    type="email"
                    className={styles.input}
                    placeholder="Password"
                    onChange={(e:any)=>setPassword(e.target.value)}
                  />
                  <span className={styles.highlight}></span>
                  <span className={styles.bar}></span>
                  <label className={styles.label}>Password</label>
                </div>
            <div className={styles.btnWrapper}>
              <button className={styles.btn} onClick={handleSubmit}>submit</button>
            </div>
          </div>
          <div className={styles.switchLine}>
            <p>Not Registered ?</p>
            <a href="/signup">Create an Account</a>
          </div>
          <div className={styles.eventNameSection}>
            <h1
              className={styles.eventName}
            >SignIn</h1>
          </div>
        </div>
      </div>
      {/* <div>{data.name}</div> */}
    </>
  )
}

export default SignIn