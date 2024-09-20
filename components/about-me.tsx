import React from "react";
import { someInfo } from "@/data";
import { HoverEffect } from "./ui/card-hover";
import { BackgroundBeamsWithCollision } from "./ui/background-beams";

const Grid = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <BackgroundBeamsWithCollision>
        <div className="max-w-5xl mx-auto relative flex items-center w-full justify-center">
          <h1 className="heading text-center mb-12 absolute left-0 right-0 top-0 mx-auto">
            About <span className="text-purple">me</span>
          </h1>
          <div className="mt-20">
            <HoverEffect items={someInfo} />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Grid;
