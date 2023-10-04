import { useState, useEffect, CSSProperties } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Header from "./components/Header/Header";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import Homepage from "./pages/Homepage/Homepage";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import FAQPage from "./pages/FAQPage/FAQPage";
import SecurityTesting from "./pages/SecurityTesting/SecurityTesting";
import BlockchainSecurity from "./pages/BlockchainSecurity/BlockchainSecurity";
import BlockchainForensics from "./pages/BlockchainForensics/BlockchainForensics";
import VirtualCiso from "./pages/VirtualCiso/VirtualCiso";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import ProgramDevelopment from "./pages/ProgramDevelopment/ProgramDevelopment";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bespoke Cyber | Cybersecurity and Blockchain Solutions for a Safer
          Future
        </title>
        <link rel="canonical" href="http://bespokecyber.io" />
        <meta
          name="description"
          content="Cybersecurity and Blockchain Solutions for a Safer future"
        />
      </Helmet>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // Make the container cover the entire viewport height
          }}
        >
          <ClimbingBoxLoader
            color={"#05ccef"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/coming-soon" element={<UnderConstruction />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/faq" element={<FAQPage />} />

            <Route
              path="/services/security-testing"
              element={<SecurityTesting />}
            />
            <Route
              path="/services/blockchain-security"
              element={<BlockchainSecurity />}
            />
            <Route
              path="/services/blockchain-forensics"
              element={<BlockchainForensics />}
            />
            <Route path="/services/virtual-ciso" element={<VirtualCiso />} />
            <Route
              path="/services/advisory%26program-development"
              element={<ProgramDevelopment />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}
