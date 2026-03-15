import React from "react";
import { education, workExperience } from "@/data";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

const Experience = () => {
  return (
    <section className="bg-dark-900 text-white">
      <h1 className="heading">
        Education and <span className="text-purple">Work Experience</span>
      </h1>
      <div className="max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {workExperience.map((item, i) => (
            <>
              <div key={i} className="flex items-start gap-4">
                <span className="hidden sm:block shrink-0 rounded-lg bg-gray-800 p-4">
                  <BriefcaseIcon className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <span className="text-white text-xs">({item.dates})</span>
                  <h3 className="text-purple">{item.location} </h3>
                  <p className="mt-1 text-gray-300">
                    {item.description}
                    <br />
                    <div className="mt-2">
                      <strong></strong>
                    </div>
                  </p>
                </div>
              </div>
            </>
          ))}
          {education.map((item, i) => (
            <>
              <div key={i} className="flex items-start gap-4">
                <span className="hidden sm:block shrink-0 rounded-lg bg-gray-800 p-4">
                  <BriefcaseIcon className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h2 className="text-lg font-bold">{item.school}</h2>
                  <span className="text-white text-xs">({item.dates})</span>
                  <h3 className="text-purple">{item.level} </h3>
                  <p className="mt-1 text-gray-300">
                    <p>{item.subject}</p>
                    <p>{item.modules}</p>
                    <p>{item.grades}</p>
                    <br />
                    <div className="mt-2">
                      <strong></strong>
                    </div>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
// Todo: Fix the education bit
export default Experience;
