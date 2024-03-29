import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '../lib/data'
import Image from 'next/image';

export default function Projects() {
  return (
    <section>
        <SectionHeading>My projects</SectionHeading>
        <div>
          {
            projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project}/>
              </ React.Fragment >
            ))
          }
        </div>
    </section>
  )
}

type ProjectProps = (typeof projectsData)[number];


function Project({title, description, tags, imageUrl} : ProjectProps){
  return (
  <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0">
    <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
      {tags.map((tag, index) => (
        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem uppercase tracking-wider text-white rounded-full" key={index}>{tag}</li>
      ))}
    </ul>
    </div>
    <Image className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl" src={imageUrl} alt={description} quality={90}/>
  </section>
  )
}