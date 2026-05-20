import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "./SmoothScroll";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef(pathname);

  const nativeScrollTo = (target, options) => {
    if (typeof target === "number") {
      window.scrollTo({ top: target, left: 0, behavior: options?.behavior || "auto" });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: options?.behavior || "smooth", block: "start" });
    }
  };

  const scrollToHash = (hashStr, attempt = 0) => {
    const lenis = getLenis();
    const element = document.querySelector(hashStr);

    if (!element) {
      if (attempt < 10) {
        setTimeout(() => scrollToHash(hashStr, attempt + 1), 100);
      }
      return;
    }

    if (lenis) {
      lenis.scrollTo(element, {
        offset: -120,
        duration: 1.2,
      });
    } else {
      nativeScrollTo(element, { behavior: "smooth" });
    }
  };

  useEffect(() => {
    const lenis = getLenis();
    const prevPathname = prevPathnameRef.current;
    prevPathnameRef.current = pathname;
    const isNavigating = prevPathname !== pathname;

    if (hash) {
      if (isNavigating) {
        setTimeout(() => scrollToHash(hash), 400);
      } else {
        requestAnimationFrame(() => setTimeout(() => scrollToHash(hash), 100));
      }
    } else {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        nativeScrollTo(0, { behavior: "auto" });
      }
    }
  }, [pathname, hash]);

  // Safety net: catches cases where pathname didn't change but hash did
  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash) {
        setTimeout(() => scrollToHash(currentHash), 400);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
};

export default ScrollToTop;