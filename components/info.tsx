"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Info() {
  return (
    <motion.div
      className="flex justify-center items-center bg-indigo-500"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="my-36 w-[80%]">
        <h1 className="mb-10 text-white text-4xl font-extrabold">
          Hi, I’m Le Trung Hai. Nice to meet you.
        </h1>
        <p className="text-white text-2xl leading-8">
          Since beginning my journey as a freelance designer over 11 years ago,
          I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </p>
      </div>
    </motion.div>
  );
}
