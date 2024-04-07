import React from 'react'
import { useSectionInView } from '../lib/hooks';
import SectionHeading from './section-heading';

export default function Experience() {
    const { ref } =  useSectionInView('Experience');

  return (
    <section 
    ref={ref}
    id='Experience'>
        <SectionHeading>Experience</SectionHeading>
    </section>
  )
}
