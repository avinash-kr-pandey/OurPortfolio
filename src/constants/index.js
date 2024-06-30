import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  school,
  college,
  intern,
  company,

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
    title: "Web Development",
    icon: web,
  },
  {
    title: "JavaScript Enthusiast",
    icon: mobile,
  },
  {
    title: "Performance Optimization",
    icon: backend,
  },
  {
    title: "APIs Intigrations",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI ",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScripts",
    icon: typescript,
  },
  {
    name: "Slak",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend  Developer",
    company_name: "Katina Skills PVT LTD",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Spearheading frontend development initiatives at Katina Skills PVT LTD, leveraging expertise in modern web technologies and frameworks.",
      "Collaborating closely with cross-functional teams to translate design concepts into responsive and interactive user interfaces.",
      "Ensuring adherence to industry best practices and standards while implementing frontend solutions to meet project requirements.",
      "Continuously expanding skill set and staying updated with latest frontend development trends and technologies to drive innovation and excellence in project deliverables.",
    ],
  },
 
 
  {
    title: "Internship",
    company_name: "Hoping Minds",
    icon: intern,
    iconBg: "#383E56",
    date: "Jan 2022 - Oct 2022",
    points: [
      "Actively engaging in learning and practical application of MERN stack technologies during the internship tenure.",
      "Contributing to the development of various small-scale projects, honing skills in full-stack development.",
      "Demonstrating adaptability and problem-solving abilities while tackling challenges encountered during project work.",
      "Participating in mentorship sessions and seeking guidance from experienced professionals to accelerate learning and professional growth.",
    ],
  },
  {
    title: "Bachelor of Computer Applications(BCA)",
    company_name: "National Business College, Patna",
    icon: college,
    iconBg: "#E6DEDD",
    date: "April 2018 - December 2021",
    points: [
      "Designing a user-friendly interface for students to submit feedback on various aspects of their college experience.",
      "Implementing secure authentication and authorization mechanisms to ensure only authorized users can access and submit feedback.",
      "Developing a database schema to store feedback data efficiently and securely.",
      "Utilizing Java frameworks and libraries to streamline the development process and enhance system functionality.",
      "Conducting thorough testing to identify and resolve any bugs or issues before deploying the feedback system for use by students and faculty.",
    ],
  },
  
  {
    title: "Intermediate",
    company_name: "A.V.P Patna",
    icon: school,
    iconBg: "#383E56",
    date: "March 2016 - April 2018",
    points: [
      "Requesting specific feedback on assignments or exams to understand areas of strength and weakness.",
      "Actively listening during feedback sessions to grasp suggestions for improvement.",
      "Taking notes during feedback discussions to reference later for self-improvement.",
      "Setting measurable goals based on received feedback to track progress over time.",
      
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
    name: "HopingMinds Courses",
    description:
      "HopingMinds Courses is a dynamic learning and sales platform where users can access and purchase a variety of courses. As a frontend developer on this project, I leverage React, JavaScript, Tailwind CSS, and API integration to create a seamless and engaging user experience. My focus is on combining these technologies to enhance usability and functionality across the platform.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.hopingminds.com",
  },
  {
    name: "Chartered Accountant",
    description:
      "In the Chartered Accountant project, I apply the frontend technologies—React, JavaScript, Only CSS For designing, and API integration—to implement comprehensive features related to Chartered Accountant services. This includes designing and developing functionalities that cater specifically to the needs of Chartered Accountants and their clients, ensuring a user-friendly and efficient interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "API Integration",
        color: "green-text-gradient",
      },
     
    ],
    image: jobit,
    source_code_link: "https://github.com/avinash-kr-pandey",
  },
  {
    name: "Groceryfy Website",
    description:
      "The Groceryfy Website project has been successfully completed. This client-focused initiative involved comprehensive frontend development using technologies like React, JavaScript, Tailwind CSS, and API integrations. The project aimed to create a seamless, user-friendly, and efficient online shopping experience for groceries, ensuring intuitive navigation and robust, reliable functionality for users.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScripts",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "APIs",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://grocerify-frontend.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
