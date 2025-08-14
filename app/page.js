import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';
import React from "react";
import Image from "next/image";


const page = () => {
  return (
    <>
      <div className="flex  flex-col mx-6">
        <div className="flex flex-col ">
          <h1 className="mb-8  text-2xl font-semibold">My Portfolio</h1>
          <p>I’m Mohan, a passionate frontend developer with a knack for building clean, responsive, and user-friendly web applications. Skilled in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I focus on crafting engaging UI experiences with attention to detail and performance. My goal is to blend aesthetics with functionality, creating interfaces that users love to interact with.</p>
          <h1 className="my-8  text-2xl font-semibold">My Skills</h1>
        </div>
        <h1>MangoDB</h1>
        <h1>Express.js</h1>
        <h1>Node.js</h1>
        <h1>React.js</h1>
        <h1>Next.js</h1>
        <Analytics />
      </div>
    </>
  );
};

export default page;
