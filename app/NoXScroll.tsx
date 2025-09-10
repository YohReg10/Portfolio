"use client";

import { useEffect } from "react";

export default function NoXScroll({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // sauvegarde
    const prevHtmlOverflowX = html.style.overflowX;
    const prevBodyOverflowX = body.style.overflowX;
    const prevHtmlOBX = html.style.getPropertyValue("overscroll-behavior-x");
    const prevBodyOBX = body.style.getPropertyValue("overscroll-behavior-x");
    const prevTouchAction = body.style.getPropertyValue("touch-action");

    // verrou horizontal propre (iOS + desktop)
    html.style.overflowX = "hidden";
    body.style.overflowX = "hidden";
    html.style.setProperty("overscroll-behavior-x", "none");
    body.style.setProperty("overscroll-behavior-x", "none");
    // limite les gestes au défilement vertical
    body.style.setProperty("touch-action", "pan-y");

    return () => {
      html.style.overflowX = prevHtmlOverflowX;
      body.style.overflowX = prevBodyOverflowX;
      html.style.setProperty("overscroll-behavior-x", prevHtmlOBX || "");
      body.style.setProperty("overscroll-behavior-x", prevBodyOBX || "");
      body.style.setProperty("touch-action", prevTouchAction || "");
    };
  }, []);

  return <>{children}</>;
}