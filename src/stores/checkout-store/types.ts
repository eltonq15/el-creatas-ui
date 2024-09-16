import { CheckoutData } from "../../types";

export interface ICheckoutStore {
  currentStep: number;
  goPrevStep: () => void;
  goNextStep: () => void;
  checkoutData: {
    fullName: string;
    email: string;
    phoneCountry: string;
    phone: string;
    shippingAddress: string;
    city: string;
    district: string;
    zipCode: string;
    country: string;
    shippingMethod: string;
  };
  setCheckoutData: (data: Partial<CheckoutData>) => void;
}
