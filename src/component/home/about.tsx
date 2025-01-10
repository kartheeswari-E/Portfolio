"use client";

export default function About() {
  return (
    <section id="about" className="text-white py-32">
      <div className="container ">
        {/* <h2 className="text-4xl font-bold text-yellow-300 mb-12 text-center">
          About Me
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-6">
          <span className="text-indigo-400 text-xl">About Me
          </span>
            <h4 className="text-2xl font-semibold">
          
             <span className="mt-2"> Full Stack and Frontend Developer.</span>
            </h4>
            <p className="text-gray-400  text-justify">
              A passionate Full stack developer with the goal of working on
              projects that solve problems with thoughtful UI design, creating
              intuitive, dynamic user experiences powered by strong backends. I
              primarily work with the MERN stack among the full-stack
              technologies. The satisfaction that I get while working and
              completing every project motivates me to do more and more. And I
              believe, I have done something creatively.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="relative pl-8 sm:pl-32  group">
                <div className="font-medium text-indigo-500 mb-1 sm:mb-0">
                  The Beginning  <time className="sm:absolutev inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-500 bg-emerald-900 rounded-full">
                    May, 2021
                  </time>
                </div>  
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-800 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-black after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  {/* <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-500 bg-emerald-900 rounded-full">
                    May, 2020
                  </time> */}
                  <div className="text-xl font-bold text-gray-200">
                    Started my journey as a developer
                  </div>
                </div>
                <div className="text-gray-400">
                  Learned the basics of programming and web development.
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-8 sm:pl-32  group">
                <div className="font-medium text-indigo-500 mb-1 sm:mb-0">
                  The Milestone
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-800 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-black after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  {/* <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-500 bg-emerald-900 rounded-full">
                    May, 2021
                  </time> */}
                  <div className="text-xl font-bold text-gray-200">
                    First Full-Stack Project
                  </div>
                </div>
                <div className="text-gray-400">
                  Built a full-stack application using the MERN stack.
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-8 sm:pl-32  group">
                <div className="font-medium text-indigo-500 mb-1 sm:mb-0">
                  The Achievement
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-800 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-black after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  {/* <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-500 bg-emerald-900 rounded-full">
                    May, 2022
                  </time> */}
                  <div className="text-xl font-bold text-gray-200">
                    Joined Infodazz
                  </div>
                </div>
                <div className="text-gray-400">
                  Began working as a Full Stack Developer (MERN).
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative pl-8 sm:pl-32  group">
                <div className="font-medium text-indigo-500 mb-1 sm:mb-0">
                  The Present
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-800 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-black after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  {/* <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-500 bg-emerald-900 rounded-full">
                    May, 2023
                  </time> */}
                  <div className="text-xl font-bold text-gray-200">
                    Building Dynamic Projects
                  </div>
                </div>
                <div className="text-gray-400">
                  Continuously learning and creating dynamic, user-friendly web
                  applications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
