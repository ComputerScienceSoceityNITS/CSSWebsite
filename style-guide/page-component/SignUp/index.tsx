import React, { useState } from "react";
import axios from "axios";
import styles from "./style.module.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [scholarID, setScholarID] = useState("");
  const [codeforcesHandle, setCodeforcesHandle] = useState("");
  const [githubHandle, setGithubHandle] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response: any = await axios.post(
        `${process.env.BACKEND_URL}/api/admin/user/signup`,
        {
          name,
          email,
          password,
          scholarID,
          codeforcesHandle,
          githubHandle,
        }
      );
      console.log(response.data);
      if (response.data.status) {
        window.location.pathname = "/signin";
        // window.location.search=`currentPage=${window.location.search.split('=')[1]}`;
      }
    } catch (error: any) {
      console.log(error);
      alert(error.message);
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
                type="text"
                className={styles.input}
                placeholder="Name"
                onChange={(e: any) => setName(e.target.value)}
              />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label className={styles.label}>Name</label>
            </div>
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
            <div className={styles.group}>
              <input
                required
                type="number"
                className={styles.input}
                placeholder="Scholar Id"
                onChange={(e: any) => setScholarID(e.target.value)}
              />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label className={styles.label}>Scholar Id</label>
            </div>
            <div className={styles.group}>
              <input
                required
                type="text"
                className={styles.input}
                placeholder="codeforcesHandle"
                onChange={(e: any) => setCodeforcesHandle(e.target.value)}
              />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label className={styles.label}>Codeforces Handle</label>
            </div>
            <div className={styles.group}>
              <input
                required
                type="text"
                className={styles.input}
                placeholder="githubHandle"
                onChange={(e: any) => setGithubHandle(e.target.value)}
              />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label className={styles.label}>Github Handle</label>
            </div>

            <div className={styles.btnWrapper}>
              <button className={styles.btn} onClick={handleSubmit}>
                submit
              </button>
            </div>
          </div>
          <div className={styles.switchLine}>
            <p>Already Registered ?</p>
            <a href={`/signin/${window.location.search}`}>
              Sign In to your Account
            </a>
          </div>
          <div className={styles.eventNameSection}>
            <h1 className={styles.eventName}>SignUp</h1>
          </div>
        </div>
      </div>
      {/* <div>{data.name}</div> */}
    </>
  );
};

export default SignUp;
