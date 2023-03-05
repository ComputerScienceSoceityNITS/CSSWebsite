import React, { useState } from "react";
import axios from "axios";
import styles from "./style.module.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [scholarId, setScholarId] = useState("");
  const [codeforcesHandle, setCodeforcesHandle] = useState("");
  const [githubHandle, setGithubHandle] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/users", {
        name,
        email,
        password,
        scholarId,
        codeforcesHandle,
        githubHandle,
        role,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.registerCard}>
          <h1>Sign Up</h1>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <label htmlFor="scholarId">Scholar ID</label>
          <input
            type="number"
            id="scholarId"
            name="scholarId"
            value={scholarId}
            onChange={(event) => setScholarId(event.target.value)}
            required
          />
          <label htmlFor="codeforcesHandle">Codeforces Handle</label>
          <input
            type="text"
            id="codeforcesHandle"
            name="codeforcesHandle"
            value={codeforcesHandle}
            onChange={(event) => setCodeforcesHandle(event.target.value)}
          />
          <label htmlFor="githubHandle">GitHub Handle</label>
          <input
            type="text"
            id="githubHandle"
            name="githubHandle"
            value={githubHandle}
            onChange={(event) => setGithubHandle(event.target.value)}
          />
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            required
          />
          <img className={styles.heroLogo} src="/images/logo_compressed.png" />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
