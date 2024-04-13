import React from 'react';
import { skillsData } from '../lib/data';
import { useSectionInView } from '../lib/hooks';
import { animate, motion } from 'framer-motion'
import SectionHeading from './section-heading';

const fadeInAnimationVariance ={
  initial: {
    opacity: 0,
    y:100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05*index,
    },
  }),
};

export default function Skills() {

const { ref } =  useSectionInView('Skills');

  return (
    <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 '
    ref={ref} 
    id='skills'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill,index) => (
                  <motion.li className='bg-white borderBlack rounded-xl px-5 py-3 dark:text-white/70 dark:bg-white/10'
                  key={index}
                  variants={fadeInAnimationVariance}
                  initial="initial"
                  whileInView="animate"
                  viewport={
                  {
                    once: true
                  }
                  }
                  custom={index}>{skill}</motion.li>  
                ))
            }
        </ul>
    </section>
  )
}
