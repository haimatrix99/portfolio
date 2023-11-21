import React from "react";
import { FaInfinity } from "react-icons/fa";

export default function Header() {
  return (
    <div className="mx-[100px] mt-8 flex flex-col justify-between items-center md:flex-row">
      <a href="/">
        <FaInfinity className="text-[64px] text-indigo-500" />
      </a>
      <button className="text-indigo-500 text-2xl font-[400] border-2 rounded-full border-indigo-500 bg-white px-4 py-2 hover:scale-110 hover:text-white hover:bg-indigo-500 hover:border-white active:scale-105 active:opacity-90">
        Say Hello
      </button>
    </div>
  );
}
