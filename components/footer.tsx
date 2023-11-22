import React from "react";
import { FaInfinity, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
export default function Footer() {
  return (
    <div className="py-8 flex flex-col justify-center items-center bg-indigo-500 gap-6">
      <FaInfinity className="text-[64px] text-white" />
      <h3 className="px-4 text-white text-2xl font-medium">
        Living, learning, & leveling up one day at a time.
      </h3>
      <div className="flex justify-center items-center gap-4">
        <a
          href="https://github.com/haimatrix99"
          className="text-2xl rounded-full border-2 border-white p-2 text-white"
          target="_blank"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/haimatrix99/"
          className="text-2xl rounded-full border-2 border-white p-2 text-white"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <p className="text-white text-lg font-medium">Rehandcrafted by me</p>
      <p className="text-white text-[10px] font-italic">
        Inspired with @mattfarley
      </p>
    </div>
  );
}
