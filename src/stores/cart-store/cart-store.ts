import create from "zustand";
import { ICartStore } from "./types";
import { CartProduct } from "../../types";
import { decrypt, encrypt } from "../../utils/crypto";

export const useCartStore = create<ICartStore>((set) => {
  const encryptedCartProducts = localStorage.getItem("cartProducts");
  return {
    cartProducts: encryptedCartProducts ? decrypt(encryptedCartProducts) : [],
    totalPrice:
      (encryptedCartProducts
        ? (decrypt(encryptedCartProducts) as CartProduct[])
        : []
      ).reduce((acc, product) => acc + product.price * product.quantity, 0) ??
      0,
    setCartProducts: (cartProducts) => {
      localStorage.setItem(
        "cartProducts",
        cartProducts ? encrypt(cartProducts) : ""
      );

      return set({
        cartProducts,
        totalPrice: cartProducts.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        ),
      });
    },
    clearCart: () => {
      localStorage.removeItem("cartProducts");

      return set({ cartProducts: [] });
    },
    isSnackbarOpen: false,
    setIsSnackbarOpen: (value) => {
      set({ isSnackbarOpen: value });
    },
  };
});
