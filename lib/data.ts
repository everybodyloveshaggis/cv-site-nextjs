import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/corpcomment.png";
import rmtdevImg from "../public/rmtdev.png";
import wordanalyticsImg from "../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Site Reliability Engineer (SRE)",
    location: "The Scottish Government - Hybrid (Remote & Saughton House, Edinburgh)",
    description:
      "Solid understanding of Dynatrace (APM), including deployment, Dynatrace config as code through Terraform, real user monitoring, automation workflows, and integration with Jira Service Management and OpsGenie. Awareness of AppDynamics and Opentelemetry. Experienced with Glowroot, UiPath, VMware vRealize, SonarQube, Snyk, Jenkins, and Atlassian Tools Administration.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "DevOps Foundation",
    location: "PeopleCert",
    description:
      "Credential ID GR553000311SM. Expires Jan 2027.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Site Reliability Engineering (SRE) Practitioner",
    location: "PeopleCert",
    description:
      "Credential ID GR559000032SM. Expires Jan 2027.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Site Reliability Engineering (SRE) Foundation",
    location: "DevOps Institute",
    description:
      "Credential ID 24582961. Expires Sep 2025.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Software Development (HND)",
    location: "Edinburgh Napier University",
    description:
      "Studied at Napier University for two years, earning a diploma. Afterwards, I chose to direct my attention towards advancing my professional career.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "ITIL Foundation Certificate in IT Service Management (ITIL V4)",
    location: "PeopleCert",
    description:
      "Credential ID GR671085390SM. Expires Jan 2027.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Senior IT Support & Application Support",
    location: "The Scottish Government - Suaghton House, Edinburgh",
    description:
      "I implemented ITIL best practices, provided high-quality IT support, and developed expertise in full stack Java, with a strong focus on application support and debugging Java web apps used by over 30,000 people.",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "IT Support & Junior Software Developer",
    location: "The Scottish Government - Victoria Quay, Edinburgh",
    description: 
    "Began as a Junior Help Desk professional, shifted to Junior Developer while continuing Help Desk duties. Became skilled in ASP.NET, C#, XML, SQL (MS SQL Server), Microsoft TFS, Windows Server, virtualization, and Active Directory.",
    icon: React.createElement(CgWorkAlt),
    date: "2017",
  },
] as const;

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "SQL",
  "PLSQL",
  "Oracle SQL Developer",
  "AWS CloudWatch",
  "AWS Lambda",
  "Dynatrace",
  "Kibana",
  "VMWare LogInsight",
  "Shell scripting",
  "SOAP",
  "RESTful services",
  "Apache JMeter",
  "MAT",
  "VBA",
  "Snyk",
  "SonarQube",
  "Jenkins",
  "Atlassian Tools Administration",
] as const;
