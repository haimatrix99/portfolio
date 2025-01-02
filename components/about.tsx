"use client";

import Image from "next/image";
import React from "react";
import avatar from "@/public/mf-avatar.svg";
import devices from "@/public/hero-devices.svg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="mt-20 flex flex-col items-center justify-center w-[80%]"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-6xl text-[#141c3a] font-extrabold">
        <Typewriter
          options={{
            strings: ["DevOps Engineer", "Hai Le Trung"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="mt-4 text-lg text-[#0A0A0A] opacity-90 my-4 font-medium">
        I design and code beautifully simple things, and I love what I do.
      </p>
      <Image
        src={avatar}
        alt="Avatar"
        width="256"
        height="256"
        quality="95"
        priority={true}
        className="my-8"
      />
      <Image
        src={devices}
        alt="Devices"
        width="1024"
        height="1024"
        quality="95"
        priority={true}
      />
    </motion.div>
  );
}
