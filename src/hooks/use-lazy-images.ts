import Aos from "aos";
import { useEffect } from "react";

export const useLazyImages = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);
};
