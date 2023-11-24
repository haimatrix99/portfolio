"use client";

import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <motion.div
      className="w-full flex flex-col justify-center items-center bg-[#6e07f3] my-8"
      initial={{ opacity: 0, y: 250 }}
      animate={{ opacity: 1, y: -70 }}
    >
      <h1 className="my-20 mb-10 text-[#ffeefe] text-3xl font-extrabold flex justify-center items-center">
        My Projects
      </h1>
      <ul className="flex flex-wrap justify-center items-center translate-y-[50px] gap-8">
        {projectsData.map((project, index) => (
          <li key={index} className="md:w-[45%]">
            <Project {...project} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
type ProjectProps = (typeof projectsData)[number];

export function Project({ title, description, icon, href, url }: ProjectProps) {
  return (
    <div className="py-8 px-16 flex flex-col bg-white border justify-center items-center rounded-3xl gap-8">
      <div className="flex justify-center items-center gap-2">
        {typeof icon === "string" ? (
          <Image
            src={icon}
            alt="Avatar"
            width="24"
            height="24"
            quality="95"
            priority={true}
          />
        ) : (
          <div className="text-2xl">{icon}</div>
        )}
        <h2 className="text-[#26293b] text-2xl font-semibold">{title}</h2>
      </div>
      <p className="text-lg font-medium text-[#2f2643]">{description}</p>
      <div className="px-4 break-all text-[16px] md:text-lg text-[#106ad4] font-medium flex justify-center items-center gap-2 bg-indigo-100 border rounded-2xl">
        <FaArrowUpRightFromSquare />
        <a href={href} target="_blank">
          {url}
        </a>
      </div>
    </div>
  );
}
