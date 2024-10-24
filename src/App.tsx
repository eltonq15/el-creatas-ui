import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavHeader } from "./components/nav-header/NavHeader";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import { Contact } from "./pages/contact/Contact";
import { Checkout } from "./pages/checkout/Checkout";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import "@fontsource/inter";
import { Footer } from "./components/footer/Footer";
import { AddToCartSnackbar } from "./components/add-to-cart-snackbar/AddToCartSnackbar";
import { useCartStore } from "./stores/cart-store/cart-store";
import { SignInPage } from "./pages/sign-in/SignIn";
import { SignUpPage } from "./pages/sign-up/SignUp";

const App: React.FC = () => {
  const { isSnackbarOpen, setIsSnackbarOpen } = useCartStore();
  return (
    <Router>
      <NavHeader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        {/* <Route path="/sobre" element={<About />} /> */}
        <Route path="/contacto" element={<Contact />} />
        <Route path="/checkout/*" element={<Checkout />} />
      </Routes>
      <Footer />
      <AddToCartSnackbar open={isSnackbarOpen} setOpen={setIsSnackbarOpen} />
    </Router>
  );
};

export default App;
