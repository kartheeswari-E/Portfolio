"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AboutIcon,
  BlueCircleTickIcon,
  EmailIcon,
  GitIcon,
  HomeIcon,
  LinkedinIcon,
  ProjectIcon,
  SkillIcon,
} from "../icons";

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className={`block py-4  w-full rounded-none px-4 fixed top-0 z-50 border-0 transition-all duration-300 ${
    //   isScrolled ? "bg-black shadow-md" : "bg-transparent"
    // }`}>

<nav
      className={`block py-2  w-full rounded-none px-4 fixed top-0 z-50 border-0 transition-all duration-300 ${
        isScrolled ? " bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto"
         >
      {/* Top Navbar */}
      <div className="max-w-screen-xl flex flex-wrap items-center py-4 justify-between mx-auto">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black text-white">
            Kartheeswari
          </span>{" "}
          <BlueCircleTickIcon />
        </a>

        {/* Menu items hidden on mobile */}
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-400 hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="block py-2 px-3 text-gray-400 hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#skill"
                className="block py-2 px-3 text-gray-400 hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className="block py-2 px-3 text-gray-400 hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Project
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons always visible */}
        <div className="flex gap-2 items-center">
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <GitIcon />
            </span>
          </button>
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <LinkedinIcon />
            </span>
          </button>

          <button
  onClick={() => window.location.href = "mailto:karthiieeswari@gmail.com"}
  className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30"
  type="button"
>
  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <EmailIcon />
  </span>
</button>

        </div>
      </div>

      {/* Bottom Mobile Menu */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white shadow-lg md:hidden">
        <ul className="flex justify-around items-center py-2">
          <li>
            <Link href="/" className="flex flex-col items-center">
              <span className="w-6 h-6">
                <HomeIcon />
              </span>
              <span className="text-sm">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/#about" className="flex flex-col items-center">
              <span className="w-6 h-6">
                <AboutIcon />
              </span>
              <span className="text-sm">About</span>
            </Link>
          </li>
          <li>
            <Link href="/#skill" className="flex flex-col items-center">
              <span className="w-6 h-6">
                <SkillIcon />
              </span>
              <span className="text-sm">Skill</span>
            </Link>
          </li>
          <li>
            <Link href="/project" className="flex flex-col items-center">
              <span className="w-6 h-6">
                <ProjectIcon />
              </span>
              <span className="text-sm">Project</span>
            </Link>
          </li>
        </ul>
      </div></div>  
    </nav>    
    /* </div> */
    
  );
}
