'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function AchievementsPage() {
  const achievements = [
    {
      title: "RoboCup Asia-Pacific Tianjin 2024",
      subtitle: "1st Prize - Two Categories",
      description: "Won 1st prizes in both Autonomous Delivery (ADL) and Vision Technical Challenge. Developed Nodes Sorting Algorithm and optimized pathfinding for mobile robots. Competition included priority-based package delivery with computer vision for barcode navigation.",
      tags: ["Computer Vision", "Robotics", "Algorithms", "C Programming", "Pathfinding"],
      emoji: "🏆",
      image: "/achievements/achievement1.jpg",
      year: "2024"
    },
    {
      title: "OPPO ColorOSHack 2023 Asia Pacific",
      subtitle: "Top 10 Finalist",
      description: "Represented school internationally, developed LifeFit app with LLM chatbot integration using OPPO's Pantanal software. First international hackathon experience, balancing school and competition. Improved technical skills in Android development and LLM implementation.",
      tags: ["Android", "LLM", "Firebase", "Java", "Hackathon"],
      emoji: "🚀",
      image: "/achievements/achievement2.jpg",
      year: "2023"
    },
    {
      title: "RoboCup Singapore Open 2024",
      subtitle: "1st Prize",
      description: "National champion in Autonomous Delivery Category. Competed individually and represented Singapore in international competition. Planned shortest routes and fine-tuned PID Control for stable robot performance throughout the competition.",
      tags: ["C", "Robotics", "PID Control", "Autonomous Systems"],
      emoji: "🥇",
      image: "/achievements/achievement3.jpg",
      year: "2024"
    },
    {
      title: "National Robotics Competition 2023",
      subtitle: "1st Prize",
      description: "Won 1st prize in Smart Transportation challenge. Optimized robot turns by making them round instead of sharp, significantly reducing completion time. Improved stability using PID control and utilized robot sensors through configuration understanding.",
      tags: ["C", "Robotics", "Sensors", "RGB Detection", "Line Tracing"],
      emoji: "🤖",
      image: "/achievements/achievement4.jpg",
      year: "2023"
    },
    {
      title: "NUS HumanITy Challenge 2024",
      subtitle: "Top 10 Finalist",
      description: "Team leader for LifeFit project. Presented to Dell Technologies VP Asia Pacific and stakeholders. Developed mobile application while team handled web app, business model, and market research. Exceeded expectations despite not winning top 3.",
      tags: ["Leadership", "Android", "Pitching", "Project Management"],
      emoji: "💡",
      image: "/achievements/achievement5.jpg",
      year: "2024"
    },
    {
      title: "Research Paper Publication",
      subtitle: "SINCE 2025 Conference",
      description: "Published paper on AI Defect Detection Robustness in Real-time Non-Destructive Testing of Metal Surfaces during SIMTech internship. Addressed challenges like surface variability, environmental factors, and defect diversity. Proposed multi-model AI approach and cost-effective real-time NDT platform.",
      tags: ["AI", "Computer Vision", "Research", "Non-destructive Testing", "YOLOv11"],
      emoji: "📄",
      image: "/achievements/achievement6.jpg",
      year: "2025"
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
            My <span className="text-[#FFC72C]">Achievements</span>
          </h1>
          <p className="text-xl text-[#6C757D] dark:text-gray-400 max-w-3xl mx-auto">
                The achievements below show my active involvement in non-academic activities, helping me grow my interest in AI and software development. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden bg-white dark:bg-gray-700">
                <img 
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = "relative h-56 bg-gradient-to-br from-[#FFC72C] to-[#DA291C] flex items-center justify-center";
                      const emoji = document.createElement('span');
                      emoji.className = "text-8xl";
                      emoji.textContent = achievement.emoji;
                      parent.appendChild(emoji);
                    }
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#DA291C] font-black px-4 py-2 rounded-full text-sm">
                  {achievement.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-[#292929] dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-lg font-bold text-[#DA291C] mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-[#6C757D] dark:text-gray-400 mb-4 text-sm">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/"
            className="inline-block bg-[#DA291C] hover:bg-[#c02315] text-white font-bold py-4 px-12 rounded-md transition-all duration-300 text-lg shadow-lg"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
