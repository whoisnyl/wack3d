import Layout from "../components/shared/layout";

import Header from "../components/elements/header";
import Footer from "../components/elements/footer";

import TopContent from "../components/sections/topContent";
import CustomGamingOverlay from "../components/sections/customGamingOverlay";
import CustomGamingLogos from "../components/sections/customGamingLogos";
import CustomGamingWebsite from "../components/sections/customGamingWebsite";
import Reviews from "../components/sections/reviews";

export default function Home() {
  return (
    <Layout>
      <Header />
      <main>
        <TopContent />
        <CustomGamingOverlay />
        <CustomGamingLogos />
        <CustomGamingWebsite />
        <Reviews />
      </main>
      <Footer />
    </Layout>
  );
}
