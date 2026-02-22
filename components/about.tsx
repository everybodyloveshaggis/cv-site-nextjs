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
        As a site reliability engineer with a background in IT support and full stack development, I'm uniquely positioned to understand pain points from both delivery and operations perspectives. It is no surprise that I am a big advocate for observability and monitoring. I have extensive experience with Dynatrace, having installed it across multiple platforms including Openshift, AWS (EC2, ECS, Lambda, RDS, ROSA) and VmWare (Linux) environments. I have built complex dashboards based on Javascript and Dynatrace Query Language (DQL), alerting (including Jira automation of tickets created by alerts), and reporting tools to give teams and stakeholders deep insights into system performance, reliability and user journeys
        <br/><br/>I firmly believe in the principles of DevOps and SRE, and I'm always looking for ways to bridge the gap between development and operations teams. I am always pushing for CI/CD adoption across teams and delivery partners, infrastructure as code, and automated testing to improve software delivery speed and quality. I'm extremely passionate about automation and improving reliability through code. I love finding creative solutions to complex problems, whether that's building custom monitoring tools in Angular (Nginx), Spring Boot and MongoDB that all run in Openshift or automating repetitive tasks to free up time for higher-value work. I've worked closely with teams to debug complex issues using memory and cpu profiling, logs, metrics and traces within extremely time bound settings, and have a deep understanding of distributed systems and microservices architectures.
        <br/><br/>Being a civil servant for the Scottish Government, within one of the largest most complex directorates, I know the ins and outs of working in a highly regulated environment with strict compliance requirements and the need to innovate on a budget.
        <br/><br/>In my spare time, I enjoy hiking in the beautiful Scottish Highlands, keeping up with the latest tech trends, building and maintining computers for friends, and exploring new programming languages and frameworks.
        </p>
    </motion.section>
  );
}
