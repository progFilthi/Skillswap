import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

export default function Homepage() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full min-h-[70vh]">
      <div className="relative flex flex-col items-center justify-center bg-white/70 dark:bg-black/40 backdrop-blur-lg rounded-2xl shadow-md px-8 py-12 max-w-xl w-full border border-border animate-fadeInUp">
        <Image
          width={24}
          height={24}
          src="/globe.svg"
          alt="Globe"
          className="w-20 h-20 mb-6 drop-shadow-md animate-bounce"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 animate-tada tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome to <span className="text-primary">skillswap</span>!
        </h1>
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-8 animate-fadeIn delay-200">
          Barter your skills. Grow your network. Unlock new opportunities.
        </p>
        <SignUpButton forceRedirectUrl={"/profile"}>
          <Button
            size="lg"
            className="text-lg px-8 py-4 rounded-full shadow-lg animate-pulse hover:scale-105 transition-transform duration-300"
          >
            🚀 Get Started
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}
