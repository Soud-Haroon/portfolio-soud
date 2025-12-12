"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { useState } from "react";
import { Palette, Settings, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Categorize skills
  const categories = {
    all: "All Skills",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Tools & Others",
  };

  const skillCategories = {
    frontend: ["HTML", "CSS", "Javascript", "Typescript", "React", "Next JS", "Tailwind", "Bootstrap", "MaterialUI"],
    backend: ["Node JS", "Express", "NestJS", "FastAPI", "Django"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    tools: ["Git", "AWS", "Docker", "Nginx", "Figma", "Strapi", "Go"],
  };

  const getCategory = (skill) => {
    for (const [cat, skills] of Object.entries(skillCategories)) {
      if (skills.includes(skill)) return cat;
    }
    return "tools";
  };

  const filteredSkills = selectedCategory === "all" 
    ? skillsData 
    : skillsData.filter(skill => getCategory(skill) === selectedCategory);

  return (
    <div className="min-h-screen py-12 lg:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Technical Skills
        </h1>
        <p className="text-white text-lg">Technologies and tools I work with</p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {Object.entries(categories).map(([key, label]) => (
          <motion.button
            key={key}
            onClick={() => setSelectedCategory(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === key
                ? "bg-purple text-white"
                : "bg-black/50 border border-purple/30 text-white hover:border-purple hover:bg-purple/20"
            }`}
          >
            {label}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {filteredSkills.map((skill, index) => {
          const skillImg = skillsImage(skill);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group bg-black/80 backdrop-blur-sm border border-purple/30 rounded-xl p-6 hover:border-purple transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-black/50 rounded-lg group-hover:bg-purple/20 transition-colors overflow-hidden">
                  {skillImg && (
                    <Image
                      src={skillImg.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>
                <p className="text-sm font-medium text-white transition-colors text-center">
                  {skill}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-black/80 border border-purple/30 rounded-xl p-6"
        >
          <div className="flex justify-center mb-4">
            <Palette className="w-10 h-10 text-purple" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Frontend Development</h3>
          <p className="text-white">Creating beautiful and responsive user interfaces with modern frameworks</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-black/80 border border-purple/30 rounded-xl p-6"
        >
          <div className="flex justify-center mb-4">
            <Settings className="w-10 h-10 text-purple" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
          <p className="text-white">Building scalable and efficient server-side applications</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-black/80 border border-purple/30 rounded-xl p-6"
        >
          <div className="flex justify-center mb-4">
            <Wrench className="w-10 h-10 text-purple" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Tools & DevOps</h3>
          <p className="text-white">Deploying and managing applications with modern DevOps practices</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
