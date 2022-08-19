import React from "react";
import Styles from "./styles.module.css";
import Link from "next/link";

const AdminAccess = () => {
  return (
    <div>
      <div className={Styles.head}>
        <h1>Admin Login</h1>
      </div>
      <div className={Styles.main}>
        <Link href="/admin/event" passHref>
          <button>Events</button>
        </Link>
        <Link href="/admin/member" passHref>
          <button>Members</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminAccess;
