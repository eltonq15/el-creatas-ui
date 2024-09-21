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
  shippingMethod: "",
};

export const useCheckoutStore = create<ICheckoutStore>((set) => ({
  currentStep: 0,
  goPrevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  goNextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  checkoutData:
    JSON.parse(localStorage.getItem("checkoutData") ?? "{}") ??
    DEFAULT_CHECKOUT_DATA,
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
