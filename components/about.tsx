"use client"

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '../lib/hooks';

export default function About() {
const { ref } =  useSectionInView('About');

  return (
    <motion.section 
    className='mb-10 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.225 }}
    ref={ref}
    id='about'>
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
        As a site reliability engineer with a background in IT support and full stack development, I'm uniquely positioned to understand pain points from both delivery and operations perspectives.<br/> I'm a tech enthusiast committed to progress and currently pursuing <br/><b>AWS CLF-C02</b> and <b>Dynatrace Master</b> <br/>Certifications.<br/> In my spare time, I enjoy hiking, amateur skiing, and bouldering.
        </p>
    </motion.section>
  );
}
