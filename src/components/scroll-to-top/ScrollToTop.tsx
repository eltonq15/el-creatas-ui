import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const isLinkClick = navigationType === "PUSH";

    if (isLinkClick) {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
