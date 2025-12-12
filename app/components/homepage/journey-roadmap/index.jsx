"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const journeyData = [
  {
    id: 1,
    title: "Starting the Journey",
    year: "2017-2021",
    description: "Began my journey in computer science, earning a Bachelor's degree while building a strong foundation in programming, software development, and problem-solving. Developed a passion for creating innovative solutions and continuously learning new technologies.",
    milestone: "Foundations",
    isVideo: true
  },
  {
    id: 2,
    title: "Mobile Application Developer",
    year: "Aug 2021 – Jun 2022",
    description: "Started my professional career at Alchemative, developing and maintaining Flutter apps for enterprise-level e-commerce platforms. Participated in Agile workflows including sprint planning, standups, and retrospectives. Increased app stability and reduced crash rates via structured testing and QA processes.",
    milestone: "Professional Start",
    image: "/image/travel.jpg"
  },
  {
    id: 3,
    title: "Mobile Application Developer",
    year: "Jul 2022 – Aug 2023",
    description: "Joined Growex Solutions where I built cross-platform Flutter applications for e-commerce and business clients. Integrated third-party APIs, Firebase Cloud Messaging, and Realtime Database. Improved app load time by 30% through performance optimization and refactoring. Collaborated with designers to convert Figma UI mockups into high-performance mobile screens.",
    milestone: "Growth",
    image: "/image/crefin.jpg"
  },
  {
    id: 4,
    title: "Project Developer Lead",
    year: "Sep 2023 – Aug 2025",
    description: "Led cross-functional teams at Langara College to design and develop three full-scale web and mobile applications for real-world clients. Developed Flutter frontends and Node.js/Firebase backends across multiple projects. Managed Agile sprints, task allocation, and Git workflows, improving delivery efficiency. Collaborated closely with UI/UX designers and the AI team to integrate intelligent solutions and deliver polished, production-ready web apps. Designed and documented REST APIs, improving system integration and performance. Enhanced overall product quality by optimizing data handling, reducing renders, and improving component reusability.",
    milestone: "Leadership",
    image: "/image/real-estate.jpg"
  }
];

export default function JourneyRoadmap() {
  return (
    <section className="py-16 lg:py-24 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          My Journey
        </h2>
        <p className="text-white/70 text-lg">A visual timeline of my professional growth and milestones</p>
      </motion.div>

      {/* Journey Timeline */}
      <div className="max-w-6xl mx-auto relative">
        {/* Dotted Line - Desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-to-b from-purple/20 via-purple/20 to-purple/20 opacity-30" 
               style={{
                 backgroundImage: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 1px, transparent 1px)',
                 backgroundSize: '8px 24px',
                 backgroundPosition: '0 0'
               }}
          ></div>
        </div>

        {/* Journey Cards */}
        <div className="space-y-24 lg:space-y-32">
          {journeyData.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="w-6 h-6 rounded-full bg-purple border-4 border-black"
                  />
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${isEven ? 'lg:pr-12' : 'lg:pl-12'} lg:w-1/2`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-black/80 backdrop-blur-sm border border-purple/30 rounded-xl p-6 hover:border-pink/50 transition-all duration-300 hover:shadow-pink-glow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-black border border-purple/30 rounded-lg text-white text-xs font-bold">
                        {item.milestone}
                      </span>
                      <span className="text-white font-semibold">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>

                {/* Video Placeholder or Image Card */}
                <div className={`flex-1 ${isEven ? 'lg:pl-12' : 'lg:pr-12'} lg:w-1/2`}>
                  {item.isVideo ? (
                    // Video Placeholder for first item
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group overflow-hidden rounded-xl border border-purple/30 bg-black"
                    >
                    <div className="absolute inset-0 bg-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <div className="w-full h-64 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-purple/5"></div>
                      <div className="relative z-20 flex flex-col items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="mb-4"
                        >
                          <FaPlayCircle className="text-6xl text-white/80 group-hover:text-white transition-colors duration-300" />
                          </motion.div>
                          <p className="text-white/70 text-sm font-medium">Video Coming Soon</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ) : (
                    // Image for remaining items
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      className="relative group overflow-hidden rounded-xl border border-purple/30"
                    >
                      <div className="absolute inset-0 bg-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Future Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-24 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>
          <p className="text-white/70 mt-4 text-lg font-medium">The journey continues...</p>
        </motion.div>
      </div>
    </section>
  );
}

