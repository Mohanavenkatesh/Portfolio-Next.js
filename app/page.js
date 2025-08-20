import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';
import React from "react";
import { Button } from "@/components/ui/button"
import Image from "next/image";


const page = () => {
  return (
    <>
      <div className="flex flex-col mx-6">
        <div className="flex flex-col">
          <h1 className="mb-8 text-2xl font-semibold">My Portfolio</h1>
          <p>
            I’m Mohan, a frontend developer who builds clean, responsive, and user-friendly web apps. Skilled in HTML, CSS, JavaScript, React, and Next.js, I focus on creating engaging, high-performance interfaces that look great and work well.
          </p>
          <h1 className="my-8 text-2xl font-semibold">My Skills</h1>
        </div>
        <ul className="list-disc ml-6 mb-4">
          <li>React.js</li>
          <li>Next.js</li>
          <li>HTML5 &amp; CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>Tailwind CSS & Bootstrap</li>
          <li>Responsive Web Design</li>
          <li>Version Control (Git &amp; GitHub)</li>
          <li>RESTful APIs</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
        <p className="mb-3">
          Interested in collaborating or want to know more about my work? Feel free to{" "}
          !
        </p>
        <a
          href="/contact"
        >
          <Button variant="outline">Contact me</Button>
        </a>
        <Analytics />
      </div>
    </>
  );
};

export default page;
