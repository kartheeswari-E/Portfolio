export default function Project() {
    const projects = [
      {
        title: "Stroy Market – qurilish materiallari onlayn-do'kon",
        description:
          "In this project I worked with a frontend developer. So it is still under development.",
        image: "/images/hyrahotel.png",
        tags: ["JavaScript", "TypeScript", "CSS"],
        link: "#",
      },
      {
        title: "Hyra Hotel – Online Hotel Booking",
        description:
          "A fully functional hotel  booking platform built with React and Node.js.A fully functional hotel  booking platform built with React and Node.js.A fully functional hotel  booking platform built with React and Node.js.A fully functional hotel  booking platform built with React and Node.js.A fully functional hotel  booking platform built with React and Node.js.",
        image: "/images/hyrahotel.png",
        tags: ["React", "Node.js", "GraphQL"],
        link: "#",
      },
      // Add more projects as needed
    ];
  
    return (
      <div className="text-white min-h-screen flex flex-col py-12">
        {/* Header Section */}
        <header className="mb-16 px-4 text-center md:text-left">
          <h1 className="text-4xl font-bold text-green-500 mb-4">
            Work. Hobby. Open Source.
          </h1>
          <p className="text-lg text-gray-300">
            I&apos;m obsessed with side projects and building in public. Here you can
            navigate to <span className="text-green-500">14 different</span>{" "}
            websites, apps, and libraries I built. Some projects are still active,
            others have been discontinued.
          </p>
        </header>
  
        {/* Projects Section */}
        <section className="w-full px-4">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
         Projects done in Cron24 Technology
          </h2>
  
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 flex flex-col ${
                0=== 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 items-center mb-8 bg-gray-900 bg-opacity-40`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative aspect-w-16 aspect-h-9 bg-gray-700 rounded-md overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
  
              {/* Project Details */}
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold text-white-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{project.description}</p>
  
                <div className="flex mt-3 flex-wrap items-center gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="flex bg-gray-400/[0.15] items-center justify-center gap-2 p-2 md:px-3 text-xs rounded-md ring-1 ring-inset ring-gray-700 opacity-90"
                    >
                      <span className="text-gray-400">{tag}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-green-500 mt-4 inline-block hover:underline"
                >
                  Visit website →
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="w-full px-4">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
         Projects done in Infodazz
          </h2>
  
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 flex flex-col ${
                0=== 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 items-center mb-8 bg-gray-900 bg-opacity-40`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative aspect-w-16 aspect-h-9 bg-gray-700 rounded-md overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
  
              {/* Project Details */}
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold text-white-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{project.description}</p>
  
                <div className="flex mt-3 flex-wrap items-center gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="flex bg-gray-400/[0.15] items-center justify-center gap-2 p-2 md:px-3 text-xs rounded-md ring-1 ring-inset ring-gray-700 opacity-90"
                    >
                      <span className="text-gray-400">{tag}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-green-500 mt-4 inline-block hover:underline"
                >
                  Visit website →
                </a>
              </div>
            </div>
          ))}
        </section>



        <section className="w-full px-4">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
         Projects done when i doing course in Guvi
          </h2>
  
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 flex flex-col ${
                0=== 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 items-center mb-8 bg-gray-900 bg-opacity-40`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative aspect-w-16 aspect-h-9 bg-gray-700 rounded-md overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
  
              {/* Project Details */}
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold text-white-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{project.description}</p>
  
                <div className="flex mt-3 flex-wrap items-center gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="flex bg-gray-400/[0.15] items-center justify-center gap-2 p-2 md:px-3 text-xs rounded-md ring-1 ring-inset ring-gray-700 opacity-90"
                    >
                      <span className="text-gray-400">{tag}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-green-500 mt-4 inline-block hover:underline"
                >
                  Visit website →
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
  