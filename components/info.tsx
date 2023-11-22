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
          My main major at university is control and automation. But during my
          university studies, I had the opportunity to get acquainted with
          programming. And I started coding during my last years of college.
          After graduating, I began to learn about artificial intelligence and
          worked at a company in Vietnam for 1 year. At the same time, I learned
          more knowledge about DevOps and Web programming. Currently, I'm a
          DevOps Engineer at a company in Vietnam and I'm working on some
          personal projects.
        </p>
      </div>
    </motion.div>
  );
}
