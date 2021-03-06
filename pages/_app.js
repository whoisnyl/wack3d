import React, { useState } from "react";

import { LayoutContext } from "../components/shared/context";

import "../sass/styles.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState("");
  const [modal, setModal] = useState(false);

  const value = {
    loading,
    setLoading,
    error,
    setError,
    response,
    setResponse,
    modal,
    setModal,
  };

  return (
    <LayoutContext.Provider value={value}>
      <Component {...pageProps} />
    </LayoutContext.Provider>
  );
}

export default MyApp;
