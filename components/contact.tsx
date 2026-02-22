"use client"

import React from 'react'
import { useSectionInView } from '../lib/hooks';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from '../api/sendEmail'
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

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
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me at <a href='mailto:scotty.mcmahon@outlook.com'
          className='underline'>scotty.mcmahon@outlook.com</a> or through this form</p>

          <div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
            <p>Please note: Generic messages without salary information and details about the role included will not receive a response.</p>
          </div>


      <form className='mt-10 flex flex-col dark:text-black' action={async (formData) => {
        const { data, error } = await sendEmail(formData)
          
        if (error) {
          toast.error(error);
          return;
        }
        toast.success("Email sent successfully!")
      }}>


        <input className='h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Please enter your email address.'
        />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all  dark:outline-none'
          minLength={5}
          name='senderMessage'
          placeholder='Enter your message... 50 characters minimum' />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
