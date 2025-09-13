import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "flickstar",
    position: "Frontend Developer - ReactJS",
    company: "FlickStar",
    location: "Remote",
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    description: [
      "Developing and maintaining a feature-rich social media application using React.js, Redux, and React Router.",
      "Building real-time UI features like media uploads, drag-and-drop files, editing tools (filters, text, GIFs), notifications, and user interactions.",
      "Implementing multi-language localization (i18n) and content translation via Google Translate API.",
      "Integrating third-party services such as Stripe/PayPal for payments, Google Maps, and Firebase for real-time notifications.",
      "Converting Figma designs into responsive, SEO-optimized, and pixel-perfect UIs aligned with modern UI/UX standards.",
      "Optimizing application performance through lazy loading, caching, and structured metadata.",
      "Ensuring security with JWT, OAuth, and best practices for authentication and data protection.",
    ],
    achievements: [
      "Successfully delivered a scalable social media platform with real-time features and seamless UX.",
      "Enhanced global reach by implementing multi-language localization and automated content translation.",
      "Improved performance and SEO ranking through advanced optimizations, achieving faster load times.",
      "Collaborated with designers and backend developers to ship responsive and pixel-perfect UIs.",
      "Strengthened security with modern authentication protocols, safeguarding user data.",
    ],
    skills: [
      "Javascript",
      "React",
      "Redux",
      "Redux",
      "HTML",
      "CSS",
      "Figma",
      "Firebase",
      "i18n",
      "Google Maps API",
      "JWT",
      "OAuth",
    ],
    companyUrl: "https://about.flickstar.net/",
    logo: "/experience/flickstar.png",
  },
  {
    id: "unifiedvoice",
    position: "Jr. Software Developer",
    company: "Unified Voice Communication Pvt Ltd",
    location: "Pune, Maharashtra",
    startDate: new Date("2023-02-01"),
    endDate: new Date("2024-12-01"),
    description: [
      "Developed and deployed web applications using React.js and Node.js with a focus on mobile responsiveness and cross-browser compatibility.",
      "Integrated RESTful APIs and implemented AJAX/JSON for real-time data updates and seamless interactions.",
      "Designed user-friendly interfaces and optimized frontend/backend performance to improve scalability and reduce load times.",
      "Collaborated directly with clients through demos and presentations, translating technical solutions into business value.",
      "Contributed to marketing initiatives by creating digital assets such as posters and videos to support product promotions.",
    ],
    achievements: [
      "Delivered scalable, responsive web applications that improved client engagement and satisfaction.",
      "Reduced average application load time through frontend and backend optimizations.",
      "Successfully integrated multiple APIs, enabling real-time functionality for communication products.",
      "Enhanced product visibility by supporting marketing campaigns with digital assets.",
    ],
    skills: [
      "Javascript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "AJAX",
      "REST APIs",
      "MongoDB",
    ],
    companyUrl: "https://unifiedvoice.in/", // 🔹 (if official site is different, replace this link)
    logo: "/experience/uvc.jpeg",
  },
  {
    id: "recruitment",
    position: "Lead Recruiter / Talent Advocate",
    company: "Freelance & Consulting",
    location: "Pune | Vadodara",
    startDate: new Date("2018-06-01"),
    endDate: new Date("2022-12-01"),
    description: [
      "Managed end-to-end recruitment for both US and domestic markets across tech and non-tech roles.",
      "Built and nurtured strong client and stakeholder relationships to meet hiring goals.",
      "Collaborated within Agile teams, gaining transferable skills in client-facing communication, team coordination, and process optimization.",
    ],
    achievements: [
      "Successfully placed candidates across multiple domains, ensuring consistent client satisfaction.",
      "Developed recruitment pipelines that reduced average hiring time.",
      "Strengthened stakeholder trust through transparent communication and timely delivery.",
    ],
    skills: [
      "Recruitment",
      "Client Relations",
      "Agile Methodology",
      "Stakeholder Management",
      "Communication"
    ],
    companyUrl: "#",
    logo: "/logo.png"
  },
];
