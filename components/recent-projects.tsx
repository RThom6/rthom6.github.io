import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { recentProjects } from "@/data";
import { ProjectSection } from "./ui/project-section";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      {recentProjects.map((item, i) => (
        <ProjectSection
          key={i}
          title={item.title}
          description={item.description}
          description2={item.description2}
          imageUrl={item.imageUrl}
          />
      ))}
    </div>
  );
};

export default RecentProjects;
