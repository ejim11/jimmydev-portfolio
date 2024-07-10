"use client";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import React from "react";

export default function Home() {
  return (
    <div className="px-[6rem] flex flex-col w-full ">
      <Introduction />
      <div className="flex w-full justify-between">
        <AboutMe />
        <TechStack />
      </div>
      <Projects />
      <ContactMe />
    </div>
  );
}
