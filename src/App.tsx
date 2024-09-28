import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavHeader } from "./components/nav-header/NavHeader";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import { Checkout } from "./pages/checkout/Checkout";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import "@fontsource/inter";

const App: React.FC = () => {
  const handleDownload = () => {
    setTimeout(() => {
      const fileUrl =
        "/.well-known/apple-developer-merchantid-domain-association"; // Caminho para o seu arquivo
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute(
        "download",
        "apple-developer-merchantid-domain-association"
      );
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <Router>
      <NavHeader />
      <ScrollToTop />
      <Routes>
        <Route
          path="/.well-known/abc"
          element={
            <div>
              {/* @ts-ignore */}
              <button onClick={handleDownload()}>Baixar Arquivo Apple</button>
            </div>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/sobre" element={<>Sobre</>} />
        <Route path="/contato" element={<>Contato</>} />
        <Route path="/checkout/*" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
