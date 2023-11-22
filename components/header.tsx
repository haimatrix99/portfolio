"use client";

import { motion } from "framer-motion";
import React from "react";
import { FaInfinity } from "react-icons/fa";

export default function Header() {
  return (
    <motion.div
      className="mx-[100px] mt-6 md:mt-8 flex flex-col justify-between items-center md:flex-row"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <a href="/">
        <FaInfinity className="text-[64px] text-[#6e07f3]" />
      </a>
      <button className="text-[#6e07f3] text-xl font-medium border-2 rounded-full border-[#6e07f3] bg-white px-4 py-1 hover:scale-110 hover:text-white hover:bg-[#6e07f3] hover:border-white active:scale-105 active:opacity-90">
        Say Hello
      </button>
    </motion.div>
  );
}
