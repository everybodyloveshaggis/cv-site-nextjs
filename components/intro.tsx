"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsDownload, BsLinkedin } from "react-icons/bs";
import { FaGitSquare, FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-30 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center py-[-40]">
        <div className="relative">
          <motion.div
            className=""
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/me.JPG"
              alt="Portrait of Scott McMahon"
              width={152}
              height={152}
              priority={true}
              className="h-28 w-28 rounded-full border-[0.35] object-cover border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

    <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
    >
        Hello, I'm{" "}<span className="font-bold text-4xl">Scott McMahon</span>
    </motion.p>

    <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
    initial={{ opacity: 0 , y:100}}
    animate={{ opacity: 1, y:0}}
    transition={{
        delay: 0.3,
    }}
    >
        <Link href={"#contact"}
        className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105"
        >Contact Me{" "}
        <BsArrowRight />
        </Link>
        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full">Download CV{" "}<BsDownload /></a>
        <a className="bg-white p-4 flex items-center gap-2 rounded-full text-[#0077B5]"><BsLinkedin /></a>
        <a className="bg-white p-4 flex items-center gap-2 rounded-full text-[1.20rem]"><FaGithubSquare /></a>
    </motion.div>

    </section>
  );
}
