import { CartProduct } from "../../types";

export interface ICartStore {
  cartProducts: CartProduct[];
  totalPrice: number;
  setCartProducts: (cartProducts: CartProduct[]) => void;
  clearCart: () => void;
}
