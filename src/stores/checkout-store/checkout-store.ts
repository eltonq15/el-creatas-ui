import create from "zustand";
import { ICheckoutStore } from "./types";
import { CheckoutData } from "../../types";
import { decrypt, encrypt } from "../../utils/crypto";

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

export const useCheckoutStore = create<ICheckoutStore>((set) => {
  const encryptedCheckoutData = localStorage.getItem("checkoutData");
  return {
    checkoutData: {
      ...DEFAULT_CHECKOUT_DATA,
      ...(encryptedCheckoutData ? decrypt(encryptedCheckoutData) : {}),
    },
    setCheckoutData: (data: Partial<CheckoutData>) =>
      set((state) => {
        const checkoutData = {
          ...state.checkoutData,
          ...data,
          country: "PT",
        };
        localStorage.setItem(
          "checkoutData",
          checkoutData ? encrypt(checkoutData) : ""
        );

        return {
          checkoutData,
        };
      }),
    clearCheckoutData: () => {
      set({ checkoutData: DEFAULT_CHECKOUT_DATA });
      localStorage.removeItem("checkoutData");
    },
  };
});
