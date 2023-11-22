import React from "react";
import { DiHtml5 } from "react-icons/di";
import { DiTerminal } from "react-icons/di";
import { DiCode } from "react-icons/di";

export const skillsData = [
  {
    title: "Frontend",
    description:
      "I'm not a person with an aesthetic eye, but I always try to help users solve problems.",
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
      "I started learning backend when I was trying to understand the essence of programming.",
    icon: React.createElement(DiCode),
    tools: ["Python", "Django", "FastAPI", "Flask", "Node.js"],
  },
  {
    title: "DevOps",
    description:
      "I'm a cloud passionate and I love to build the infrastructure on it.",
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
