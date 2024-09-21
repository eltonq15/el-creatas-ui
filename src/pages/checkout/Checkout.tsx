import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import "./styles.scss";
import { CheckoutPersonalData } from "./CheckoutPersonalData";
import { CheckoutAddress } from "./CheckoutAddress";
import { CheckoutPaymentIntent } from "../../components/checkout-stepper/CheckoutPaymentIntent";
import { SuccessfulOrder } from "./SuccessfulOrder";

export const Checkout = () => {
  return (
    <div id="checkout-page-container">
      <Routes>
        <Route path="/dados" element={<CheckoutPersonalData />} />
        <Route path="/endereco" element={<CheckoutAddress />} />
        <Route path="/pagamento" element={<CheckoutPaymentIntent />} />
        <Route path="/complete" element={<SuccessfulOrder />} />
        <Route path="*" element={<Navigate to="/checkout/dados" replace />} />
      </Routes>

      <Outlet />
    </div>
  );
};
