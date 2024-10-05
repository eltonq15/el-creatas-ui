import create from "zustand";
import { ICheckoutStore } from "./types";
import { CheckoutData } from "../../types";

const DEFAULT_CHECKOUT_DATA: CheckoutData = {
  fullName: "",
  email: "",
  phoneCountry: "Portugal",
  phone: "",
  shippingAddress: "",
  city: "",
  district: "",
  zipCode: "",
  country: "",
  shippingMethod: "CTT",
};

export const useCheckoutStore = create<ICheckoutStore>((set) => ({
  checkoutData: {
    ...DEFAULT_CHECKOUT_DATA,
    ...JSON.parse(localStorage.getItem("checkoutData") ?? "{}"),
  },
  setCheckoutData: (data: Partial<CheckoutData>) =>
    set((state) => {
      const checkoutData = {
        ...state.checkoutData,
        ...data,
        country: "PT",
      };
      localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

      return {
        checkoutData,
      };
    }),
  clearCheckoutData: () => {
    set({ checkoutData: DEFAULT_CHECKOUT_DATA });
    localStorage.removeItem("checkoutData");
  },
}));
