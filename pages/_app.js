import React, { useState } from "react";
import NextNprogress from "nextjs-progressbar";

import { LayoutContext } from "../components/shared/context";

import "../sass/styles.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState("");

  const value = {
    loading,
    setLoading,
    error,
    setError,
    response,
    setResponse,
  };

  return (
    <LayoutContext.Provider value={value}>
      <NextNprogress
        color="red"
        startPosition="0.3"
        stopDelayMs="200"
        height="3"
      />
      <Component {...pageProps} />
    </LayoutContext.Provider>
  );
}

export default MyApp;
