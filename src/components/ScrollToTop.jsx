import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, search]);

  return null;
}