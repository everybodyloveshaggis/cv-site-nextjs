import React from 'react'
import { useSectionInView } from '../lib/hooks';
import SectionHeading from './section-heading';

export default function Contact() {
    const { ref } =  useSectionInView('Contact');
  return (
    <section 
    ref={ref}
    id='Contact'>
        <SectionHeading>Contact</SectionHeading>
    </section>
  )
}
