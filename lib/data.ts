import React from "react";
import { DiHtml5 } from "react-icons/di";
import { DiTerminal } from "react-icons/di";
import { DiCode } from "react-icons/di";

export const skillsData = [
  {
    title: "Frontend",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(DiHtml5),
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
    ],
  },
  {
    title: "Backend",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(DiCode),
    tools: ["Python", "Django", "FastAPI", "Flask", "Node.js"],
  },
  {
    title: "DevOps",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.",
    icon: React.createElement(DiTerminal),
    tools: [
      "Docker",
      "Kubernetes",
      "Github Actions",
      "Gitlab CI",
      "Jenkins",
      "AWS",
      "GCP",
    ],
  },
] as const;
