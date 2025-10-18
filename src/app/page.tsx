'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const titles = [
    "AI Software Engineer Student",
    "Full Stack Developer",
    "Ex Research Engineer Intern",
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);
  const achievements = [
    {
      title: "RoboCup Asia-Pacific Tianjin 2024",
      subtitle: "1st Prize - Two Categories",
      description: "Won 1st prizes in both Autonomous Delivery (ADL) and Vision Technical Challenge. Developed Nodes Sorting Algorithm and optimized pathfinding for mobile robots.",
      tags: ["Computer Vision", "Robotics", "Algorithms"],
      emoji: "🏆"
    },
    {
      title: "OPPO ColorOSHack 2023 Asia Pacific",
      subtitle: "Top 10 Finalist",
      description: "Represented school internationally, developed LifeFit app with LLM chatbot integration using OPPO's Pantanal software.",
      tags: ["Android", "LLM", "Firebase"],
      emoji: "🚀"
    },
    {
      title: "RoboCup Singapore Open 2024",
      subtitle: "1st Prize",
      description: "National champion in Autonomous Delivery Category. Competed individually and represented Singapore in international competition.",
      tags: ["C", "Robotics", "PID Control"],
      emoji: "🥇"
    },
    {
      title: "National Robotics Competition 2023",
      subtitle: "1st Prize",
      description: "Won 1st prize in Smart Transportation challenge. Optimized robot turns and stability using PID control and RGB sensors.",
      tags: ["C", "Robotics", "Sensors"],
      emoji: "🤖"
    },
    {
      title: "NUS HumanITy Challenge 2024",
      subtitle: "Top 10 Finalist",
      description: "Team leader for LifeFit project. Presented to Dell Technologies VP Asia Pacific, developed personalized caregiving app.",
      tags: ["Leadership", "Android", "Pitching"],
      emoji: "💡"
    },
    {
      title: "Research Paper Publication",
      subtitle: "SINCE 2025 Conference",
      description: "Published paper on AI Defect Detection Robustness in Real-time Non-Destructive Testing of Metal Surfaces during SIMTech internship.",
      tags: ["AI", "Computer Vision", "Research"],
      emoji: "📄"
    }
  ];

  const projects = [
    {
      title: "Real-Time Micro Defect Detection",
      description: "YOLOv11-based system for detecting micro defects on metal surfaces with web interface. Features SAHI, weighted loss function, and statistical analysis.",
      tags: ["YOLOv11", "Flask", "Computer Vision", "Tailwind CSS"],
      link: "https://www.canva.com/design/DAGeN4ZYVD0/UwvTtZ8d5p0oUrbrcL9AFA/edit",
      emoji: "🔍"
    },
    {
      title: "LifeFit",
      description: "Personalized care management app integrating smart technology and community-based caregiving with LLM chatbot, home therapy, and nursing services.",
      tags: ["Android", "LLM", "Firebase", "Java"],
      link: "https://github.com/JovianSanjaya",
      emoji: "💪"
    },
    {
      title: "HDB Flats Data Analysis",
      description: "Comprehensive analysis to find value-for-money HDB flats in Singapore with strategic locations and amenities. Buy vs rent decision analysis.",
      tags: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      link: "https://github.com/JovianSanjaya/DataAnalysisOfHdbFlatsInSingapore",
      emoji: "📊"
    },
    {
      title: "F.A.S.T Fire Alarm System",
      description: "DevOps project for intelligent fire detection with real-time alerts, hardware sensor integration, and continuous deployment automation.",
      tags: ["Docker", "Python", "Firebase", "Streamlit"],
      link: "https://github.com/JovianSanjaya/F.A.S.T",
      emoji: "🔥"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section - Card Style */}
      <section className="relative bg-white dark:bg-gray-900 overflow-hidden pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-black text-[#292929] dark:text-white mb-6 leading-tight">
                Hi, I&apos;m <span className="text-[#DA291C]">Jovian</span>
              </h1>
              <div className="h-20 mb-6">
                <p className="text-2xl md:text-3xl font-bold text-[#DA291C]">
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-1 h-8 bg-[#DA291C] ml-2"
                  />
                </p>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-[#6C757D] dark:text-gray-400 mb-8 max-w-lg"
              >
                Goal-oriented computer science student with a fervent passion for software development and artificial intelligence. Proven problem-solving skills demonstrated through hackathons and development projects.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/projects"
                  className="bg-[#DA291C] hover:bg-[#c02315] text-white font-bold py-4 px-8 rounded-md transition-all duration-300 inline-block shadow-lg"
                >
                  View Projects
                </Link>
                <Link
                  href="/achievements"
                  className="bg-[#FFC72C] hover:bg-[#F4B41A] text-[#292929] font-bold py-4 px-8 rounded-md transition-all duration-300 inline-block shadow-lg"
                >
                  See Achievements
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFC72C] rounded-full blur-3xl opacity-20"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-[#FFC72C] shadow-2xl">
                  <img 
                    src="/profile.jpg" 
                    alt="Jovian Sanjaya Putra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section - 3 Cards */}
      <section className="py-16 bg-[#F8F9FA] dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#292929] dark:text-white mb-12 text-center"
          >
            Overview
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-black text-[#292929] dark:text-white mb-3">
                Full Time Student
              </h3>
              <p className="text-[#6C757D] dark:text-gray-400">
                Computer Science major with strong foundation in Python and JavaScript. Active learner seeking opportunities in innovative tech projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-2xl font-black text-[#292929] dark:text-white mb-3">
                Full Stack Developer
              </h3>
              <p className="text-[#6C757D] dark:text-gray-400">
                Experienced in building web applications, mobile apps, and AI-powered solutions with modern frameworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-black text-[#292929] dark:text-white mb-3">
                AI Enthusiast
              </h3>
              <p className="text-[#6C757D] dark:text-gray-400">
                Passionate about AI, computer vision, and robotics. Published research in AI defect detection systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 bg-white dark:bg-gray-900" id="experience">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#292929] dark:text-white mb-12 text-center"
          >
            Work Experience
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border-2 border-[#FFC72C]"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="text-5xl">🏢</div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-[#292929] dark:text-white mb-2">
                  Research Engineer Intern
                </h3>
                <p className="text-xl font-bold text-[#DA291C] mb-2">
                  Singapore Institute of Manufacturing Technology (SIMTech)
                </p>
                <p className="text-[#6C757D] dark:text-gray-400 font-semibold mb-6">09/2024 - 03/2025</p>
              </div>
            </div>
            <ul className="space-y-4 text-[#292929] dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-[#DA291C] font-bold mr-3 text-xl">•</span>
                <span>Developed Real-Time Object Detection Model using YOLOv11 to detect defects on metal surfaces for non-destructive testing. Integrated with Raspberry Pi and microscopic lens for micro-defect detection.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DA291C] font-bold mr-3 text-xl">•</span>
                <span>Developed web interface for offline detection with image upload and prediction features. Built statistical analysis dashboard showing frequency, area, and confidence classification of defects.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DA291C] font-bold mr-3 text-xl">•</span>
                <span>Conducted research on AI Defect Detection Robustness in Real-time Non-Destructive Testing and published paper in SINCE 2025 conference.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DA291C] font-bold mr-3 text-xl">•</span>
                <span>Assisted Optics Imaging System Department with soil X-ray testing workflow by handling soil samples and machine operations.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-[#F8F9FA] dark:bg-gray-800" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#292929] dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-[#6C757D] dark:text-gray-400 max-w-3xl mx-auto">
              Some of my works
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-white dark:bg-gray-700">
                  <img 
                    src={`/projects/project${index + 1}.jpg`}
                    alt={project.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.className = "relative h-64 bg-gradient-to-br from-[#DA291C] to-[#FFC72C] flex items-center justify-center";
                        const emoji = document.createElement('span');
                        emoji.className = "text-8xl";
                        emoji.textContent = project.emoji;
                        parent.appendChild(emoji);
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-[#292929] dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#6C757D] dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-[#FFC72C] text-[#292929] px-3 py-1 rounded-full text-sm font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-block text-[#DA291C] hover:text-[#c02315] font-bold text-lg"
                  >
                    View Project →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-[#DA291C] hover:bg-[#c02315] text-white font-bold py-4 px-12 rounded-md transition-all duration-300 text-lg shadow-lg"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white dark:bg-gray-900" id="achievements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#292929] dark:text-white mb-4">
              Featured Achievements
            </h2>
            <p className="text-lg text-[#6C757D] dark:text-gray-400 max-w-3xl mx-auto">
              Some of my achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.slice(0, 3).map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden bg-white dark:bg-gray-700">
                  <img 
                    src={`/achievements/achievement${index + 1}.jpg`}
                    alt={achievement.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.className = "relative h-48 bg-gradient-to-br from-[#FFC72C] to-[#DA291C] flex items-center justify-center";
                        const emoji = document.createElement('span');
                        emoji.className = "text-7xl";
                        emoji.textContent = achievement.emoji;
                        parent.appendChild(emoji);
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#292929] dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-lg font-bold text-[#DA291C] mb-3">
                    {achievement.subtitle}
                  </p>
                  <p className="text-[#6C757D] dark:text-gray-400 mb-4 text-sm line-clamp-3">
                    {achievement.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.map((tag, i) => (
                      <span key={i} className="bg-[#F8F9FA] dark:bg-gray-700 text-[#292929] dark:text-gray-300 px-2 py-1 rounded text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/achievements"
              className="inline-block bg-[#FFC72C] hover:bg-[#F4B41A] text-[#292929] font-bold py-4 px-12 rounded-md transition-all duration-300 text-lg shadow-lg"
            >
              View All Achievements
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8F9FA] dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-[#292929] dark:text-white mb-6"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-[#6C757D] dark:text-gray-400 mb-8"
          >
            Interested in collaborating on innovative projects? Let&apos;s connect!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="https://www.linkedin.com/in/jovian-sanjaya-putra/"
              target="_blank"
              className="bg-[#DA291C] hover:bg-[#c02315] text-white font-bold py-4 px-8 rounded-md transition-all duration-300 inline-block shadow-lg"
            >
              Connect on LinkedIn
            </Link>
            <Link
              href="https://github.com/JovianSanjaya"
              target="_blank"
              className="bg-[#FFC72C] hover:bg-[#F4B41A] text-[#292929] font-bold py-4 px-8 rounded-md transition-all duration-300 inline-block shadow-lg"
            >
              View GitHub
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
