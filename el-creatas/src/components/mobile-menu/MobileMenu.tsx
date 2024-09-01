import { MobileMenuIcon } from "../../assets/icons/MobileMenuIcon";
import { Sheet, SheetTrigger } from "../shadcn/components/ui/sheet";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span>
          <MobileMenuIcon />
        </span>
      </SheetTrigger>
      <MobileMenuDrawer />
    </Sheet>
  );
};
