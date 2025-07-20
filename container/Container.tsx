import Navbar from "@/components/navbar/Navbar";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function Container({ children }: ChildrenProps) {
  return (
    <div>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen">
        {children}
      </main>
    </div>
  );
}
