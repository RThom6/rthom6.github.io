import React, { forwardRef } from "react";
import { HeroHighlight } from "./ui/hero-highlight";
import LitBorderButton from "./ui/lit-border-button";
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";

const Hero = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <HeroHighlight
        containerClassName="w-full topAndBottomMargin dark:bg-black bg-white flex items-center justify-center relative"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="flex justify-center z-10">
          <div className="md:max-w-4xl flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Welcome to my portfolio
            </h2>

            <div className="font-bold text-center md:text-5xl lg:text-6xl">
              <span className="text-white">Hi I'm Ryan, a </span>
              <span className="text-purple">Full Stack Software Developer</span>
              <span className="text-white">based in Manchester</span>
            </div>

            <p className="flex items-center justify-center gap-2">
              <a
                href="https://github.com/rthom6"
                className="flex items-center justify-center gap-1"
              >
                <FaGithub />
                github
              </a>
              <a
                href="https://www.linkedin.com/in/rythom6/"
                className="flex items-center justify-center gap-1"
              >
                <FaLinkedin />
                linkedin
              </a>
            </p>

            <a href="#projects">
              <LitBorderButton
                title="Read More"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
});

Hero.displayName = "Hero";
export default Hero;
