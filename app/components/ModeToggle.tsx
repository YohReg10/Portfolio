// ModeToggle = partie Client

"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/app/components/ui/button";

interface ModeToggleProps {
  className?: string;
}

export function ModeToggle({ className }: ModeToggleProps) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className={className} 
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Moon className="h-[1.6rem] w-[1.6rem]" />
      ) : (
        <Sun className="h-[1.6rem] w-[1.6rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
