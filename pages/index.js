import React, { useContext, useState, useEffect } from "react";

import Layout from "../components/shared/layout";
import { LayoutContext } from "../components/shared/context";

import Header from "../components/elements/header";
import Footer from "../components/elements/footer";

import TopContent from "../components/sections/topContent";
import CustomGamingOverlay from "../components/sections/customGamingOverlay";
import CustomGamingLogos from "../components/sections/customGamingLogos";
import CustomGamingWebsite from "../components/sections/customGamingWebsite";
import Reviews from "../components/sections/reviews";

import Loading from "../components/utils/loading";
import Response from "../components/modals/response";

export default function Home() {
  const { loading, modal, response } = useContext(LayoutContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, [visible]);

  return (
    <Layout>
      <Header />
      <main>
        <TopContent />
        <CustomGamingOverlay />
        <CustomGamingLogos />
        <CustomGamingWebsite />
        {visible && <Reviews />}
      </main>
      <Footer />
      <Response
        classNames={modal != "" ? "show" : "hide"}
        status={response == "true" ? "success" : "error"}
        message={response == "true" ? "Subscription success!" : response}
      />
      <Loading status={loading} overlay={true} />
    </Layout>
  );
}
