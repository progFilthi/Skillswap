import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const skills = [
  {
    name: "Web Development",
    user: "Alice",
    avatar: null,
    description: "Build modern websites with React, Next.js, and more.",
    icon: "/window.svg",
  },
  {
    name: "Graphic Design",
    user: "Bob",
    avatar: null,
    description: "Logos, posters, and digital art for your brand.",
    icon: "/file.svg",
  },
  {
    name: "Language Tutoring",
    user: "Carlos",
    avatar: null,
    description: "Learn Spanish, French, or Mandarin from a native speaker.",
    icon: "/globe.svg",
  },
  {
    name: "Music Lessons",
    user: "Diana",
    avatar: null,
    description: "Guitar, piano, and vocal coaching for all levels.",
    icon: "/vercel.svg",
  },
  {
    name: "Fitness Coaching",
    user: "Eve",
    avatar: null,
    description: "Personalized workout and nutrition plans.",
    icon: "/next.svg",
  },
];

export default function Dashboardpage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <div className="mb-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-tada">
          Welcome to your Dashboard
        </h1>
        <p className="text-lg text-muted-foreground mb-6 animate-fadeIn">
          Discover, offer, and swap skills with the community. Start bartering
          today!
        </p>
        <div className="w-full max-w-md flex gap-2 animate-fadeInUp">
          <Input
            placeholder="Search for a skill or user..."
            className="rounded-l-md px-4 py-2 text-base border-muted focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
          <Button className="rounded-r-md px-6 text-base font-medium shadow-sm">
            Search
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fadeInUp">
        {skills.map((skill, idx) => (
          <Card
            key={idx}
            className="shadow-md border bg-background hover:shadow-lg transition-shadow duration-200"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="relative w-12 h-12">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold mb-0.5">
                  {skill.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  by {skill.user}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="py-2">
              <p className="text-base text-muted-foreground min-h-[48px]">
                {skill.description}
              </p>
            </CardContent>
            <CardFooter className="pt-2 flex justify-end">
              <Button size="sm" className="rounded-md">
                Request Swap
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
