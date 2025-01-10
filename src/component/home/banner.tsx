"use client";
import Image from "next/image";
import { ArrowIcon, GitIcon } from "../icons";

export default function Banner() {
  return (
    <section
    id="hero"
    className="flex flex-col items-center justify-between py-16 gap-10 mt-10 text-center sm:text-left sm:mt-0 md:flex-row"
    style={{
      backgroundImage: "url('/images/shape.png')", // Replace with your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
  
      <div className=" container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl text-gray-500 font-medium mb-4">
              Hello there! 👋🏻
            </h3>
            <h1 className="text-5xl font-extrabold text-gray-500 leading-tight">
              I'm <span className="text-blue-600">Kartheeswari E</span>
            </h1>
            <p className="text-lg text-gray-500 mt-4">
              A passionate developer crafting amazing web experiences.
            </p>
            <div className="mt-6">
  <a
    href="#"
    className="relative inline-flex items-center px-4 py-2 text-blue-600 border-2 border-blue-600 text-sm font-semibold rounded-full hover:text-white hover:bg-blue-600 transition-all duration-300 ease-in-out group"
  >
    <span className="absolute inset-0 w-full h-full bg-blue-600 opacity-0 rounded-full group-hover:opacity-20 transition-opacity duration-300"></span>
    View Resume
    <i className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300">
      <ArrowIcon
        fill="currentColor" // Use currentColor to match the text color
        className="group-hover:fill-white transition-colors duration-300"
      />
    </i>
  </a>

</div>



          </div>
          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* Decorative Background Shape */}
            <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-full blur-2xl opacity-10 -z-10"></div>

            {/* Circular Image */}
            <div className="relative w-72 h-72 md:w-100 md:h-100 rounded-full overflow-hidden shadow-xl">
             
             
              <Image
                src="/images/heros.png"
                alt="Kartheeswari E"
                layout="fill"
                objectFit="cover"
              />
              
            </div>
            

         
          </div>
        </div>
      </div>
    </section>
  );
}
