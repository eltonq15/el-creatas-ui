import { CheckoutPaymentIntent } from "../../components/checkout-stepper/CheckoutPaymentIntent";
import { CheckoutStepper } from "../../components/checkout-stepper/CheckoutStepper";

export const CheckoutPayment = () => {
  return (
    <div>
      <CheckoutStepper />
      <CheckoutPaymentIntent />
    </div>
  );
};
