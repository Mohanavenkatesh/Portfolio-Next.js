"use client";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-center fixed top-5 left-0 z-50 ">
        <div className="flex gap-5 items-center px-6 py-2  rounded-4xl inset-0 bg-gradient-to-tr from-white/20  to-transparent ">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
