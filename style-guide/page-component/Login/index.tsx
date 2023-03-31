import axios from "axios";
import React, { useState } from "react";
import Styles from "./styles.module.css";

const Login = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const loginDataChange = async (e: any) => {
    try {
      setdata({ ...data, [e.target.name]: e.target.value });
    } catch (error) {
      console.log(error);
    }
  };
  const submit = async (e: any) => {
    e.preventDefault();
    try {
      const myForm = new FormData();
      myForm.set("email", data.email);
      myForm.set("password", data.password);
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const {} = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/login`,
        myForm,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className={Styles.head}>
        <h1>Admin Login</h1>
      </div>
      <div className={Styles.main}>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={loginDataChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={loginDataChange}
          />
          <input type="submit" onClick={submit} />
        </form>
      </div>
    </div>
  );
};

export default Login;
