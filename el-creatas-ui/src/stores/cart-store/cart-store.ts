import create from "zustand";
import { ICartStore } from "./types";
import { CartProduct } from "../../types";

export const fakeProducts = [
  {
    id: 1,
    name: "Essence",
    price: 34.9,
    quantity: 2,
  },
  {
    id: 2,
    name: "Blossom",
    price: 29.9,
    quantity: 1,
  },
  {
    id: 3,
    name: "Aura",
    price: 27.5,
    quantity: 3,
  },
] as CartProduct[];

export const useCartStore = create<ICartStore>((set) => ({
  cartProducts: [...fakeProducts],
  totalPrice: fakeProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  ),
  setCartProducts: (cartProducts) =>
    set({
      cartProducts,
      totalPrice: cartProducts.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      ),
    }),
  clearCart: () => set({ cartProducts: [] }),
}));
