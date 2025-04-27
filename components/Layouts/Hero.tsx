"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { ButtonsCard } from "../ui/tailwindcss-buttons";
import Link from "next/link";

const words = `Hello My name is Nawin`;
const words2 = `I'm frontend developer`;

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          I build amazing web applications
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
