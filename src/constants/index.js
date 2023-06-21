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
  fitnessapp,
  pokedex,
  ecommerce,
  tiktaktoe,
  pugas,
  gentlegozo,
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
    title: "UI/UX",
    icon: web,
  },
  {
    title: "Components",
    icon: mobile,
  },
  {
    title: "Server",
    icon: backend,
  },
  {
    title: "Entrepreneur Mindset",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Entrepreneur",
    company_name: "GentleGozo",
    icon: gentlegozo,
    iconBg: "#383E56",
    date: "September 2018 - March 2020",
    points: [
      "Developing selling skills to drive customers into action.",
      "Collaborating with a small team to create high-quality products.",
      "Implementing digital marketing knowledge to retain customers.",
    ],
  },
  {
    title: "Marketing Director",
    company_name: "Pugas Enterprise",
    icon: pugas,
    iconBg: "#E6DEDD",
    date: "December 2021 - May 2022",
    points: [
      "Cleaning and keeping a property database up to date.",
      "Collaborating with cross-functional teams including civil engineers and real estate agents to understand the market.",
      "Nearly $9,000 in commissions to the company through basic Facebook and Instagram posts in 2 weeks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Simon proved me wrong.",
    name: "Mrs. Anonimous",
    designation: "CFO",
    company: "Anonimous Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients success like Simon does.",
    name: "Mr. Plato",
    designation: "COO",
    company: "Epistemology Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Simon optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Atenas Minerva",
    designation: "CTO",
    company: "Peace Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pokedex App",
    description:
      "Web application with public and protected routes that enables users to search and filter pokemons by name or type after knowing their names.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pokedex,
    source_code_link: "https://github.com/simongorozabel/pokedex-project",
    source_live_link: "https://pokedex-simon.netlify.app/",
  },
  {
    name: "Fitness Web App",
    description:
      "Web-based app that allows users to search, and watch exercises from various sources, providing a convenient and efficient solution for some training needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fitnessapp,
    source_code_link: "https://github.com/simongorozabel/Desktop_Fitness_App",
    source_live_link: "https://simon-desktop-fitness.netlify.app/",
  },

  {
    name: "Tik Tak Toe Game",
    description:
      "Play alone or with friends, this game will make you feel in another world if you are meant to fell it. I encourage you to win.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "components",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tiktaktoe,
    source_code_link: "https://github.com/simongorozabel/Tic-Tac-Toe",
    source_live_link: "https://tic-tac-toe-simon.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
