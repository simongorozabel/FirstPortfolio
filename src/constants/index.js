import {
  mobile,
  backend,
  creator,
  web,
  fitnessapp,
  pokedex,
  pugas,
  ecommerce_fitness,
  tiktaktoe,
  admin_ecommerce,
  store_ecommerce,
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
    title: "Design Thinking",
    icon: mobile,
  },
  {
    title: "Data Base",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Admin and E-commerce Store for Clothing brand",
    company_name: "",
    icon: "",
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Checkout with Stripe.",
      "API CRUD interface for Admin purposes.",
      "Multiple E-commerce creation.",
      "Web Design and Component Oriented.",
    ],
  },
  {
    title: "E-commerce Store for Fitness brand",
    company_name: "Academlo",
    icon: "",
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Log-in and Sign-in with user Token and Email verification.",
      "Protected CRUD's API and Routes.",
      "Products Cart and Purchases CRUD.",
      "Web Design and Component Oriented.",
    ],
  },
  {
    title: "Marketing Director",
    company_name: "PUGAS Enterprise",
    icon: pugas,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Real state property database up to date and clean to create ads.",
      "Collaborating with cross-functional teams.",
      "Flow state and resilience.",
    ],
  },
];

const projects = [
  {
    name: "E-commerce Store for Clothes",
    description:
      "The full Stack Web Store for Clothing Brand that uses one of the API's the admin below created. With Stripe integration to allow Card Payment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "mySQL",
        color: "blue-text-gradient",
      },
    ],
    image: store_ecommerce,
    source_code_link: "https://github.com/simongorozabel/ecommerce-store-admin",
    source_live_link: "https://ecommerce-store-simongorozabel.vercel.app/",
  },
  {
    name: "Admin for multiple E-commerce of Clothes",
    description:
      "The full Stack Web Admin for Clothing Brands that allows to create multiple stores API in one place, get track of your orders and upload products from scratch.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "mySQL",
        color: "blue-text-gradient",
      },
    ],
    image: admin_ecommerce,
    source_code_link: "https://github.com/simongorozabel/ecommerce-admin-store",
    source_live_link: "https://ecommerce-admin-simongorozabel.vercel.app/",
  },
  {
    name: "E-commerce Store for Fitness",
    description:
      "Full Stack E-commerce Store with focus in the Fitness Niche in wich you can login, sing-up and add to cart.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "blue-text-gradient",
      },
    ],
    image: ecommerce_fitness,
    source_code_link:
      "https://github.com/simongorozabel/E-commerce-ReactNodeSQL",
    source_live_link: "https://react-ecommerce-by-simon.netlify.app/",
  },
  {
    name: "Pokedex Web App",
    description:
      "Web application with public and protected routes that enables users to search and filter pokemons by name or type after knowing their names.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "router",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: pokedex,
    source_code_link: "https://github.com/simongorozabel/pokedex-project",
    source_live_link: "https://pokedex-simon.netlify.app/",
  },
  {
    name: "Exercise Web App",
    description:
      "Web-based app that allows users to search, and watch exercises from various sources.",
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
    source_live_link: "https://fitness-app-simon.netlify.app/",
  },
  {
    name: "Tic Tac Toe",
    description:
      "Play one of the most popular games in history. Now in your browser.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tiktaktoe,
    source_code_link: "https://github.com/simongorozabel/Tic-Tac-Toe",
    source_live_link: "https://tic-tac-toe-simon.netlify.app/",
  },
];

export { services, experiences, projects };
