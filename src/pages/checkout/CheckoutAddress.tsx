import { CheckoutAddressForm } from "../../components/checkout-stepper/CheckoutAddressForm";
import { CheckoutStepper } from "../../components/checkout-stepper/CheckoutStepper";

export const CheckoutAddress = () => {
  return (
    <div>
      <CheckoutStepper />
      <CheckoutAddressForm />
    </div>
  );
};