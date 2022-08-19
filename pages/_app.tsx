import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../style-guide/page-component/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Progress } from "../style-guide/components/Progress";
import { useProgressStore } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.beforePopState((state) => {
      state.options.scroll = false;
      return true;
    });

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router, setIsAnimating]);
  return (
    <>
      <Progress isAnimating={isAnimating} />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
