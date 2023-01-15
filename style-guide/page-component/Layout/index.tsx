import React, { useState, useEffect } from "react";
import Curosr from "../../components/cursor";
import Footer from "../../components/footer";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";
import GoTop from "../../components/go-top";
import ToggleTheme from "../../components/toggle-theme";
import Head from "next/head";
import ReportButton from "../../components/report/ReportButton";

interface LayoutProps {
  children: any;
}


const Layout = ({ children }: LayoutProps) => {
  const [Report, setReport] = useState(false)
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
          <ReportButton Report={Report} setReport={setReport}/>
          <Navbar />
          {children}
          <Footer Report={Report} setReport={setReport}/>
        </>
      )}
    </>
  );
};

export default Layout;
