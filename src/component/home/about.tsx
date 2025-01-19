"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <section id="about" className="text-white py-32">
      <div className="container ">
        {/* <h2 className="text-4xl font-bold text-yellow-300 mb-12 text-center">
          About Me
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-6">
            <span className="text-indigo-400 text-xl">About Me</span>
            <h4 className="text-2xl font-semibold">
              <span className="mt-2">
                {" "}
                Senior Full Stack and Frontend Developer.
              </span>
            </h4>
            <p className="text-gray-400 text-justify">
              A passionate Full stack developer with the goal of working on
              projects that solve problems with thoughtful UI design, creating
              intuitive, dynamic user experiences powered by strong backends. I
              primarily work with the MERN stack among the full-stack
              technologies and have gained valuable experience working with
              various startups. The satisfaction that I get while working and
              completing every project motivates me to do more and more. And I
              believe, I have done something creatively.
            </p>

            {/* Centered Button */}
            <div className="flex">
              <button onClick={()=>router.push('/journey')} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md shadow-md hover:bg-gray-700">
                More...
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Timeline Item 1 */}
             

              {/* Timeline Item 2 */}
              <div className="relative pl-8 sm:pl-32  group">
                <div className="font-medium text-indigo-500 mb-1 sm:mb-0">
                  Joined 2nd Job{" "}
                  <time className="sm:absolutev inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-500 bg-emerald-900 rounded-full">
                    10 months
                  </time>
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-800 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-black after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <div className="text-xl font-bold text-gray-200">
                    Senior Full Stack Developer | Team Lead
                  </div>
                </div>
                <div className="text-gray-400">
                  Cron 24 Technology, Madurai.
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-8 sm:pl-32  group">
                <div className="font-medium text-indigo-500 mb-1 sm:mb-0">
                  Joined 1st Job{" "}
                  <time className="sm:absolutev inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-500 bg-emerald-900 rounded-full">
                    1.3 years
                  </time>
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-800 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-black after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <div className="text-xl font-bold text-gray-200">
                    Full Stack Developer (MERN)
                  </div>
                </div>
                <div className="text-gray-400">Infodazz, Madurai.</div>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative pl-8 sm:pl-32  group">
                <div className="font-medium text-indigo-500 mb-1 sm:mb-0">
                   Full stack development course{" "}
                  {/* <time className="sm:absolutev inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-500 bg-emerald-900 rounded-full">
                    May, 2021
                  </time> */}
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-800 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-black after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <div className="text-xl font-bold text-gray-200">
                    Guvi IIT Madras
                  </div>
                </div>
                <div className="text-gray-400">
                  Continuously learning and creating dynamic, user-friendly web
                  applications.
                </div>
              </div>


              <div className="relative pl-8 sm:pl-32  group">
              <div className="font-medium text-indigo-500 mb-1 sm:mb-0">
                 Completed Bachelor Degree{" "}
                  {/* <time className="sm:absolutev inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-500 bg-emerald-900 rounded-full">
                    Aug, 2022
                  </time>  */}
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-800 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-black after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <div className="text-xl font-bold text-gray-200">
                   Computer Science Engineering
                  </div>
                </div>
                <div className="text-gray-400">
                Government College of Engineering,Thanjavur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
