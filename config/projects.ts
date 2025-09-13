import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "flickstar",
    companyName: "Flickstar",
    type: "Professional",
    category: ["Web Dev", "Frontend", "Social Media"],
    shortDescription:
      "Built a feature-rich social media app with real-time UI, multi-language support, payments, and secure authentication.",
    websiteLink: "https://flickstar.net",
    techStack: [
      "React",
      "Redux",
      "MongoDB",
      "Firebase",
      "Stripe",
      "Google Maps API",
      "i18n",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-19-01"),
    companyLogoImg: "/projects/flickstar/flickstar.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Responsive, SEO-optimized pages introducing Flickstar features and user benefits.",
        imgArr: [
          "/projects/flickstar/flickstar.png",
          "/projects/flickstar/flickstar3.png",
          "/projects/flickstar/flickstar2.png",
          "/projects/flickstar/flickstar1.png",
          "/projects/flickstar/flickstar4.png",
          "/projects/flickstar/flickstar5.png",
          "/projects/flickstar/flickstar6.png",
          "/projects/flickstar/flickstar7.png",
          "/projects/flickstar/flickstar8.png",
          "/projects/flickstar/flickstar9.png",
          "/projects/flickstar/flickstar10.png",
          "/projects/flickstar/flickstar11.png",
          "/projects/flickstar/flickstar12.png",
          "/projects/flickstar/flickstar13.png",
          "/projects/flickstar/flickstar14.png",
          "/projects/flickstar/flickstar15.png",
          "/projects/flickstar/flickstar16.png",
          "/projects/flickstar/flickstar17.png",
          "/projects/flickstar/flickstar18.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Flickstar is a feature-rich social media platform I developed to combine real-time interactivity, scalability, and security. The app enables users to upload and edit media, interact through notifications, and seamlessly use drag-and-drop features for a dynamic user experience.",
        "To enhance accessibility, I integrated multi-language localization with i18n and content translation via the Google Translate API. The platform also incorporates Stripe and PayPal for secure payments, Google Maps for location-based features, and Firebase for push notifications.",
        "I transformed Figma designs into responsive, SEO-optimized UIs while focusing on performance optimization through lazy loading, caching, and structured metadata. Security was ensured using JWT, OAuth, and industry best practices for protecting user data.",
      ],
      bullets: [
        "Developed a feature-rich social media app using React.js, Redux, and React Router.",
        "Built real-time UI features like media uploads, drag-and-drop, filters, text, GIFs, and notifications.",
        "Implemented multi-language localization (i18n) and Google Translate API integration.",
        "Integrated Stripe/PayPal payments, Google Maps, and Firebase notifications.",
        "Converted Figma designs into pixel-perfect, responsive, and SEO-optimized UIs.",
        "Optimized performance via lazy loading, caching, and structured metadata.",
        "Secured application with JWT, OAuth, and best practices for data protection.",
      ],
    },
  },
  {
    id: "mern-ecommerce",
    companyName: "MERN E-Commerce App",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "E-Commerce"],
    shortDescription:
      "Developed a MERN stack application with authentication, product management, and payment gateway integration.",
    websiteLink: "https://github.com/ssengar13/E-Commerce-App-Frontend",
    techStack: [
      "MongoDB",
      "express.js",
      "React",
      "Node.js",
      "Redux",
    ],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/projects/amazify/amazify.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Responsive landing page highlighting featured products and categories.",
        imgArr: ["/projects/amazify/amazify.png",
          "/projects/amazify/amazify1.png",
          "/projects/amazify/amazify2.png",
          "/projects/amazify/amazify3.png",
          "/projects/amazify/amazify4.png",
          "/projects/amazify/amazify5.png",
          "/projects/amazify/amazify6.png",
          "/projects/amazify/amazify7.png",
        ],
      },
      {
        title: "Admin Dashboard",
        description:
          "Dedicated admin panel to manage users, products, and orders efficiently.",
        imgArr: [
          "/projects/amazify/amazify8.png",
          "/projects/amazify/amazify9.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I developed a complete MERN stack application that serves as a full-featured e-commerce platform. The project includes user authentication, product management, order handling, and secure payment integrations.",
        "The frontend was built with React.js and Redux for state management, ensuring a responsive and dynamic user interface. The backend utilized Node.js and Express.js, with MongoDB serving as the database to handle product and user data.",
        "A robust admin dashboard was implemented to allow administrators to manage users, products, and orders effectively.",
        "This project helped me strengthen my skills across the MERN stack while focusing on performance, scalability, and security best practices.",
      ],
      bullets: [
        "Built a full-stack e-commerce platform using the MERN stack.",
        "Implemented secure user authentication and authorization with JWT.",
        "Developed product management with full CRUD operations.",
        "Created an admin panel for managing users, products, and orders.",
        "Optimized frontend with React.js and Redux for state management.",
      ],
    },
  },
  {
    id: "contact-center-solution",
    companyName: "Contact Center Solution",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Engineered a multi-channel communication platform with real-time dashboards to improve agent productivity, featuring separate admin and user portals.",
    githubLink: "",
    techStack: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-07-01"),
    companyLogoImg: "/projects/contact-center/contact.png",
    pagesInfoArr: [
      {
        title: "User Dashboard",
        description: "User platform with chat, email, and calendar access",
        imgArr: ["/projects/contact-center/contact.png",
          "/projects/contact-center/contact 1.png",
          "/projects/contact-center/contact 2.png",
          "/projects/contact-center/contact 3.png",
          "/projects/contact-center/contact 4.png",
          "/projects/contact-center/contact 5.png",
          "/projects/contact-center/contact 6.png",
          "/projects/contact-center/contact 7.png",
          "/projects/contact-center/contact 8.png",
          "/projects/contact-center/contact 9.png",],
      },
      {
        title: "Admin Dashboard",
        description:
          "Admin panel for managing agents, reports, and monitoring communication in real-time",
        imgArr: [
          "/projects/admin/admin.png",
          "/projects/admin/admin 1.png",
          "/projects/admin/admin 2.png",
          "/projects/admin/admin 3.png",
          "/projects/admin/admin 4.png",
          "/projects/admin/admin 5.png",
          "/projects/admin/admin 6.png",
          "/projects/admin/admin 7.png",
          "/projects/admin/admin 8.png",
          "/projects/admin/admin 9.png",
          "/projects/admin/admin 10.png",
          "/projects/admin/admin 11.png",
          "/projects/admin/admin 12.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Contact Center Solution is a web-based multi-channel communication tool developed using PHP, Bootstrap, and MySQL. It provides separate platforms for both admins and users, ensuring smooth communication and centralized management.",
        "The user portal includes chat, email, and calendar integration to streamline communication workflows. On the other hand, the admin panel provides advanced features such as agent management, detailed reporting, and real-time dashboards.",
        "The system was designed with performance, usability, and scalability in mind, enabling teams to enhance productivity and maintain seamless communication across channels.",
      ],
      bullets: [
        "Built separate admin and user portals for efficient role-based access",
        "Implemented multi-channel communication (chat, email, calendar)",
        "Designed responsive UI using HTML, CSS, and Bootstrap",
        "Developed real-time reporting and analytics dashboards",
        "Integrated MySQL for secure data storage and management",
        "Enhanced agent productivity through streamlined workflows",
      ],
    },
  },
  {
    id: "unified-dialer",
    companyName: "Unified Dialer",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a comprehensive call center solution with dedicated Admin and Agent modules, streamlining operations and enhancing communication efficiency.",
    websiteLink: "",
    techStack: ["HTML", "CSS", "Bootstrap", "Javascript"],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-10-01"),
    companyLogoImg: "/projects/dialer/dialer.png",
    pagesInfoArr: [
      {
        title: "Agent Dashboard",
        description:
          "Seamless management of users, scripts, IVRs, and call queues with an intuitive interface.",
        imgArr: ["/projects/dialer/dialer.png",
          "/projects/dialer/dialer 1.png",
          "/projects/dialer/dialer 2.png",
          "/projects/dialer/dialer 3.png",
          "/projects/dialer/dialer 4.png",
          "/projects/dialer/dialer 5.png",
          "/projects/dialer/dialer 6.png",
          "/projects/dialer/dialer 7.png",
          "/projects/dialer/dialer 8.png",],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "For Unified Voice Communication, I designed and implemented a robust call center front-end solution tailored to both administrators and agents. The system provides a role-based experience, ensuring smooth operations and effective communication management.",
        "The Admin module empowers administrators with control over users, scripts, IVRs, and call queues. Its user-friendly interface makes it easy to configure workflows and monitor activity in real time.",
        "The Agent module is built to streamline daily tasks, offering agents quick access to scripts and real-time updates on call queues. This ensures better customer interactions and higher operational efficiency.",
        "The entire platform was crafted with HTML, CSS, Bootstrap, and JavaScript, focusing on responsiveness, usability, and scalability to meet diverse business needs.",
      ],
      bullets: [
        "Developed separate Admin and Agent modules for tailored experiences",
        "Enabled admin control over users, IVRs, scripts, and call queues",
        "Designed agent interface for efficient script access and call handling",
        "Integrated real-time queue monitoring for performance optimization",
        "Built responsive UI with HTML, CSS, and Bootstrap",
        "Enhanced productivity and customer satisfaction through intuitive design",
      ],
    },
  },
  {
    id: "real-time-chat-support",
    companyName: "Real-time Chat Support",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Crafted a real-time one-to-one chat application for customer support, enabling seamless communication with messaging, file sharing, and session management.",
    websiteLink: "https://github.com/ssengar13/Real-time-chat-support",
    techStack: ["HTML", "CSS", "Javascript", "PHP", "MySQL", "Bootstrap"],
    startDate: new Date("2022-04-01"),
    endDate: new Date("2022-06-01"),
    companyLogoImg: "/projects/chat/chat.png",
    pagesInfoArr: [
      {
        title: "User Chat Interface",
        description:
          "Clean and intuitive chat window for one-to-one real-time messaging.",
        imgArr: ["/projects/chat/chat.png",
          "/projects/chat/chat 1.png",
          "/projects/chat/chat 2.png",
          "/projects/chat/chat 3.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Real-time Chat Support project is a one-to-one communication platform built to streamline customer support interactions. Using PHP, MySQL, and JavaScript, the system ensures smooth and reliable messaging.",
        "The platform enables real-time text communication along with file and image sharing, making it versatile for customer support scenarios. Each feature is designed with usability and efficiency in mind.",
        "A session management functionality allows users or agents to gracefully end conversations, ensuring clarity and closure in support workflows.",
        "With a responsive Bootstrap-based UI, the application delivers a seamless user experience across devices while maintaining robust backend support with PHP and MySQL.",
      ],
      bullets: [
        "Built a one-to-one real-time chat system for customer support.",
        "Implemented file and image sharing for enriched communication.",
        "Added chat session management for structured interactions.",
        "Developed responsive UI with HTML, CSS, and Bootstrap.",
        "Leveraged PHP and MySQL for backend logic and data persistence.",
        "Designed with user-friendly workflows to optimize support efficiency.",
      ],
    },
  },
  {
    id: "prop-majestic",
    companyName: "Prop Majestic",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a dynamic Real Estate Management System with an intuitive admin panel and user-friendly property browsing experience.",
    websiteLink: "https://propmajestic.com/",
    techStack: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "MySQL"],
    startDate: new Date("2023-03-01"),
    endDate: new Date("2022-10-01"),
    companyLogoImg: "/projects/propmajestic/propmajestic.png",
    pagesInfoArr: [
      {
        title: "Admin Dashboard",
        description:
          "Comprehensive admin panel for managing property listings, images, and details.",
        imgArr: ["/projects/propmajestic/propmajestic.png",
          "/projects/propmajestic/propmajestic 2.png",
          "/projects/propmajestic/propmajestic 3.png",
          "/projects/propmajestic/propmajestic 4.png",
          "/projects/propmajestic/propmajestic 5.png",
          "/projects/propmajestic/propmajestic 6.png",
          "/projects/propmajestic/propmajestic 7.png",
          "/projects/propmajestic/propmajestic 8.png"
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Prop Majestic is a dynamic Real Estate Management System developed to streamline property management and enhance the browsing experience for end users.",
        "On the administrative side, the system provides a powerful dashboard where admins can easily manage property listings, upload images, update details, and oversee enquiries.",
        "For visitors, the platform offers an intuitive property search experience with advanced filters for location, price, and type. Each property detail page includes comprehensive information along with an image gallery, ensuring users can make informed decisions.",
        "The system was built using PHP and MySQL for backend management, with a responsive Bootstrap-powered front end to ensure accessibility across devices.",
        "By combining ease of management for admins with a seamless browsing experience for users, the platform delivers value for both property managers and prospective buyers.",
      ],
      bullets: [
        "Developed a dynamic Real Estate Management System using PHP and MySQL.",
        "Designed a responsive and user-friendly interface with HTML, CSS, Bootstrap, and JavaScript.",
        "Implemented an admin dashboard for effortless property management.",
        "Enabled advanced search filters for users to find properties by location, budget, and type.",
        "Created detailed property pages with image galleries and enquiry forms.",
        "Ensured responsive design for optimal usability across devices.",
        "Enhanced engagement with interactive features and intuitive navigation.",
      ],
    },
  },
  {
    id: "arjiteks-consulting",
    companyName: "Arjiteks Consulting LLP",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Designed and developed the corporate website for Arjiteks Consulting LLP, highlighting AI and CPaaS solutions with a modern, responsive design.",
    websiteLink: "https://arjiteks.com/",
    techStack: ["HTML", "CSS", "Bootstrap", "Javascript"],
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-07-01"),
    companyLogoImg: "/projects/arjiteks/arjiteks.png",
    pagesInfoArr: [
      {
        title: "Home Page",
        description:
          "Sleek and modern homepage showcasing AI and CPaaS expertise, with easy navigation to products and services.",
        imgArr: [
          "/projects/arjiteks/arjiteks.png",
          "/projects/arjiteks/arjiteks1.png",
          "/projects/arjiteks/arjiteks2.png",
          "/projects/arjiteks/arjiteks3.png",
          "/projects/arjiteks/arjiteks4.png",
          "/projects/arjiteks/arjiteks5.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Arjiteks Consulting LLP is a leading software company specializing in AI-powered solutions and CPaaS technologies. I designed and developed their corporate website to reflect their innovation-driven identity.",
        "The website was built using HTML, CSS, Bootstrap, and JavaScript, ensuring a fully responsive design that adapts seamlessly across devices. The layout emphasizes clarity and professionalism, aligning with the company’s brand values.",
        "The platform showcases Arjiteks’ range of products and services while highlighting their expertise in AI and communication solutions. Key sections include a modern homepage, detailed service pages, and a contact form for easy client interaction.",
        "By creating an engaging and intuitive interface, the website successfully positions Arjiteks Consulting LLP as a trusted player in the AI and CPaaS space.",
      ],
      bullets: [
        "Developed a corporate website for Arjiteks Consulting LLP using HTML, CSS, Bootstrap, and JavaScript.",
        "Designed a sleek, responsive, and user-friendly interface for seamless browsing across devices.",
        "Showcased AI-powered solutions, CPaaS offerings, and software products effectively.",
        "Implemented structured layouts for products, services, company profile, and contact forms.",
        "Strengthened the company’s digital presence with a modern and professional website.",
      ],
    },
  },
  {
    id: "unified-voice",
    companyName: "Unified Voice Communication Pvt. Ltd.",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a comprehensive company website for Unified Voice Communication with product showcases, blogs, demo requests, and pricing sections.",
    websiteLink: "https://github.com/ssengar13/Unifed-Website",
    techStack: ["HTML", "CSS", "Bootstrap", "Javascript"],
    startDate: new Date("2023-08-01"),
    endDate: new Date("2023-10-01"),
    companyLogoImg: "/projects/unified/unified.png",
    pagesInfoArr: [
      {
        title: "Home Page",
        description:
          "Modern landing page introducing Unified Voice Communication, with quick access to products, services, and key offerings.",
        imgArr: [
          "/projects/unified/unified.png",
          "/projects/unified/unified 1.png",
          "/projects/unified/unified 2.png",
          "/projects/unified/unified 3.png",
          "/projects/unified/unified 4.png",
          "/projects/unified/unified 5.png",
          "/projects/unified/unified 6.png",
          "/projects/unified/unified 7.png",
          "/projects/unified/unified 8.png",
          "/projects/unified/unified 9.png",
          "/projects/unified/unified 10.png",
          "/projects/unified/unified 11.png",
          "/projects/unified/unified 12.png",
          "/projects/unified/unified 13.png",
          "/projects/unified/unified 14.png",
          "/projects/unified/unified 15.png",
          "/projects/unified/unified 16.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Unified Voice Communication Pvt. Ltd. is a technology-driven company offering advanced communication solutions. I developed their corporate website to provide a robust online platform that strengthens the brand’s digital presence.",
        "The website was designed using HTML, CSS, Bootstrap, and JavaScript to deliver a clean, responsive, and engaging user experience. Its structure includes dedicated sections for products, services, blogs, demo requests, and pricing plans.",
        "Special attention was given to user engagement and navigation, ensuring visitors can easily explore services and request tailored demos. The modern aesthetic aligns with the company’s vision of innovation and accessibility.",
        "Through this project, I helped Unified Voice Communication establish a strong and professional digital identity that enhances brand credibility and customer interaction.",
      ],
      bullets: [
        "Developed a fully responsive corporate website for Unified Voice Communication Pvt. Ltd.",
        "Showcased company products, VoIP services, and communication solutions with detailed pages.",
        "Designed an engaging blog section to share updates and insights with users.",
        "Implemented pricing and plan options with demo request functionality.",
        "Built a modern, user-friendly design for seamless navigation across devices.",
        "Enhanced brand credibility and online presence with a professional web platform.",
      ],
    },
  },
  {
    id: "netflix-youtube-clone",
    companyName: "Netflix & YouTube Clone",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Built Netflix and YouTube clone applications with ReactJS, Firebase, and API integrations, showcasing advanced UI, responsive design, and real-time features.",
    websiteLink: "https://github.com/ssengar13",
    techStack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Javascript",
      "React",
      "Firebase",
    ],
    startDate: new Date("2022-11-01"),
    endDate: new Date("2023-01-15"),
    companyLogoImg: "/projects/netflix/netflix.png",
    pagesInfoArr: [
      {
        title: "Netflix Clone",
        description:
          "A React.js and Firebase-powered streaming platform clone featuring authentication, personalized dashboards, and dynamic movie/TV recommendations. Designed with Bootstrap and SCSS for a responsive, polished UI.",
        imgArr: [
          "/projects/netflix/netflix.png",
          "/projects/netflix/netflix 1.png",
          "/projects/netflix/netflix 2.png",
          "/projects/netflix/netflix 3.png",
          "/projects/netflix/netflix 4.png",
        ],
      },
      {
        title: "YouTube Clone",
        description:
          "A React.js application integrating the YouTube Data API, allowing users to explore and filter videos, watch content, and interact with features like likes and comments. Styled with Tailwind CSS for a modern, responsive design.",
        imgArr: [
          "/projects/youtube/youtube.png",
          "/projects/youtube/youtube 1.png",
          "/projects/youtube/youtube 2.png",
          "/projects/youtube/youtube 3.png",
          "/projects/youtube/youtube 4.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project combines two popular streaming platform clones—Netflix and YouTube—demonstrating my expertise in ReactJS, modern CSS frameworks, and API integration.",
        "The Netflix Clone was developed using React.js and Firebase, providing secure authentication, dynamic content recommendations, and a seamless multi-device experience with Bootstrap and SCSS.",
        "The YouTube Clone leverages the YouTube Data API to enable category-based video exploration, real-time interactions such as comments and likes, and responsive video playback. Tailwind CSS was used to deliver a clean, mobile-friendly UI.",
        "Together, these projects highlight my ability to build scalable, user-focused applications with engaging interfaces, API-driven functionality, and responsive design principles.",
      ],
      bullets: [
        "Developed Netflix and YouTube clone applications as personal projects.",
        "Built with ReactJS for dynamic front-end functionality and Firebase for authentication.",
        "Designed responsive UIs using Bootstrap + SCSS (Netflix Clone) and Tailwind CSS (YouTube Clone).",
        "Integrated YouTube Data API for video search, categories, comments, and playback.",
        "Implemented personalized dashboards and recommendation features for Netflix Clone.",
        "Showcased expertise in front-end development, API integration, and modern styling frameworks.",
      ],
    },
  },
  {
    id: "bloomify",
    companyName: "Bloomify",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed Bloomify, an elegant online flower shop with a responsive design and seamless browsing experience.",
    websiteLink: "https://ssengar13.github.io/Bloomify/",
    techStack: ["HTML", "CSS", "Bootstrap", "Javascript"],
    startDate: new Date("2023-02-01"),
    endDate: new Date("2023-03-15"),
    companyLogoImg: "/projects/bloomify/bloomify.png",
    pagesInfoArr: [
      {
        title: "Home Page",
        description:
          "A welcoming landing page showcasing seasonal offers and featured flower collections.",
        imgArr: [
          "/projects/bloomify/bloomify1.png",
          "/projects/bloomify/bloomify2.png",
          "/projects/bloomify/bloomify3.png",
          "/projects/bloomify/bloomify4.png",
          "/projects/bloomify/bloomify5.png",
          "/projects/bloomify/bloomify6.png",
          "/projects/bloomify/bloomify7.png",
          "/projects/bloomify/bloomify8.png",
          "/projects/bloomify/bloomify9.png",
          "/projects/bloomify/bloomify10.png",
          "/projects/bloomify/bloomify11.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Bloomify is an elegant online flower shop designed to provide a delightful shopping experience for customers looking for floral arrangements for every occasion.",
        "The website was developed using HTML, CSS, Bootstrap, and JavaScript, focusing on responsive layouts and user-friendly navigation.",
        "From bouquets for special events to everyday floral gifts, Bloomify makes it simple for users to browse, select, and order flowers online.",
        "The clean and modern UI highlights the freshness and beauty of each arrangement, while the streamlined checkout process ensures a hassle-free purchase experience.",
      ],
      bullets: [
        "Developed an elegant online flower shop with HTML, CSS, Bootstrap, and JavaScript.",
        "Created a responsive and modern UI with seamless browsing and shopping experience.",
        "Designed product listing and detail pages with high-quality visuals.",
        "Implemented an intuitive navigation system to enhance user convenience.",
        "Delivered a visually appealing and customer-centric platform for floral shopping.",
      ],
    },
  },
  {
    id: "faima-maharashtra",
    companyName: "Faima Maharashtra",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Designed and developed the official website for Faima Maharashtra, showcasing charitable initiatives and enabling community participation.",
    websiteLink: "https://faimma.com/",
    techStack: ["HTML", "CSS", "Bootstrap", "Javascript"],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-07-15"),
    companyLogoImg: "/projects/ngo/ngo.png",
    pagesInfoArr: [
      {
        title: "Home Page",
        description:
          "Engaging landing page highlighting FAIMA’s mission and core charitable initiatives.",
        imgArr: [
          "/projects/ngo/ngo1.png",
          "/projects/ngo/ngo2.png",
          "/projects/ngo/ngo3.png",
          "/projects/ngo/ngo4.png",
          "/projects/ngo/ngo5.png",

        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The FAIMA Maharashtra website was developed to support and promote charitable initiatives across the state, focusing on social causes such as hunger, education, and healthcare.",
        "Built with HTML, CSS, Bootstrap, and JavaScript, the platform emphasizes accessibility, responsive design, and clear navigation to connect donors, volunteers, and communities.",
        "The website highlights FAIMA’s mission, ongoing programs, and impact stories, while offering dedicated sections for visitors to donate or register as volunteers.",
        "By fostering transparency and engagement, the site strengthens FAIMA’s role as a trusted platform for mobilizing resources and driving community-driven social change.",
      ],
      bullets: [
        "Designed and developed the official website for FAIMA Maharashtra.",
        "Created responsive and accessible layouts using HTML, CSS, Bootstrap, and JavaScript.",
        "Highlighted key initiatives in hunger relief, education, and healthcare.",
        "Implemented donation and volunteer sections to encourage community participation.",
        "Delivered a modern and user-friendly interface to enhance engagement with social causes.",
      ],
    },
  },
  {
    id: "floym-learning-hub",
    companyName: "Floym Learning Hub LLP",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed an interactive healthcare training platform designed to transform careers by providing essential skills for global healthcare settings.",
    websiteLink: "https://floymlearning.com/",
    techStack: ["HTML", "CSS", "Bootstrap", "Javascript", "React"],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-10-15"),
    companyLogoImg: "/projects/floym/floym.png",
    pagesInfoArr: [
      {
        title: "Home Page",
        description:
          "Modern landing page highlighting Floym’s mission to empower healthcare professionals with global training opportunities.",
        imgArr: [
          "/projects/floym/floym1.png",
          "/projects/floym/floym2.png",
          "/projects/floym/floym3.png",
          "/projects/floym/floym4.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Floym Learning Hub LLP is an interactive healthcare training platform designed to transform the careers of healthcare professionals. The platform provides essential skills and training tailored for global healthcare environments.",
        "I developed the platform with a focus on responsiveness, accessibility, and modern design principles. The system integrates dedicated sections for services and courses, ensuring clarity for learners exploring different training opportunities.",
        "The contact form was designed to be functional and user-friendly, directly linking inquiries to the Floym Learning Hub team. This streamlined communication fosters better engagement between the institution and aspiring healthcare professionals.",
        "By combining clear content presentation with a modern, responsive interface, the platform positions Floym Learning Hub as a trusted partner for healthcare training and career development.",
      ],
      bullets: [
        "Developed a professional healthcare training platform for Floym Learning Hub LLP.",
        "Implemented responsive design using HTML, CSS, Bootstrap, and React.",
        "Showcased healthcare services and courses with a clear, structured layout.",
        "Integrated functional contact and enrollment forms for seamless communication.",
        "Enhanced user engagement with a modern UI/UX focused on healthcare professionals.",
        "Strengthened Floym’s digital presence in the healthcare training domain.",
      ],
    },
  },
  {
    id: "healex-homecare",
    companyName: "Healex Homecare",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a comprehensive healthcare website connecting patients with doctors and caregivers for personalized home-based medical services.",
    websiteLink: "https://ssengar13.github.io/Healex-Homecare/",
    techStack: ["HTML", "CSS", "Bootstrap", "Javascript"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-03-01"),
    companyLogoImg: "/projects/healex/healex.png",
    pagesInfoArr: [
      {
        title: "Home Page",
        description:
          "Engaging landing page introducing Healex Homecare with clear navigation to services and patient care options.",
        imgArr: [
          "/projects/healex/healex1.png",
          "/projects/healex/healex2.png",
          "/projects/healex/healex3.png",
          "/projects/healex/healex4.png",
          "/projects/healex/healex5.png",
          "/projects/healex/healex6.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Healex Homecare is a healthcare website designed to bring high-quality medical services directly into patients’ homes. The platform connects users with experienced doctors and skilled caregivers, ensuring personalized and compassionate care.",
        "I developed the website using HTML, CSS, Bootstrap, and JavaScript to deliver a clean, modern, and responsive user experience. The layout emphasizes accessibility and clarity, making it easy for patients to explore available services and request assistance.",
        "The services page was structured to clearly outline medical consultations, routine check-ups, long-term care, and specialized treatments, while the contact form simplifies scheduling and inquiries.",
        "By combining user-centric design with functional features, the Healex Homecare website enhances trust and positions the brand as a reliable provider of home-based healthcare solutions.",
      ],
      bullets: [
        "Developed a comprehensive healthcare website for Healex Homecare.",
        "Designed responsive and user-friendly UI using HTML, CSS, Bootstrap, and JavaScript.",
        "Showcased healthcare services including doctor consultations and caregiver support.",
        "Implemented a functional contact form for inquiries and appointment scheduling.",
        "Delivered a modern and professional digital presence for a home healthcare brand.",
      ],
    },
  },
  {
    id: "downsouth-aj-hostel",
    companyName: "Down South AJ Hostel",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a hostel website showcasing room types, facilities, and a working contact form for easy enquiries and reservations.",
    websiteLink: "https://downsouthaj.com/",
    techStack: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP"],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-07-01"),
    companyLogoImg: "/projects/downsouth/downsouth.png",
    pagesInfoArr: [
      {
        title: "Home Page",
        description:
          "Landing page highlighting hostel facilities, room types, and navigation to booking and contact sections.",
        imgArr: [
          "/projects/downsouth/downsouth1.png",
          "/projects/downsouth/downsouth2.png",
          "/projects/downsouth/downsouth3.png",
          "/projects/downsouth/downsouth4.png",
          "/projects/downsouth/downsouth5.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Down South AJ Hostel is a frontend website designed to present the hostel’s facilities, room types, and provide an easy way for users to make enquiries.",
        "The website was built using HTML, CSS, Bootstrap, Javascript, and PHP for the working contact form, ensuring a responsive and user-friendly experience.",
        "Users can explore the hostel’s rooms and amenities and directly get in touch through the contact form, which sends enquiries to the hostel’s phone or email.",
        "The layout emphasizes clarity, ease of navigation, and mobile responsiveness, making it accessible to users across devices.",
        "This project highlights my skills in creating visually appealing, functional frontend websites with integrated communication features.",
      ],
      bullets: [
        "Developed a responsive hostel website using HTML, CSS, Bootstrap, and Javascript.",
        "Implemented a working contact form using PHP to send enquiries to the hostel.",
        "Showcased room types, amenities, and hostel facilities effectively.",
        "Designed a clear, user-friendly layout for easy navigation across devices.",
        "Enhanced user experience with intuitive interface and accessible contact options.",
      ],
    },
  },
  {
    id: "yelpcamp",
    companyName: "Freelance",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed YelpCamp, a full-stack web application allowing users to create, review, rate, and manage campgrounds with authentication and CRUD functionality.",
    websiteLink: "https://github.com/ssengar13/YelpCamp",
    techStack: ["HTML", "CSS", "Bootstrap", "Javascript", "Node.js", "express.js", "MongoDB"],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-10-01"),
    companyLogoImg: "/projects/yelpcamp/yelpcamp.png",
    pagesInfoArr: [
      {
        title: "Yelpcam",
        description:
          "Browse all campgrounds with details, images, and ratings. Users can click to view individual campgrounds.",
        imgArr: [
          "/projects/yelpcamp/yelpcamp 2.png",
          "/projects/yelpcamp/yelpcamp 3.png",
          "/projects/yelpcamp/yelpcamp 4.png",
          "/projects/yelpcamp/yelpcamp 5.png",
          "/projects/yelpcamp/yelpcamp 6.png",
          "/projects/yelpcamp/yelpcamp 7.png",
          "/projects/yelpcamp/yelpcamp 8.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "YelpCamp is a full-stack web application built as part of Colt Steele's web development course. Users can create, edit, delete, and review campgrounds, providing a social platform for outdoor enthusiasts.",
        "The project features full authentication and authorization, ensuring that only registered users can contribute content. MongoDB is used for data storage, while Express.js and Node.js handle backend logic.",
        "The frontend is built using HTML, CSS, Bootstrap, and JavaScript, providing a responsive and intuitive user experience.",
        "This project demonstrates CRUD operations, user authentication, and dynamic content handling in a full-stack environment, highlighting my skills in building complete web applications from scratch.",
      ],
      bullets: [
        "Implemented full CRUD functionality for campgrounds using Node.js and Express.js.",
        "Integrated user authentication and authorization with secure login and signup.",
        "Used MongoDB for storing user data, campgrounds, and reviews.",
        "Designed responsive UI with HTML, CSS, Bootstrap, and JavaScript.",
        "Enabled users to leave ratings and reviews for campgrounds.",
        "Showcased ability to build a full-stack web application end-to-end.",
      ],
    },
  }
];

export const featuredProjects = Projects.slice(0, 3);
