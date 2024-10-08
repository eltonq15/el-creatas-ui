import { CheckoutStepper } from "../../components/checkout-stepper/CheckoutStepper";
import { CheckoutPersonalDataForm } from "../../components/checkout-stepper/CheckoutPersonalDataForm";

export const CheckoutPersonalData = () => {
  return (
    <div>
      <CheckoutStepper activeStep={0} />
      <CheckoutPersonalDataForm />
    </div>
  );
};
