import { NavLink } from "react-router-dom";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
} from "../shadcn/components/ui/sheet";
import { Stack } from "@mui/joy";

import "./styles.scss";

export const MobileMenuDrawer = () => {
  return (
    <SheetContent id="mobile-menu-drawer" side="left">
      <SheetFooter>
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
            <NavLink to="/contacto">CONTACTO</NavLink>
          </SheetClose>
          <hr />
        </Stack>
      </SheetFooter>
    </SheetContent>
  );
};
