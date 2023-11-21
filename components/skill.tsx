"use client";

import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";

export default function Skills() {
  return (
    <motion.div
      className="w-[90%] flex justify-center items-center rounded-2xl border-2 -translate-y-[80px] bg-white"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: -70 }}
    >
      <ul className="flex flex-col items-center gap-8 md:flex-row md:items-baseline">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="px-8 py-16 w-[90%] border-b border-[#E6ECF8] last:border-none md:w-1/3 md:border-r "
          >
            <Skill {...skill} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
type SkillProps = (typeof skillsData)[number];

export function Skill({ title, description, icon, tools }: SkillProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-[#5be9b9] rounded-full text-4xl p-4 hover:scale-105">
        {icon}
      </div>
      <div className="text-3xl text-indigo-500 font-extrabold">{title}</div>
      <div className="text-lg font-medium">{description}</div>
      <div>
        <div className="text-2xl font-medium text-indigo-500 my-2">Tools</div>
        <ul className="flex flex-col justify-center items-center">
          {tools.map((tool, index) => (
            <li key={index} className="text-lg font-medium">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}