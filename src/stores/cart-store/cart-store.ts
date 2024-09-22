import create from "zustand";
import { ICartStore } from "./types";
import { CartProduct } from "../../types";

export const fakeProducts = [
  {
    id: "66d34f02c60c52f51379e158",
    name: "Essence",
    price: 34.9,
    quantity: 2,
  },
  {
    id: "66d34c07c60c52f51379e154",
    name: "Blossom",
    price: 29.9,
    quantity: 1,
  },
  {
    id: "66d34a96c60c52f51379e153",
    name: "Aura",
    price: 27.5,
    quantity: 3,
  },
] as CartProduct[];

export const useCartStore = create<ICartStore>((set) => ({
  cartProducts: JSON.parse(localStorage.getItem("cartProducts") ?? "[]").length
    ? JSON.parse(localStorage.getItem("cartProducts") ?? "[]")
    : [...fakeProducts],
  totalPrice: (
    (JSON.parse(
      localStorage.getItem("cartProducts") ?? "[]"
    ) as CartProduct[]) ?? fakeProducts
  ).reduce((acc, product) => acc + product.price * product.quantity, 0),
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
