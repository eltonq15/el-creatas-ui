import { useEffect, useRef } from "react";
import { Logo } from "../logo/Logo";
import { Cart } from "../cart/Cart";
import { MobileMenu } from "../mobile-menu/MobileMenu";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import { SolidButton } from "../button/SolidButton";
import { Link } from "react-router-dom";
import { OutlinedButton } from "../button/OutlinedButton";

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
      <span
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "row",
          position: "absolute",
          right: "48px",
        }}
      >
        <SignedOut>
          <SolidButton>
            <Link to="/sign-in">Iniciar Sessão</Link>
          </SolidButton>
          <OutlinedButton>
            <Link to="/sign-up">Registar</Link>
          </OutlinedButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Cart />
      </span>
    </nav>
  );
};
