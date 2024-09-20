import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { skills } from '@/data';

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto relative ">
      <h1 className="heading text-center mb-12 relative mx-auto">
        Skills
      </h1>
      <div className="mt-10">
        <BentoGrid className="mx-auto">
          {skills.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              className={i === 3 || i === 6 ? "md:col-span-1" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  )
}

export default Skills