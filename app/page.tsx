"use client";

import Education from "@/components/education";
import Grid from "@/components/about-me";
import Hero from "@/components/hero";
import RecentProjects from "@/components/recent-projects";
import Skills from "@/components/skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <main className="bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 text-white">
      <div className="w-full">
        <ChakraProvider>
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />
        <Education />
        </ChakraProvider>
      </div>
    </main>
  );
}
