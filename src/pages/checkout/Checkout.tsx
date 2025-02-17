import { Navigate, Route, Routes } from "react-router-dom";

import { CheckoutPersonalData } from "./CheckoutPersonalData";
import { CheckoutAddress } from "./CheckoutAddress";
import { SuccessfulOrder } from "./SuccessfulOrder";
import { CheckoutPaymentForm } from "../../components/checkout-stepper/CheckoutPaymentForm";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useCartStore } from "../../stores/cart-store/cart-store";

import "./styles.scss";

export const Checkout = () => {
  const { cartProducts } = useCartStore();

  const hasProducts = cartProducts.length > 0;
  const isSuccessfulOrderPage =
    window.location.pathname === "/checkout/sucesso";

  if (!hasProducts && !isSuccessfulOrderPage) {
    return <Navigate to="/" replace />;
  }

  return (
    <div id="checkout-page-container">
      <SignedIn>
        <Routes>
          <Route path="/dados" element={<CheckoutPersonalData />} />
          <Route path="/endereco" element={<CheckoutAddress />} />
          <Route path="/pagamento" element={<CheckoutPaymentForm />} />
          <Route path="/sucesso" element={<SuccessfulOrder />} />
          <Route path="*" element={<Navigate to="/checkout/dados" replace />} />
        </Routes>
      </SignedIn>
      <SignedOut>
        {<Navigate to="/sign-in" state={{ from: "/checkout" }} replace />}
      </SignedOut>

      {/* <div>
        <Outlet />
      </div> */}
    </div>
  );
};
