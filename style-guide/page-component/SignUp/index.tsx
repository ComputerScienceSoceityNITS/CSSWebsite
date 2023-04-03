import React, { useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import Spinner from "../../components/Spinner";

const SignUp = ({ data, eventType }: any) => {
  const [name, setName] = useState(data != null ? data.name : "");
  const [email, setEmail] = useState(data !== null ? data.email : "");
  const [password, setPassword] = useState("");
  const [scholarID, setScholarID] = useState(
    data !== null ? data.scholarID : ""
  );
  const [codeforcesHandle, setCodeforcesHandle] = useState(
    data !== null ? data.codeforcesHandle : ""
  );
  const [githubHandle, setGithubHandle] = useState(
    data !== null ? data.githubHandle : ""
  );

  const [signed, setSigned] = useState(
    JSON.parse(localStorage.getItem("signed") || "false")
  );
  const [loading, setLoading] = useState(false);

  // submit
  const handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    try {
      const response: any = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/user/signup`,
        {
          name,
          email,
          password,
          scholarID,
          codeforcesHandle,
          githubHandle,
        }
      );
      // console.log(response.data);
      response.response
        ? alert(response.response.data.message)
        : alert(response.message);
      if (response.data.status) {
        window.location.pathname = "/signin";
        // window.location.search=`currentPage=${window.location.search.split('=')[1]}`;
      }
      if(response.response && response.response.status===401){
        localStorage.clear();
        window.location.pathname ="/abacus";
      }
      setLoading(false);
    } catch (error: any) {
      error.response
        ? alert(error.response.data.message)
        : alert(error.message);
      console.log(error);
      setLoading(false);
      // alert(error.message);
    }
  };

  // update
  const handleUpdate = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    try {
      const response: any = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/user/update`, //update it
        {
          name,
          email,
          password,
          scholarID,
          codeforcesHandle,
          githubHandle,
        },
        { withCredentials: true }
      );
      console.log(response.data);
      if (response.data.status) {
        // window.location.pathname = "/signin";
        window.location.pathname = window.location.search.split("=")[1];
        // window.location.search=`currentPage=${window.location.search.split('=')[1]}`;
      }
      // if(response.response.status===401){
      //   localStorage.clear();
      //   window.location.pathname ="/abacus";
      // }
    response.response
        ? alert(response.response.data.message)
        : alert(response.message);
        if(response.response.status===401){
          localStorage.clear();
          window.location.pathname ="/abacus";
        }
        setLoading(false);
    } catch (error: any) {
      error.response
        ? alert(error.response.data.message)
        : alert(error.message);
      console.log(error);
      setLoading(false);
      // alert(error.message);
    }
  };

  // logout
  const handleLogout = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const query = confirm("Do you really want to log out?");
    if (query) {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/user/logout`
        );
        console.log({ res });
        if (res.data.status === "success") {
          setSigned(false);
          localStorage.setItem("signed", "false");
          localStorage.removeItem("CSS_ScholarID");
          window.location.pathname = window.location.search.split("=")[1];
          
        }
        setLoading(false);
      } catch (err: any) {
        console.log({ err });
        alert(err.message);
        setLoading(false);
      }
    }
  };

  return (
    <>
    {loading?<Spinner/>:null}
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
                value={name}
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
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label className={styles.label}>Institute Email</label>
            </div>
            {/* input - 2 */}
            <div className={styles.group}>
              <input
                required
                type="password"
                className={styles.input}
                placeholder="Password"
                value={password}
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
                value={scholarID}
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
                value={codeforcesHandle}
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
                value={githubHandle}
                onChange={(e: any) => setGithubHandle(e.target.value)}
              />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label className={styles.label}>Github Handle</label>
            </div>

            {eventType === "SignUp" && (
              <div className={styles.btnWrapper}>
                <button className={styles.btn} onClick={handleSubmit}>
                  submit
                </button>
              </div>
            )}
            {eventType === "Profile" && (
              <div className={styles.btnWrapper}>
                <button className={styles.btn} onClick={handleUpdate}>
                  update
                </button>
                <button className={styles.btn} onClick={handleLogout}>
                  logout
                </button>
              </div>
            )}
          </div>

          {eventType === "SignUp" && (
            <div className={styles.switchLine}>
              <p>Already Registered ?</p>
              <a href={`/signin/${window.location.search}`}>
                Sign In to your Account
              </a>
            </div>
          )}
          {eventType === "Profile" && (
            <div className={styles.switchLine}>
              <p>Email can't be updated</p>
            </div>
          )}

          <div className={styles.eventNameSection}>
            <h1 className={styles.eventName}>{eventType}</h1>
          </div>
        </div>
      </div>
      {/* <div>{data.name}</div> */}
    </>
  );
};

export default SignUp;
