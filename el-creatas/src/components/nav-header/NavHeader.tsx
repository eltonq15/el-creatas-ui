import { NavLink } from "react-router-dom";
import { useCartStore } from "../../stores/cart-store/cart-store";
import { Logo } from "../logo/Logo";

import "./styles.scss";
import { Cart } from "../cart/Cart";

export const NavHeader = () => {
  const { cartProducts } = useCartStore();
  return (
    <nav className="nav-header" role="navigation">
      <Logo />

      <ul>
        <NavLink to="produtos">Produtos</NavLink>
        <NavLink to="sobre">Sobre</NavLink>
        <NavLink to="contato">Contato</NavLink>
      </ul>
      <Cart />
    </nav>
  );
};
