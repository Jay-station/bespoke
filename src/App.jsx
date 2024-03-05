import Header from "./components/Header/Header";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  return (
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
          path="/services/advisory&program-development"
          element={<ProgramDevelopment />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
