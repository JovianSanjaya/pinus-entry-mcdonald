'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Real-Time Micro Defect Detection",
      description: "YOLOv11-based system for detecting micro defects on metal surfaces with web interface. Features SAHI, weighted loss function, and statistical analysis dashboard for manufacturing quality control.",
      tags: ["YOLOv11", "Flask", "Computer Vision", "Tailwind CSS", "Raspberry Pi"],
      link: "https://www.canva.com/design/DAGeN4ZYVD0/UwvTtZ8d5p0oUrbrcL9AFA/edit",
      github: "https://github.com/JovianSanjaya",
      emoji: "🔍",
      image: "/projects/project1.jpg"
    },
    {
      title: "LifeFit",
      description: "Personalized care management app integrating smart technology and community-based caregiving with LLM chatbot, home therapy, nursing services, and doctor visits. Modern healthcare platform prioritizing security and efficiency.",
      tags: ["Android", "LLM", "Firebase", "Java", "Pantanal"],
      link: "https://github.com/JovianSanjaya",
      github: "https://github.com/JovianSanjaya",
      emoji: "💪",
      image: "/projects/project2.jpg"
    },
    {
      title: "HDB Flats Data Analysis",
      description: "Comprehensive data analysis to find value-for-money HDB flats in Singapore with strategic locations and amenities. Helps international students decide between buying vs renting with statistical insights.",
      tags: ["Python", "Pandas", "Seaborn", "Matplotlib", "NumPy"],
      link: "https://github.com/JovianSanjaya/DataAnalysisOfHdbFlatsInSingapore",
      github: "https://github.com/JovianSanjaya/DataAnalysisOfHdbFlatsInSingapore",
      emoji: "📊",
      image: "/projects/project3.jpg"
    },
    {
      title: "F.A.S.T Fire Alarm System",
      description: "Smart Fire Alarm System for intelligent fire detection with real-time alerts and hardware sensor integration. DevOps project utilizing continuous integration, deployment automation, and system monitoring.",
      tags: ["Docker", "Python", "Firebase", "Streamlit", "DevOps"],
      link: "https://github.com/JovianSanjaya/F.A.S.T",
      github: "https://github.com/JovianSanjaya/F.A.S.T",
      emoji: "🔥",
      image: "/projects/project4.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#292929] dark:text-white mb-6">
            All <span className="text-[#DA291C]">Projects</span>
          </h1>
          <p className="text-xl text-[#6C757D] dark:text-gray-400 max-w-3xl mx-auto">
            Following projects showcases my skills and experience through real-world examples of my work. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-white dark:bg-gray-700">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = "relative h-64 bg-gradient-to-br from-[#DA291C] to-[#FFC72C] flex items-center justify-center";
                      const emoji = document.createElement('span');
                      emoji.className = "text-9xl";
                      emoji.textContent = project.emoji;
                      parent.appendChild(emoji);
                    }
                  }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#292929] dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-[#6C757D] dark:text-gray-400 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-[#FFC72C] text-[#292929] px-3 py-1 rounded-full text-sm font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex-1 bg-[#DA291C] hover:bg-[#c02315] text-white font-bold py-3 px-6 rounded-md transition-all duration-300 text-center"
                  >
                    View Project
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-[#292929] hover:bg-[#1a1a1a] text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
