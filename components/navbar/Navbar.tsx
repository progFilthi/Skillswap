"use client";

import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="flex items-center justify-between px-8 py-3 shadow-sm border-b-[1px]">
      <ul>
        <li>Dashboard</li>
      </ul>
      <ul className="flex items-center justify-center gap-4">
        <li>Profiles</li>
        {mounted &&
          (resolvedTheme === "dark" ? (
            <Button onClick={() => setTheme("light")}>
              <Sun />
            </Button>
          ) : (
            <Button onClick={() => setTheme("dark")}>
              <Moon />
            </Button>
          ))}
      </ul>
    </nav>
  );
}
