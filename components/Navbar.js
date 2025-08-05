"use client";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-center  fixed top-5 left-0 z-50">
        <div className="flex gap-5 items-center p-4 bg-[#ffffff4d] rounded-4xl">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
