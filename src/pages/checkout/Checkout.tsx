import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import "./styles.scss";
import { CheckoutPersonalData } from "./CheckoutPersonalData";
import { CheckoutAddress } from "./CheckoutAddress";
import { SuccessfulOrder } from "./SuccessfulOrder";
import { CheckoutPaymentForm } from "../../components/checkout-stepper/CheckoutPaymentForm";

export const Checkout = () => {
  return (
    <div id="checkout-page-container">
      <Routes>
        <Route path="/dados" element={<CheckoutPersonalData />} />
        <Route path="/endereco" element={<CheckoutAddress />} />
        <Route path="/pagamento" element={<CheckoutPaymentForm />} />
        <Route path="/sucesso" element={<SuccessfulOrder />} />
        <Route path="*" element={<Navigate to="/checkout/dados" replace />} />
      </Routes>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
