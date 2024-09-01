import { Link } from "react-router-dom";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
} from "../shadcn/components/ui/sheet";
import { Button } from "../shadcn/components/ui/button";

export const MobileMenuDrawer = () => {
  return (
    <SheetContent side="left">
      <SheetFooter>
        <SheetClose asChild>
          <Link to="/contato">CONTATO</Link>
        </SheetClose>
        <SheetClose asChild>
          <Link to="/sobre">SOBRE</Link>
        </SheetClose>
        <SheetClose asChild>
          <Link to="/produtos">PRODUTOS</Link>
        </SheetClose>
        <SheetClose asChild>
          <Link to="/home">HOME</Link>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};
