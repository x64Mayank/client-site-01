import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "./SmoothScroll";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef(pathname);

  const scrollToHash = (hashStr, attempt = 0) => {
    const lenis = getLenis();
    if (!lenis) return;

    const element = document.querySelector(hashStr);
    if (element) {
      lenis.scrollTo(element, {
        offset: -120,
        duration: 1.2,
      });
    } else if (attempt < 10) {
      // Retry up to 10 times (1 second total) if element not mounted yet
      setTimeout(() => scrollToHash(hashStr, attempt + 1), 100);
    }
  };

  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    const prevPathname = prevPathnameRef.current;
    prevPathnameRef.current = pathname;
    const isNavigating = prevPathname !== pathname;

    if (hash) {
      if (isNavigating) {
        // Cross-route navigation: wait longer for the new page to render
        setTimeout(() => scrollToHash(hash), 400);
      } else {
        // Same-route hash change: shorter delay is fine
        requestAnimationFrame(() => setTimeout(() => scrollToHash(hash), 100));
      }
    } else {
      lenis.scrollTo(0, { immediate: true });
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