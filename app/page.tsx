"use client";

import Education from "@/components/education";
import Grid from "@/components/about-me";
import Hero from "@/components/hero";
import RecentProjects from "@/components/recent-projects";
import Skills from "@/components/skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { ChakraProvider } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [passedHero, setPassedHero] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPassedHero(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );

    if (hero) observer.observe(hero);

    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, []);

  return (
    <main className="bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 text-white">
      <div className="w-full">
        <ChakraProvider>
          <FloatingNav
            visible={passedHero}
            navItems={[{ name: "Back to Top", link: "/", icon: <FaHome /> }]}
          />
          <Hero ref={heroRef} />
          <Grid />
          <Skills />
          <RecentProjects />
          <Education />
        </ChakraProvider>
      </div>
    </main>
  );
}
