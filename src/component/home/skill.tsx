"use client";

import { useState, useEffect } from "react";
import {
  ExpressIcon,
  GraphQLIcon,
  JavaScriptIcon,
  MongoDBIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "../icons";

export default function Skill() {
  const skills: any = {
    React: `import React from 'react';\n\nfunction App() {\n  return <h1>Hello, React!</h1>;\n}\n\nexport default App;`,
    TailwindCSS: `<div class="bg-blue-500 text-white font-bold py-2 px-4 rounded">\n  Hello, Tailwind CSS!\n</div>`,
    JavaScript: `const greet = () => {\n  console.log("Hello, JavaScript!");\n};\n\ngreet();`,
  };

  const [currentSkill, setCurrentSkill] = useState("React");
  const [currentCode, setCurrentCode] = useState(skills[currentSkill]);

  useEffect(() => {
    const skillKeys = Object.keys(skills);
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % skillKeys.length;
      setCurrentSkill(skillKeys[index]);
      setCurrentCode(skills[skillKeys[index]]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto ">
          <div className="mb-4 space-y-2 text-center lg:text-left">
            <h2 className="text-lg text-indigo-400 font-bold md:text-xl">
              My Skills
            </h2>
            <h3 className="text-sm text-gray-500 md:text-base">
              Technologies I have worked with and I am familiar with.
            </h3>
          </div>

          <div className="flex flex-col md:flex-row h-80 gap-14">
            {/* Left Side: Code Animation */}
            <div className="flex-1 text-white py-8 ">
              <h2 className="text-2xl font-bold mb-4">Code Animation</h2>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <pre className="whitespace-pre-wrap text-sm">
                  <code>{currentCode}</code>
                </pre>
              </div>
            </div>

            {/* Right Side: Skills Section */}
            <div className="flex-1 p-8">
       
                <div className="inline-flex flex-col">
                  <h5 className="text-gray-300 mb-4">Frontend Development</h5>
                  <ul className="flex flex-wrap gap-4 justify-center">
                    <li className="flex flex-col items-center">
                      <div className="flex flex-col items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                        <ReactIcon />
                      </div>
                    </li>
                    <li className="flex flex-col items-center">
                      <div className="flex flex-col items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                        <ReactIcon />
                      </div>
                    </li>
                    <li className="flex flex-col items-center">
                      <div className="flex flex-col items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                        <ReactIcon />
                      </div>
                    </li>
                    <li className="flex flex-col items-center">
                      <div className="flex flex-col items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                        <ReactIcon />
                      </div>
                    </li>
                 </ul>
                 

                 <h5 className="text-gray-300 mb-4 mt-6">Backend Development</h5>
                  <ul className="flex flex-wrap gap-4 justify-center">
                    <li className="flex flex-col items-center">
                      <div className="flex flex-col items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                        <ReactIcon />
                      </div>
                    </li>
                    <li className="flex flex-col items-center">
                      <div className="flex flex-col items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                        <ReactIcon />
                      </div>
                    </li>
                    <li className="flex flex-col items-center">
                      <div className="flex flex-col items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                        <ReactIcon />
                      </div>
                    </li>
                    <li className="flex flex-col items-center">
                      <div className="flex flex-col items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                        <ReactIcon />
                      </div>
                    </li>
                 </ul> 

                </div>

            </div>
          </div>
        </div>




        <div className="mt-4 md:mt-8 lg:mt-12">
  <h2 className="text-lg font- text-white text-center md:text-left md:text-xl">
    Most coded languages
  </h2>
  <br />
  <div className="flex flex-wrap items-center gap-2 md:gap-4 lg:gap-8">
    <div className="flex bg-gray-400/[0.15] items-center justify-center gap-2 p-2 md:px-3 md:text-sm text-xs rounded-md ring-1 ring-inset ring-gray-700 opacity-90">
      <span className="text-gray-400">
        #1 <span className="text-gray-300">JavaScript</span>
      </span>
    </div>
    <div className="flex bg-gray-400/[0.15] items-center justify-center gap-2 p-2 md:px-3 md:text-sm text-xs rounded-md ring-1 ring-inset ring-gray-700 opacity-90">
      <span className="text-gray-400">
        #2 <span className="text-gray-300">TypeScript</span>
      </span>
    </div>
   
    <div className="flex bg-gray-400/[0.15] items-center justify-center gap-2 p-2 md:px-3 md:text-sm text-xs rounded-md ring-1 ring-inset ring-gray-700 opacity-90">
      <span className="text-gray-400">
        #5 <span className="text-gray-300">CSS</span>
      </span>
    </div>
  </div>
</div>

      </section>
    </>
  );
}
