import { CheckoutData } from "../../types";

export interface ICheckoutStore {
  clientSecret: string;
  setClientSecret: (clientSecret: string) => void;
  clearClientSecret: () => void;
  checkoutData: CheckoutData;
  setCheckoutData: (data: Partial<CheckoutData>) => void;
  clearCheckoutData: () => void;
}
