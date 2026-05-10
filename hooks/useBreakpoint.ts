"use client";

import { useMediaQuery } from "react-responsive";

/**
 * Apple-like breakpoints:
 * - mobile:  ≤ 480px  (iPhone SE/Mini)
 * - tablet:  481–1024px (iPad portrait/landscape)
 * - desktop: > 1024px
 */
export function useBreakpoint() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const isTouchDevice = useMediaQuery({ query: "(hover: none)" });

  return { isMobile, isTablet, isDesktop, isTouchDevice };
}
