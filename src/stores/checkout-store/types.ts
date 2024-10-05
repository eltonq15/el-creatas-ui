import { CheckoutData } from "../../types";

export interface ICheckoutStore {
  checkoutData: CheckoutData;
  setCheckoutData: (data: Partial<CheckoutData>) => void;
  clearCheckoutData: () => void;
}
