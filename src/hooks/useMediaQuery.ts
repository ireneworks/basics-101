import { useState, useEffect } from "react";
import { PC_SIZE } from "../common/constants/mediaQuery.constants.ts";

export default function useMediaQuery() {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth <= PC_SIZE,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= PC_SIZE);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
}
