import { Spotlight } from '@/Spotlight'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { HeroHighlight } from './ui/hero-highlight'
import LitBorderButton from './ui/lit-border-button'
import { FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div>
        <div className="h-screen w-full pt-16 dark:bg-black bg-white flex items-center justify-center relative">
        <HeroHighlight containerClassName='w-screen'>
          <div className="flex justify-center z-10">
            <div className='md:max-w-4xl flex flex-col items-center justify-center'>
              <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Welcome to my portfolio
              </h2>

              <TextGenerateEffect
                className="text-center md:text-5xl lg:text-6xl"
                words="Hi, I'm Ryan, an aspiring Software Developer based in the UK"
              />

              <p className="flex items-center justify-center gap-2">
                <a href="https://github.com/rthom6" className="flex items-center justify-center gap-1">
                  <FaGithub/>github
                </a>
                <a href="https://www.linkedin.com/in/rythom6/" className="flex items-center justify-center gap-1">
                  <FaLinkedin/>linkedin
                </a>
              </p>

              <a href="#projects">
                <LitBorderButton 
                  title="Show my work"
                  icon={<FaLocationArrow/>}
                  position="right"
                />
              </a>
            </div>
          </div>
        </HeroHighlight>
      </div>
    </div>
  )
}

export default Hero