"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Mail, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full h-fit max-w-sm overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 mt-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-6">
          <User
            className={`w-12 h-12 transition-colors duration-300 ease-out ${isHovered ? "text-primary" : "text-muted-foreground"
              }`}
          />
        </div>
        <h2 className="font-heading text-xl tracking-tight lg:text-3xl duration-300">
          Let’s Work Together
        </h2>
        <p className="mt-2 mb-10 font-heading text-lg text-muted-foreground">
          Have a project idea or want to collaborate? I’d love to hear from you.
        </p>
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0 flex gap-4 flex-col">
        <Link
          href="mailto:sonalsengar1305@gmail.com"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full bg-transparent border-2 transition-all duration-300 py-6 flex items-center justify-center gap-2"
          )}
        >
          <Mail className="w-5 h-5" />
          <span>Email Me</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/sonal-sengar-b2b32b156"
          target="_blank"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full transition-all duration-300 py-6 flex items-center justify-center gap-2"
          )}
        >
          <User className="w-5 h-5" />
          <span>Connect on LinkedIn</span>
        </Link>
      </CardFooter>
      <div
        className={`h-1 bg-gradient-to-r from-primary to-primary transition-all duration-300 ease-out ${isHovered ? "opacity-100" : "opacity-0"
          }`}
      ></div>
    </Card>
  );
}
