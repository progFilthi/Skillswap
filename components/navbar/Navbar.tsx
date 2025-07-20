"use client";

import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="flex items-center justify-between px-8 py-3 shadow-sm border-b-[1px]">
      <Link href={"/dashboard"}>
        <ul>
          <li>Dashboard</li>
        </ul>
      </Link>
      <Link
        href={"/profiles"}
        className="flex items-center justify-center gap-4"
      >
        <ul>
          <li>Profiles</li>
        </ul>
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
      </Link>
    </nav>
  );
}
