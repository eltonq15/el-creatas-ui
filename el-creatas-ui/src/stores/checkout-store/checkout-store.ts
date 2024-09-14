import create from "zustand";
import { ICheckoutStore } from "./types";
import { CheckoutData } from "../../types";

export const useCheckoutStore = create<ICheckoutStore>((set) => ({
  currentStep: 0,
  goPrevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  goNextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  checkoutData: JSON.parse(localStorage.getItem("checkoutData") ?? "{}") ?? {
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
  },
  setCheckoutData: (data: Partial<CheckoutData>) =>
    set((state) => {
      const checkoutData = { ...state.checkoutData, ...data };
      localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

      return {
        checkoutData,
      };
    }),
}));
