import { skillsData } from "@/lib/data";
import React from "react";

export default function Skills() {
  return (
    <div className="w-[90%] flex justify-center items-center rounded-2xl border-2 -translate-y-[80px] bg-white">
      <ul className="my-8 flex flex-col gap-8 md:flex-row">
        {skillsData.map((skill, index) => (
          <li key={index} className="w-[80%] md:w-1/3">
            <Skill {...skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}
type SkillProps = (typeof skillsData)[number];

export function Skill({ title, description, icon, tools }: SkillProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="bg-[#5be9b9] rounded-full text-4xl p-6">{icon}</div>
      <div className="text-4xl text-indigo-500 font-extrabold">{title}</div>
      <div className="text-xl font-medium">{description}</div>
      <div className="text-3xl font-medium text-indigo-500">Tools</div>
      <ul className="flex flex-col justify-center items-center">
        {tools.map((tool, index) => (
          <li key={index} className="text-xl font-medium">
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}
