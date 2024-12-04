"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { useState, useEffect } from "react";

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProviderWrapper({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = true,
}: ThemeProviderWrapperProps) {
  const [mounted, setMounted] = useState(false);

  //  WARNING !!! Résolution du problème d'hydration avec le UseEffect et UseState en passant une condition au composant

  useEffect(() => {
    // S'assure que le code n'est exécuté que côté client
    setMounted(true);
  }, []);

  // Si le composant n'est pas encore monté côté client, on ne rend rien
  if (!mounted) {
    return null;
  }

  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  );
}


