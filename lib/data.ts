import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/corpcomment.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
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
        title: "Site Reliability Engineer",
        location: "The Scottish Government, Edinburgh",
        description:
        "Contributed to Architecture Office High Level Designs and Data Protection Impact Assessments for the Dynatrace adoption within a highly regulated environment – in collaboration with architects, cyber security and information government teams, as well as our Chief Technology Officer. Installed Dynatrace agents/operators in 8+ critical systems (100s of workloads) across 3 major platforms; RedHat OpenShift, AWS and on premises VmWare. Built a JavaScript-based custom CMDB integrating Atlassian Assets and Dynatrace APIs, enabling asset-based impact assessments in Jira running in Dynatrace Workflows. This was highly complex, requiring an intimate understanding of Dynatrace entity objects. Established or updated SLI, SLO and SLAs. Worked with Service Transition & Change Managers to build dashboards and alerting to give additional assurances during deployments and changes. Developed automation with JavaScript to decrease or increase monitoring dynamically depending on business needs, cutting projected observability costs by upwards of one third. Built a full stack suite of reporting tools in Java and React to fill gaps for legacy technologies not supported by Dynatrace.",
        icon: React.createElement(CgWorkAlt),
        date: "2024 - present",
    },
    {
        title: "Higher National Diploma (HND) - Software Development",
        location: "Edinburgh Napier University, Scotland",
        description:
        "I attended a Bsc(Hons) Software Development course, organised through my employer, and attained my Higher National Diploma after one year, as I was a direct entrant to second year. Unfortunately due to employer staffing preasures I had to leave early with only an HND.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2021",
    },
    {
        title: "Senior IT Support",
        location: "The Scottish Government, Edinburgh",
        description:
        "Applied ITIL best practices and documented investigations and workarounds for a shift-left support approach. Resolved complex incidents using log aggregators, APM tools, and PL/SQL as well as running localhost deployments and debugging. Participated in bug fixing and some feature development using Java, & PL/SQL. Supported Atlassian cloud migration using REST APIs for data and user management. Automated a significant amount of “toil” within the Service Desk L1 & L2.",
        icon: React.createElement(CgWorkAlt),
        date: "2018 - 2024",
    },
    {
        title: "Junior Developer",
        location: "The Scottish Government, Edinburgh",
        description:
        "Developed features and plugins for an ASP.NET site that collected data from across local authorities, health boards, dentists, CPS. Developed scripts to transform various data formats into one unified format using XSLT. Administered Microsoft SQL Server, Windows Server, Hyper-V, and Active Directory. I virtualised /migrated our whole Windows Server suite from our datacentre to the cloud. Provided L1 and L2 support on a rota basis.",
        icon: React.createElement(CgWorkAlt),
        date: "2017 - 2018",
    },
    {
        title: "Shift Manager",
        location: "McDonalds UK, Aberdeen",
        description:
        "As a Shift Manager at McDonald’s, I was responsible for leading a team in a fast-paced, high-pressure environment to deliver excellent customer service and meet operational targets. I managed day-to-day restaurant operations, including staff supervision, shift scheduling, inventory control, and ensuring compliance with health and safety regulations. I motivated and coached team members to achieve performance goals, maintained high standards of food quality and cleanliness, and resolved customer issues efficiently. My role also involved cash handling, opening and closing procedures, and supporting management in training new employees and driving continuous improvement across the team. I also won the Employee of the Quarter award for North East Scotland in 2016.",
        icon: React.createElement(CgWorkAlt),
        date: "2014 - 2017",
    },
] as const;

export const skillsData = [
  "Dynatrace",
  "SRE",
  "JavaScript/TypeScript",
  "React",
  "Node.js",
  "AWS",
  "Docker",
  "Kubernetes",
  "Openshift",
  "Git",
  "CI/CD",
  "ITIL",
  "Java",
  "PL/SQL",  
] as const;
