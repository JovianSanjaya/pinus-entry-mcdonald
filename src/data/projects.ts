export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration for secure payments.",
    image: "/projects/project1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates using Socket.io and MongoDB.",
    image: "/projects/project2.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current weather and forecasts using OpenWeather API.",
    image: "/projects/project3.jpg",
    tags: ["React", "API Integration", "Chart.js"],
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website with dark mode, animations, and dynamic content management.",
    image: "/projects/project4.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A modern blog platform with Markdown support, SEO optimization, and content management system.",
    image: "/projects/project5.jpg",
    tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A fitness tracking app with workout plans, progress tracking, and nutrition logging features.",
    image: "/projects/project6.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    link: "https://example.com",
    github: "https://github.com"
  }
];
