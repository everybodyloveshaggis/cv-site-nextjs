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
        <span className='font-semibold'>Early Career and Software Development</span><br />
        In 2017, I embarked on my IT adventure as a junior software engineer. My days were filled with coding ASP.NET applications, where I dabbled in technologies like C#, HTML, JavaScript, XSLT, and T-SQL. But my role extended beyond mere coding. As part of a small yet dynamic technical team, I found myself triaging and resolving IT-related tickets and service requests. The experience was invaluable, and I also took charge of deployment management—both for physical servers and virtual environments (think Windows Server and Hyper-V). Cybersecurity and backup procedures became second nature to me during this phase.
        </p>
        <p className='mb-3'>
        <span className='font-semibold'>Later Roles and Diverse Technology Exposure</span><br />
        Fast forward a year, and I stepped into a new chapter: an Application Support / 3rd Line Service Desk role within another public sector organization. Here, my tech toolkit expanded exponentially. I immersed myself in a diverse array of software technologies, including Java (Spring framework, JSF, Thymeleaf), Drools, Red Hat BRMS, Red Hat Process Automation Manager, Express JS, Angular, PostgreSQL, and Oracle. But it wasn’t just about software; I also delved into server-side technologies like Apache HTTPD, RHEL, JBoss EAP, JBoss Portal, JBoss Fuse, IIS, and AMQ. Tools like SonarQube, Snyk, Travis-CI, and Jenkins became my trusted companions. And let’s not forget my affinity for testing technologies—JMeter and UiPath. Containerization? Yep, I mastered both Podman and Docker. But my current role as a DevOps Engineer takes the cake. I’m all about Site Reliability Engineering, deploying and maintaining tools like Dynatrace, crafting alerting systems, and even building bespoke solutions using Java and React. It’s been quite the journey—a blend of software development, server administration, and cutting-edge DevOps practices. 🚀
        </p>
    </motion.section>
  );
}
