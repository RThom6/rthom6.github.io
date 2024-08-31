import { Spotlight } from '@/Spotlight'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { HeroHighlight } from './ui/hero-highlight'
import LitBorderButton from './ui/lit-border-button'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="pb-20 pt-10">

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.0] bg-grid-black-100/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <HeroHighlight>
          <div className="flex justify-center relative my-20 z-10">
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
              <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Finally making one?!
              </h2>

              <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Portfolio Party Time"
              />
              <p>
                Hi, I'm Ryan, an API Developer based in the UK
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
  )
}

export default Hero