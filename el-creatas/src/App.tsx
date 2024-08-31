import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavHeader } from "./components/nav-header/NavHeader";
import { Home } from "./pages/home/Home";

const App: React.FC = () => {
  return (
    <Router>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<>Produtos</>} />
        <Route path="/sobre" element={<>Sobre</>} />
        <Route path="/contato" element={<>Contato</>} />
      </Routes>
    </Router>
  );
};

export default App;
