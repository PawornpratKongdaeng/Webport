"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { ButtonsCard } from "../ui/tailwindcss-buttons";
import Link from "next/link";

const words = `Hello My name is Nawin`;
const words2 = `I'm frontend developer`;

export function Hero() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center font-lato">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <TextGenerateEffect
        className="text-center mt-2 text-white relative z-20 text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
        words={words}
      />
      <TextGenerateEffect
        className="text-center mt-2 text-indigo-200 relative z-20 text-xl md:text-2xl font-semibold italic"
        words={words2}
      />
      <Link href="/portfolio" className="z-30">
      <ButtonsCard>
        Let's see my work!
      </ButtonsCard>
    </Link>
    </div>
  );
}
