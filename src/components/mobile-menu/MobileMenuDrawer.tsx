import { Link } from "react-router-dom";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
} from "../shadcn/components/ui/sheet";

import "./styles.scss";

export const MobileMenuDrawer = () => {
  return (
    <SheetContent id="mobile-menu-drawer" side="left">
      <SheetFooter>
        <SheetClose asChild>
          <Link to="/contato">CONTATO</Link>
        </SheetClose>
        <hr />
        <SheetClose asChild>
          <Link to="/sobre">SOBRE</Link>
        </SheetClose>
        <hr />
        <SheetClose asChild>
          <Link to="/produtos">PRODUTOS</Link>
        </SheetClose>
        <hr />
        <SheetClose asChild>
          <Link to="/home">HOME</Link>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};
