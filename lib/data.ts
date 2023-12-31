import React from "react";
import { DiHtml5 } from "react-icons/di";
import { DiTerminal } from "react-icons/di";
import { DiCode } from "react-icons/di";
import { PiDetectiveFill } from "react-icons/pi";
import { MdQuiz } from "react-icons/md";

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

export const projectsData = [
  {
    title: "Werewolf One Night",
    description:
      "A Multiplayer online game simulate a board game is Werewolf One Night",
    icon: "/werewolf.svg",
    href: "https://werewolfonenight.com",
    url: "werewolfonenight.com",
  },
  {
    title: "Deception",
    description: "A Multiplayer online game simulate a board game is Deception",
    icon: React.createElement(PiDetectiveFill),
    href: "/",
    url: "Coming soon",
  },
  {
    title: "QuizMe",
    description:
      "A AI SaaS project allow user upload video and generate quiz from video's uploaded",
    icon: React.createElement(MdQuiz),
    href: "https://quizme.fromyourbestfriend.com",
    url: "quizme.fromyourbestfriend.com",
  },
];
