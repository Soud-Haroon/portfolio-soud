"use client";

import { experiences } from "@/utils/data/experience";
import Link from "next/link";
import { BsBriefcase, BsCalendar3 } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ExperiencePage() {
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
          Professional Experience
        </h1>
        <p className="text-white text-lg">My career journey and professional milestones</p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple/30 hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex relative z-10">
                  <div className="w-16 h-16 rounded-full bg-purple p-0.5 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <BsBriefcase className="text-white text-xl" />
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-1 bg-black/80 backdrop-blur-sm border border-purple/30 rounded-xl p-6 lg:p-8 hover:border-purple transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-white font-medium mb-2">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-white bg-purple/20 px-4 py-2 rounded-lg border border-purple/30 w-fit">
                      <BsCalendar3 />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <div className="mt-4">
                      <p className="text-white leading-relaxed text-sm lg:text-base">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-black/80 border border-purple/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h3>
            <p className="text-white mb-6">I&apos;m always open to discussing new opportunities and exciting projects.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-purple rounded-lg text-white font-semibold hover:bg-white hover:text-purple transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
