import Image from "next/image";
import React from "react";
import avatar from "@/public/mf-avatar.svg";
import devices from "@/public/hero-devices.svg";

export default function About() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center w-[80%]">
      <h1 className="text-6xl text-indigo-500 font-extrabold">
        DevOps Engineer
      </h1>
      <p className="text-lg text-gray-950 my-4 font-normal">
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
        alt="Avatar"
        width="1024"
        height="1024"
        quality="95"
        priority={true}
      />
    </div>
  );
}
