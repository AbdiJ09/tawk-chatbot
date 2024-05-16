"use client";

import { useEffect } from "react";
declare global {
  interface Window {
    Tawk_API?: {
      showWidget: () => void;
      hideWidget: () => void;
    };
  }
}
const TawkToScript = () => {
  useEffect(() => {
    if (!window.Tawk_API) {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/66446d6407f59932ab3fb54f/1httkmkc5";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode?.insertBefore(s1, s0);

      return () => {
        s1.remove();
      };
    } else {
      window.Tawk_API.showWidget();
    }
  }, []);

  return null;
};

export default TawkToScript;
