import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '../lib/data'
import { useSectionInView } from '../lib/hooks';

export default function Skills() {
const { ref } =  useSectionInView('Skills');

  return (
    <section ref={ref} id='skills'>
        <SectionHeading>My Skills</SectionHeading>
        <ul>
            {
                skillsData.map((skill,index) => (
                  <li key={index}>{skill}</li>  
                ))
            }
        </ul>
    </section>
  )
}
