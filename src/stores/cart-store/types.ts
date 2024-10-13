import { Dispatch, SetStateAction } from "react";
import { CartProduct } from "../../types";

export interface ICartStore {
  cartProducts: CartProduct[];
  totalPrice: number;
  setCartProducts: (cartProducts: CartProduct[]) => void;
  clearCart: () => void;
  isSnackbarOpen: boolean;
  setIsSnackbarOpen: (isSnackbarOpen: boolean) => void;
}
