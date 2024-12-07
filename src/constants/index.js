import {
  python,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,

  reactjs,
  
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  c,
  iiitdmj,
  c1,
  next,
  fooddel,
  fusion,
  socialmedia,
  great,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "mern Developer",
    icon: backend,
  },
  {
    title: "c++ programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "c++",
    icon: c1,
  },
  {
    name: "c",
    icon: c,
  },
];

const experiences = [
   {
    title: "Frontend Developer",
    company_name: "Great Stack",
    icon: great,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Developed a responsive user interface using React.js, ensuring a seamless user experience.",
      "Optimized APIs for faster processing, improving server response time by 30%.",
      "Received a Project Completion Certificate from GreatStack.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "IIIT",
    icon: iiitdmj,
    iconBg: "#383E56",
    date: "February 2024 - May 2024",
    points: [
      "Collaborated with CSE students on their semester project, contributing as a Backend Engineer despite being an ECE student.",
      "Integrated a Django backend, ensuring stable data flow and automating over 50 administrative tasks. ",
      "Gained hands-on experience working on a real-world ERP system, enhancing cross-domain technical and teamwork skills.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: `Fusion-Backend Engineer`,
    description:
      "Collaborated with CSE students on their semester project to develop an ERP system that automated over 50 administrative tasks. My contributions included integrating a robust Django backend, ensuring stable data flow and system reliability.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Restful APIs",
        color: "pink-text-gradient",
      },
    ],
    image: fusion,
    source_code_link: "",
  },
  {
    name: "Full Stack Social Media Application",
    description:
      " Designed and implemented a responsive social media platform with real-time notifications, enhancing user engagement by 25%. Focused on a mobile-first approach to ensure seamless accessibility across devices.  ",
    tags: [
      {
        name: "Node.Js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TailWind CSS",
        color: "pink-text-gradient",

      },
     

    ],
    image: socialmedia,
    source_code_link: "",
  },
  {
    name: "Food-Delivery-Website",
    description:
      "Developed a scalable platform capable of processing over 500 daily orders, optimized for server efficiency. Integrated secure payment gateways to ensure data protection and user trust.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Java Script",
        color: "green-text-gradient",
      },
      {
        name: "Restful APIs",
        color: "pink-text-gradient",
      },
    ],
    image: fooddel,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };