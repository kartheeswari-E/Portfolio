"use client"

type StatusStyle = {
  color: string;
  bgColor: string;
  label: string;
};

type StatusStyles = {
  inprogress: StatusStyle;
  live: StatusStyle;
  pending: StatusStyle;
  error: StatusStyle;
};


export default function Project() {



  const projectsData = [
    {
      title: "Projects developed during my tenure at Cron24 Technology",
   projects : [

      {
        title: "Hyra – Airbnb Script",
        description:"It is an online room booking application. It has three distinct roles: user, admin, and host (or vendor). Hosts can list their rooms on this platform, while users can book rooms through the application and complete payments seamlessly. The application connects guests and hosts and includes a chat feature. Users also have the option to cancel their bookings.Admins can manage all actions performed by both users and hosts. The platform also includes cancellation policies, and each role has its own individual dashboard for better management and user experience.",
          image: "/images/hyraimage.png",
        tags: ["Firebase", "Stripe", "Nodemailer","Authentication","Context"],
        status: "inprogress",
       
      },
      {
        title: "Madurai Connect – Explore, Engage, and Experience Locally",
        description:
          "Madurai Connect is a local application with three distinct roles: user, admin, and host (or vendor). It has three divisions: listings, services, and events. Users can book events through the app and request services based on availability and nearby locations. The application highlights tourist attractions in Madurai and provides directions to them.In the listings section, hosts can list their shop items, functioning like an e-commerce platform. The app includes payment integration and displays information about councilors, ward members, and other local representatives. It offers comprehensive details about places in Madurai, making it a valuable resource for both locals and tourists.",
          image: "/images/madurai.png",
        tags: ["Razorpay", "Nodemailer","Authentication","Context"],
        status: "live",
      },
      {
        title: "Hyra Hotel – Online Hotel Booking",
        description:
         "Hyra Hotel is an online hotel/room booking application with three distinct roles: user, admin, and hotel owner (or vendor). Hotel owners can list their properties on this platform, while users can browse and book rooms seamlessly, completing payments through the app. Users also have the option to modify or cancel their bookings, with refunds processed based on the cancellation policy. A search feature is provided, allowing users to search based on their preferences, such as the number of adults, children, check-in and check-out dates, and location.",
        image: "/images/hyrahotels.png",
        tags: ["Stripe", "Nodemailer","Authentication","Context"],
        status: "live",
      },

    ]
  },
  {
    title: "Projects developed during my tenure at Infodazz",
    projects : [

      {
        title: "IJRES – International Journal Applications",
        description:"It is a platform for users who wish to publish their articles. It includes an admin panel for managing submissions. The concepts used in this project include CRUD operations, a text editor, the Multer package for storing PDFs, Helmet for security, authentication, Fetch for data retrieval, and NodeMailer for email notifications.",
             image: "/images/ssrg.png",
        tags: ["Multer", "Nodemailer","Authentication","Context"],
        status: "live",
       
      },
      {
        title: "SSRG – Seventh Sense Research Group",
        description:"It is a comprehensive journal application focused on engineering subjects. Users who wish to publish their articles can utilize this platform. It includes an admin panel and is divided into three roles: author, editor, and reviewer.The concepts used in this project include CRUD operations, a text editor, the Multer package for storing PDFs, Helmet for enhanced security, authentication, Fetch for data retrieval, and NodeMailer for email notifications."
         , image: "/images/ijres.png",
         tags: ["Multer", "Nodemailer","Authentication","Context"],
        status: "live",
      },
  

   
      // Add more projects as needed
    ]

  }
] ;

    const projectGuvi = [

      {
        title: "Zen Class Student Dashboard",
        description:"Created like a actual Zen Class Student Portal and the UI is more similar to the actual Zen.It have 2 main roles Student and Mentor.Concepts which i used is CRUD, Role Based Authentication,Fetch,NodeMailer.", 
        image: "/images/guvi.png",
        frontendLink: "https://github.com/kartheeswari-E/zen-student-dashboard-frontend.",
        backendLink: "https://github.com/kartheeswari-E/zen-student-dashboard-backend",
        liveLink: "https://splendorous-travesseiro-cb808f.netlify.app/",
        status: "live",
      
       
      },
      {
        title: "CRM Application",
        description:"Developed a car rental website with features such as resolving customer queries and providing an option for users to select experts of their choice. The concepts used include authentication, payment gateway integration (Razorpay), Fetch for data retrieval, and NodeMailer for email notifications."  , image: "/images/car.png",
   
         frontendLink: "https://github.com/kartheeswari-E/Crm-frontend",
        backendLink: "https://github.com/kartheeswari-E/Crm_backend",
        liveLink: "https://heroic-palmier-84480e.netlify.app/",
        status: "live",
      },
      {
        title: "Chat Application",
        description:"Developed a chat application where users with the same room ID can send messages to each other in real time. The concepts used include authentication, Socket.io for real-time communication, Fetch for data handling, and NodeMailer for email notifications."  , image: "/images/chat.png",
   
          backendLink:  "https://github.com/kartheeswari-E/chatapp-backend",
       frontendLink:"https://github.com/kartheeswari-E/chat-app-frontend",
        liveLink: "https://legendary-tulumba-c13295.netlify.app/",
        status: "live",
      },

   
      // Add more projects as needed
    ];




    const statusStyles:StatusStyles = {
      inprogress: {
        color: "text-yellow-600",
        bgColor: "bg-yellow-500",
        label: "In Progress",
      },
      live: {
        color: "text-green-600",
        bgColor: "bg-green-500",
        label: "Live",
      },
      pending: {
        color: "text-gray-600",
        bgColor: "bg-gray-400",
        label: "Pending",
      },
      error: {
        color: "text-red-600",
        bgColor: "bg-red-500",
        label: "Error",
      },
    };
  
    return (
      <div className="text-white min-h-screen flex flex-col py-12">
        {/* Header Section */}
        <header className="mb-16 px-4 text-center md:text-left">
          <h3 className="text-2xl font-bold text-green-500 mb-4">
          My Projects: A Journey Through Code and Creativity
          </h3>
          <p className="text-lg text-gray-600">
          Each project represents a significant milestone in my professional journey, highlighting my dedication to innovative problem-solving, technical excellence, and knowledge sharing within the development community.
          </p>
        </header>
  
        {/* Projects Section */}
        {projectsData.map((section, sectionIndex) => (
        <section key={sectionIndex} className="w-full px-4">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            {section.title}
          </h2>
        {section.projects.map((project, index) => {
          const { color, bgColor, label } =
          statusStyles[project.status as keyof StatusStyles] || statusStyles["pending"];
            return (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-6 flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 items-center mb-8 bg-gray-900 bg-opacity-40`}
              >
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative aspect-w-16 aspect-h-9 bg-gray-700 rounded-md overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center space-x-2 mt-2">
                    <h3 className="text-xl font-bold text-white-400">
                      {project.title}
                    </h3>
                    <div className={`w-2 h-2 rounded-full ${bgColor}`}></div>
                    <span className={`font-medium ${color}`}>{label}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2 text-justify">
                    {project.description}
                  </p>
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
                </div>
              </div>
            );
          })}
        </section>
      ))}



        <section className="w-full px-4">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
          Projects completed while pursuing my course at Guvi
          </h2>
  
          <div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  data-aos="fade-up"
  data-aos-delay="200"
>
  {projectGuvi.map((project, index) => (
    <div
      key={index}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="p-4">
        <h4 className="text-lg font-semibold text-white">{project.title}</h4>
        <p className="text-gray-400 text-sm mt-2 text-justify">{project.description}</p>

        {/* Project Links */}
        <div className="flex items-center gap-2 mt-4">
          <a
            href={project.frontendLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 bg-gray-400/[0.15] p-1 rounded hover:text-blue-400 flex items-center"
          >
            frontend code
          </a>

          <a
            href={project.backendLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 bg-gray-400/[0.15] p-1 rounded hover:text-blue-400 flex items-center"
          >
             backend code
          </a>

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 bg-gray-400/[0.15] p-1 rounded hover:text-blue-400 flex items-center"
          >
     Live
          </a>
        </div>
      </div>
    </div>
  ))}
</div>


         
        </section>
      </div>
    );
  }
  