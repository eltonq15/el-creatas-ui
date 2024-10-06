import create from "zustand";
import { ICartStore } from "./types";
import { CartProduct } from "../../types";

export const useCartStore = create<ICartStore>((set) => ({
  cartProducts: JSON.parse(localStorage.getItem("cartProducts") ?? "[]"),
  totalPrice:
    (
      (JSON.parse(
        localStorage.getItem("cartProducts") ?? "[]"
      ) as CartProduct[]) ?? []
    ).reduce((acc, product) => acc + product.price * product.quantity, 0) ?? 0,
  setCartProducts: (cartProducts) => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    return set({
      cartProducts,
      totalPrice: cartProducts.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      ),
    });
  },

  clearCart: () => {
    localStorage.setItem("cartProducts", JSON.stringify([]));

    return set({ cartProducts: [] });
  },
}));
