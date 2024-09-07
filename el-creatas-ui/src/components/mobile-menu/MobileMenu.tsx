import { MobileMenuIcon } from "../../assets/icons/MobileMenuIcon";
import { Sheet, SheetTrigger } from "../shadcn/components/ui/sheet";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

import "./styles.scss";

export const MobileMenu = () => {
  return (
    <div className="mobile-menu-container">
      <Sheet>
        <SheetTrigger asChild>
          <span>
            <MobileMenuIcon />
          </span>
        </SheetTrigger>
        <MobileMenuDrawer />
      </Sheet>
    </div>
  );
};
