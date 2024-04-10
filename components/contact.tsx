"use client"

import React from 'react'
import { useSectionInView } from '../lib/hooks';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  return (
    <motion.section className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      ref={ref}
      id='contact'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 -mt-6'>
        Please contact me directly at <a href='mailto:scotty.mcmahon@outlook.com'
        className='underline'>scotty.mcmahon@outlook.com</a> or through this form</p>

      <form className='mt-10 flex flex-col'>
        <input className='h-14 rounded-lg borderBlack px-4'
          type='email' placeholder='Please enter your email address.' />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4 '
          minLength={50}
          placeholder='Enter your message... 50 characters minimum' />
        <button className='focus:scale-110 hover:scale-110 active:scale-105 group flex items-center justify-center gap-2 h-[3rem] w-[8rem]
          bg-gray-900 hover:bg-gray-950 text-white rounded-full outline-none transition-all'
          type='submit'>Submit
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' /></button>
      </form>
    </motion.section>
  )
}
