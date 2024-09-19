import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { projects } from "@/data";
import { ProjectSection } from "./ui/project-section";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <ProjectSection
          title="tello-rust"
          description="Tello-rust was my first small to medium sized project in Rust. It is a wrapper for controlling a DJITello drone using the Ryze Tello sdk. The library works as a wrapper for this SDK and works over a UDP port. The aim of it was to translate DJITelloPy from Python to Rust as a way of learning a bit about a new language. I uploaded version 1.0 of the library to crates.io ('The rust community's crate registry') on the 14th of September 2024 and by the 19th it had garnered over 350 downloads."
          imageUrl="/resources/tell-rust.png"
        />
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
           
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default RecentProjects;
