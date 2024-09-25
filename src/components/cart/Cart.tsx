import { CartIcon } from "../../assets/icons/CartIcon";
import { useCartStore } from "../../stores/cart-store/cart-store";
import { Sheet, SheetTrigger } from "../shadcn/components/ui/sheet";
import { CartDrawer } from "./CartDrawer";

import "./styles.scss";

export const Cart = () => {
  const { cartProducts } = useCartStore();

  return (
    <Sheet>
      <SheetTrigger asChild id="cart-icon">
        <span>
          <CartIcon />
          <small className="cart-items-count">{cartProducts.length}</small>
        </span>
      </SheetTrigger>
      <CartDrawer />
    </Sheet>
  );
};
