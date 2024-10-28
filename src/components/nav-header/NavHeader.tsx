import { useEffect, useRef } from "react";
import { Logo } from "../logo/Logo";
import { Cart } from "../cart/Cart";
import { MobileMenu } from "../mobile-menu/MobileMenu";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import { SolidButton } from "../button/SolidButton";
import { Link } from "react-router-dom";
import { Box } from "@mui/joy";
import { OutlinedButton } from "../button/OutlinedButton";
import { useIsMobile } from "../../hooks/use-is-mobile";

import "./styles.scss";

export const NavHeader = () => {
  const navHeaderRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  setInterval(() => {
    const paragraphs = document.querySelectorAll("p");

    paragraphs.forEach((paragraph) => {
      if (paragraph.innerText === "Development mode") {
        paragraph.remove();
      }
    });
  }, 200);

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
          position: "relative",
        }}
      >
        <SignedIn>
          <Box
            sx={{
              position: "absolute",
              right: 40,
              fontSize: isMobile ? 10 : 14,
            }}
          >
            <UserButton />
          </Box>
        </SignedIn>
        <Cart />
      </span>
    </nav>
  );
};
