import { Logo } from "../logo/Logo";
import { Cart } from "../cart/Cart";
import { MobileMenu } from "../mobile-menu/MobileMenu";
import { SearchIcon } from "../../assets/SearchIcon";
import { useEffect, useRef } from "react";

import "./styles.scss";

export const NavHeader = () => {
  const navHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navHeaderRef.current) {
        if (window.scrollY > 0) {
          navHeaderRef.current.classList.add("scrolled");
        } else {
          navHeaderRef.current.classList.remove("scrolled");
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav-header" role="navigation" ref={navHeaderRef}>
      <MobileMenu />
      <Logo />
      {/* {!isMobile && (
        <ul className="nav-links">
          <NavLink to="produtos">Produtos</NavLink>
          <NavLink to="sobre">Sobre</NavLink>
          <NavLink to="contato">Contato</NavLink>
        </ul>
      )} */}
      <span
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "row",
          position: "absolute",
          right: "48px",
        }}
      >
        <SearchIcon />
        <Cart />
      </span>
    </nav>
  );
};
