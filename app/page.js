"use client";

import { personalData } from "@/utils/data/personal-data";
import ContactSection from "./components/homepage/contact";
import HeroSection from "./components/homepage/hero-section";
import JourneyRoadmap from "./components/homepage/journey-roadmap";
import Link from "next/link";
import { BsArrowRight, BsPerson, BsBriefcase, BsCodeSquare, BsMortarboard, BsTools } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Home() {

  const showcaseCards = [
    {
      title: "About Me",
      description: "Learn more about my background, skills, and what drives me as a developer.",
      link: "/about",
      icon: BsPerson,
      gradient: "from-pink to-purple",
    },
    {
      title: "Experience",
      description: "Explore my professional journey and career milestones.",
      link: "/experience",
      icon: BsBriefcase,
      gradient: "from-purple to-pink",
    },
    {
      title: "Skills",
      description: "View my technical expertise across various technologies and tools.",
      link: "/skills",
      icon: BsTools,
      gradient: "from-pink to-purple",
    },
    {
      title: "Projects",
      description: "Check out my portfolio of completed projects and applications.",
      link: "/projects",
      icon: BsCodeSquare,
      gradient: "from-purple to-pink",
    },
    {
      title: "Education",
      description: "See my academic background and continuous learning journey.",
      link: "/education",
      icon: BsMortarboard,
      gradient: "from-purple to-pink",
    },
  ];

  return (
    <div suppressHydrationWarning>
      {/* Hero Section */}
      <HeroSection />

      {/* Journey Roadmap */}
      <JourneyRoadmap />

      {/* Explore Portfolio Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 lg:py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Explore My Portfolio
          </h2>
          <p className="text-white/70 text-lg">Navigate through different sections to learn more about me</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {showcaseCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link
                  href={card.link}
                  className="group relative bg-black/80 backdrop-blur-sm border border-purple/30 rounded-xl p-6 hover:border-pink/50 transition-all duration-300 hover:shadow-pink-glow block h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-3 rounded-lg bg-purple mb-4`}
                    >
                      <Icon className="text-white text-2xl" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-white mb-4">{card.description}</p>
                    <div className="flex items-center text-white font-medium group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <BsArrowRight className="ml-1 group-hover:ml-2 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}