"use client";
import React, { useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ProfileSetupPage() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAvatarUrl(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle form submission (send username, bio, avatarFile to backend)
    alert("Profile submitted! (implement backend logic)");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] w-full">
      <Card className="w-full max-w-md shadow-lg rounded-xl border bg-background">
        <form onSubmit={handleSubmit} className="p-6">
          <CardHeader className="pb-2 text-center">
            <CardTitle className="text-2xl font-semibold tracking-tight mb-1">
              Set up your profile
            </CardTitle>
            <p className="text-sm text-muted-foreground font-normal">
              Complete your details to get started
            </p>
          </CardHeader>
          <CardContent className="space-y-8 pt-2">
            <div className="flex flex-col items-center gap-2">
              <Label htmlFor="avatar" className="text-base font-medium mb-1">
                Profile Picture
              </Label>
              <div
                className="relative cursor-pointer group"
                onClick={handleAvatarClick}
              >
                <Avatar className="size-24 border border-muted shadow-sm group-hover:shadow-md transition-all duration-200">
                  {avatarUrl ? (
                    <AvatarImage src={avatarUrl} alt="Avatar preview" />
                  ) : (
                    <AvatarFallback className="text-lg">U</AvatarFallback>
                  )}
                </Avatar>
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleAvatarChange}
                  title="Upload profile picture"
                  placeholder="Upload profile picture"
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-background px-2 py-0.5 rounded text-xs text-muted-foreground shadow mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Change
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username" className="text-base font-medium">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                className="rounded-md px-4 py-2 text-base border-muted focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-base font-medium">
                Bio
              </Label>
              <Textarea
                id="bio"
                name="bio"
                placeholder="Tell us about yourself"
                rows={3}
                className="rounded-md px-4 py-2 text-base border-muted focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>
          </CardContent>
          <CardFooter className="pt-4">
            <Button
              type="submit"
              className="w-full py-2 text-base rounded-md font-medium shadow-sm"
            >
              Save Profile
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
