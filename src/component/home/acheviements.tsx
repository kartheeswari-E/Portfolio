export default function AnimatedSection() {
  const images = [
    "/images/image1.png", // Replace with your image paths
    "/images/image2.png",
    "/images/image4.png",
    "/images/image3.png",
  ];

  const timelineData = [
   
    {
      title: "Employee of the Month",
      date: "August 2024",
      description: "Recognized for outstanding performance and teamwork.",
    },

    {
      title: "Employee of the Month",
      date: "April 2024",
      description: "Recognized for outstanding performance and teamwork.",
    },

    {
      title: "Lead Promotion",
      date: "April 2024",
      badge: "Present",
      description: "Promoted to Team Lead for exemplary leadership skills.",
    },
   
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4">
      {/* Glassy Center Content */}
      <h1 className="text-3xl md:text-4xl font-extrabold">Achievements</h1>
      <div className="relative z-10 w-full md:w-3/4 lg:w-1/2 backdrop-blur-md rounded-lg p-6 md:p-8 text-center shadow-lg">
       
        <ul role="list" className="space-y-6 mt-6">
          {timelineData.map((item, index) => (
            <li key={index} className="relative flex flex-col gap-y-2 md:flex-row md:gap-x-4">
              <div className="flex-auto p-3 rounded-md ring-1 ring-inset ring-gray-700">
                <div className="flex justify-between gap-x-4">
                  <div className="text-sm leading-5 text-gray-500">
                    <span className="font-medium text-white">{item.title}</span>
                    {item.badge && (
                      <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-medium text-purple-400 bg-purple-400/10 rounded-md ring-1 ring-inset ring-purple-400/30">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <time
                    dateTime={item.date}
                    className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                  >
                    {item.date}
                  </time>
                </div>
                {item.description && (
                  <p className="text-xs leading-6 text-gray-500">{item.description}</p>
                )}
              
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Left Side Images */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 p-4">
        <div className="relative w-40 h-40 md:w-64 md:h-64">
          <img
            src={images[0]}
            alt="Achievement 1"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 animate-moveLeftRight -bottom-8 md:-bottom-16 w-full h-fit">
            <img
              src={images[1]}
              alt="Achievement 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Right Side Images */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 p-4">
        <div className="relative w-40 h-40 md:w-64 md:h-64">
          <img
            src={images[2]}
            alt="Achievement 3"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 animate-moveLeftRight -top-8 md:-top-16 w-full h-fit">
            <img
              src={images[3]}
              alt="Achievement 4"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
