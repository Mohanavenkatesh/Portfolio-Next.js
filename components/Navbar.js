"use client";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <div className="flex mx-6 mb-10 gap-5">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
