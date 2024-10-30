import { NavLink } from "react-router-dom";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "../shadcn/components/ui/sheet";
import { Stack } from "@mui/joy";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { OutlinedButton } from "../button/OutlinedButton";
import { SolidButton } from "../button/SolidButton";

import "./styles.scss";

export const MobileMenuDrawer = () => {
  return (
    <SheetContent id="mobile-menu-drawer" side="left">
      <SheetHeader>
        <Stack sx={{ width: "100%" }}>
          <SheetClose asChild>
            <NavLink to="/home">HOME</NavLink>
          </SheetClose>
          <hr />
          <SheetClose asChild>
            <NavLink to="/produtos">PRODUTOS</NavLink>
          </SheetClose>
          <hr />
          <SheetClose asChild>
            <NavLink to="/sobre">SOBRE</NavLink>
          </SheetClose>
          <hr />
          <SheetClose asChild>
            <NavLink to="/faq">FAQ</NavLink>
          </SheetClose>
          <hr />
          <SheetClose asChild>
            <NavLink to="/contacto">CONTACTO</NavLink>
          </SheetClose>
          <hr />
        </Stack>
      </SheetHeader>
      <SheetFooter>
        <Stack
          sx={{
            width: "80%",
            gap: 2,
            position: "absolute",
            bottom: 64,
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            minHeight: 80,
          }}
        >
          <SignedOut>
            <OutlinedButton
              sx={{
                width: "100%",
                height: 32,
                fontSize: 10,
              }}
            >
              <SheetClose asChild>
                <NavLink style={{ fontSize: 14, width: "100%" }} to="/sign-up">
                  Registar
                </NavLink>
              </SheetClose>
            </OutlinedButton>

            <SolidButton
              sx={{
                width: "100%",
                height: 32,
              }}
            >
              <SheetClose asChild>
                <NavLink style={{ fontSize: 14, width: "100%" }} to="/sign-in">
                  Iniciar Sessão
                </NavLink>
              </SheetClose>
            </SolidButton>
          </SignedOut>
          <SignedIn>
            <SolidButton
              sx={{
                width: "100%",
                height: 32,
              }}
            >
              <SheetClose asChild>
                <SignOutButton>Encerrar sessão</SignOutButton>
              </SheetClose>
            </SolidButton>
          </SignedIn>
        </Stack>
      </SheetFooter>
    </SheetContent>
  );
};
