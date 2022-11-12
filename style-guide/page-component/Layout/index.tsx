import React, { useState, useEffect } from "react";
import Curosr from "../../components/cursor";
import Footer from "../../components/footer";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";
import GoTop from "../../components/go-top";
import ToggleTheme from "../../components/toggle-theme";
import Head from "next/head";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  console.log(children);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    loadercall();
  }, []);
  const loadercall = () => {
    setTimeout(function () {
      setLoad(false);
    }, 1500);
  };
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <>
          <Head>
            <title>Computer Science Society</title>
          </Head>
          <GoTop />
          <ToggleTheme>{children[0].props}</ToggleTheme>
          <Curosr />
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
