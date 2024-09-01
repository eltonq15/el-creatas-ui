import { NavLink } from "react-router-dom";
import { Logo } from "../logo/Logo";
import { Cart } from "../cart/Cart";
import { useIsMobile } from "../../hooks/use-is-mobile";
import { MobileMenu } from "../mobile-menu/MobileMenu";

import "./styles.scss";

export const NavHeader = () => {
  const isMobile = useIsMobile();
  return (
    <nav className="nav-header" role="navigation">
      {isMobile && <MobileMenu />}
      <Logo />
      {!isMobile && (
        <ul className="nav-links">
          <NavLink to="produtos">Produtos</NavLink>
          <NavLink to="sobre">Sobre</NavLink>
          <NavLink to="contato">Contato</NavLink>
        </ul>
      )}
      <Cart />
    </nav>
  );
};
